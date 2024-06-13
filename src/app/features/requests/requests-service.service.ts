import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '@app/api-config';
import {IFormType} from '@shared/models/form-type.interface';
import {IRequest} from '@shared/models/request.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private _selectedFormType = new BehaviorSubject<IFormType>({fields: [], id: 0, name: ''});
  selectedFormType$ = this._selectedFormType.asObservable();

  constructor(private http: HttpClient) {
  }

  get selectedFormType(): IFormType {
    return this._selectedFormType.value;
  }

  set selectedFormType(value: IFormType) {
    this._selectedFormType.next(value);
  }

  /**
   * Fetches form types from the API and maps them to Formly fields.
   * @returns Observable<IFormType[]>
   */
  getFormTypes(): Observable<IFormType[]> {
    return this.http.get<IFormType[]>(`${API_ENDPOINTS.getFormTypes()}`).pipe(
      map((formTypes: IFormType[]) => {
        const mappedFormTypes = formTypes.map(formType => ({
          ...formType,
          fields: this.mapToFormlyFields(formType.fields),
        }));
        console.log('Mapped Form Types:', mappedFormTypes);
        return mappedFormTypes;
      }),
      catchError(this.handleError<IFormType[]>('getFormTypes', []))
    );
  }


  /**
   * Fetches requests from the API.
   * @returns Observable<IRequest[]>
   */
  getRequests(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(`${API_ENDPOINTS.getRequests()}`).pipe(
      map((response: IRequest[]) => response),
      catchError(this.handleError<IRequest[]>('getRequests', []))
    );
  }

  /**
   * Maps backend field definitions to Formly field configurations.
   * @param fields The fields to map.
   * @returns An array of Formly field configurations.
   */
  private mapToFormlyFields(fields: any[]): any[] {
    return this.groupFieldsByRow(fields).map(rowFields => ({
      fieldGroupClassName: 'grid',
      fieldGroup: rowFields.map(this.mapFieldToFormly),
    }));
  }

  /**
   * Groups fields by their specified row.
   * @param fields The fields to group.
   * @returns An array of grouped fields.
   */
  private groupFieldsByRow(fields: any[]): any[][] {
    const rows: { [key: number]: any[] } = {};
    fields.forEach(field => {
      const rowIndex = field.properties.uiRow;
      if (!rows[rowIndex]) rows[rowIndex] = [];
      rows[rowIndex].push(field);
    });
    return Object.values(rows);
  }

  /**
   * Maps a single field to a Formly field configuration.
   * @param field The field to map.
   * @returns Formly field configuration.
   */
  private mapFieldToFormly = (field: any): any => {
    const validation = this.mapValidationRules(field.validationRules);
    return {
      className: this.mapUiColPercentageToClass(field.properties.uiColPercentage),
      key: field.key,
      type: this.mapUiTypeToFieldType(field.uiType),
      defaultValue: null,
      wrappers: ['formly-field'],
      props: {
        label: field.properties.label,
        placeholder: field.properties.placeholder || '',
        required: validation.required,
        options: this.mapOptions(field.options),
        type: field.uiType === 'color' ? 'color' : undefined,
        min: validation.min,
        max: validation.max,
        pattern: validation.pattern,
        maxLength: validation.maxLength,
        minLength: validation.minLength,

      },
      validation: validation.messages ? {messages: validation.messages} : undefined,
      expressions: this.mapExpressions(field),
    };
  };

  /**
   * Maps UI column percentage to CSS class.
   * @param uiColPercentage The UI column percentage.
   * @returns CSS class string.
   */
  private mapUiColPercentageToClass(uiColPercentage: number): string {
    const colClasses: { [key: number]: string } = {
      100: 'md:col-12',
      75: 'md:col-9',
      66.6667: 'md:col-8',
      50: 'md:col-6',
      41.6667: 'md:col-5',
      33.3333: 'md:col-4',
      25: 'md:col-3',
      16.6667: 'md:col-2',
      8.3333: 'md:col-1',
    };
    return colClasses[uiColPercentage] || 'md:col-12';
  }

  /**
   * Maps validation rules to Formly validation configurations.
   * @param rules The validation rules to map.
   * @returns Validation configuration object.
   */
  private mapValidationRules(rules: any[]): {
    required: boolean;
    messages?: any;
    min?: number;
    max?: number;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
  } {
    if (!rules) return {required: false};

    const validation: {
      required: boolean;
      messages?: any;
      min?: number;
      max?: number;
      pattern?: string;
      maxLength?: number;
      minLength?: number;
    } = {required: false, messages: {}};

    rules.forEach(rule => {
      switch (rule.type) {
        case 'Required':
          validation.required = true;
          validation.messages['required'] = rule.message || 'This field is required';
          break;
        case 'Pattern':
          validation.pattern = rule.pattern;
          validation.messages['pattern'] = rule.message || 'Invalid format';
          break;
        case 'Min':
          validation.min = rule.min;
          validation.messages['min'] = rule.message || `Value should be at least ${rule.min}`;
          break;
        case 'Max':
          validation.max = rule.max;
          validation.messages['max'] = rule.message || `Value should be at most ${rule.max}`;
          break;
        case 'maxLength':
          validation.maxLength = rule.max;
          validation.messages['maxLength'] = rule.message || `Value should be at most ${rule.maxLength} characters`;
          break;
        case 'minLength':
          validation.minLength = rule.min;
          validation.messages['minLength'] = rule.message || `Value should be at least ${rule.minLength} characters`;
          break;
      }
    });

    return validation;
  }

  /**
   * Maps field options to Formly format.
   * @param options The options to map.
   * @returns Formly options format.
   */
  private mapOptions(options: any): { label: any; value: any }[] | undefined {
    return options ? options.map((option: { label: any; value: any }) => ({
      label: option.label,
      value: option.value,
    })) : undefined;
  }

  /**
   * Maps expressions from field validation rules to Formly expressions.
   * @param field The field to map expressions for.
   * @returns Expression configuration object.
   */
  private mapExpressions(field: any): { [key: string]: string } {
    const expressions: { [key: string]: string } = {};

    if (field.validationRules) {
      field.validationRules.forEach((rule: { expression: string }) => {
        if (rule.expression) {
          expressions['hide'] = `!model.${rule.expression}`;
          expressions['props.required'] = `model.${rule.expression}`;
        }
      });
    }

    return expressions;
  }

  /**
   * Maps UI type to Formly field type.
   * @param uiType The UI type to map.
   * @returns Formly field type.
   */
  private mapUiTypeToFieldType(uiType: string): string {
    switch (uiType) {
      case 'radio':
      case 'checkbox':
      case 'input':
      case 'textarea':
      case 'slider':
      case 'date':
        return uiType;
      case 'color':
        return 'input';
      default:
        return 'input';
    }
  }

  /**
   * Handles HTTP operation failures.
   * @param operation Name of the operation that failed.
   * @param result Default value to return on failure.
   * @returns Observable<T>
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
