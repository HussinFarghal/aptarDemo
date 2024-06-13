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
  constructor(private http: HttpClient) {
  }

  private _selectedFormType = new BehaviorSubject<IFormType>({fields: [], id: 0, name: ''});
  selectedFormType$ = this._selectedFormType.asObservable();

  get selectedFormType(): IFormType {
    return this._selectedFormType.value;
  }

  set selectedFormType(value: IFormType) {
    this._selectedFormType.next(value);
  }

  getFormTypes(): Observable<IFormType[]> {
    return this.http.get<IFormType[]>(`${API_ENDPOINTS.getFormTypes()}`).pipe(
      map((formTypes: IFormType[]) =>
        formTypes.map(formType => {
          const mappedFormType = {
            ...formType,
            fields: this.mapToFormlyFields(formType.fields),
          };
          console.log('Mapped Form Type:', mappedFormType);
          return mappedFormType;
        })
      ),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }

  getRequests(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(`${API_ENDPOINTS.getRequests()}`).pipe(
      map((response: IRequest[]) => response),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }

  private mapToFormlyFields(fields: any[]): any[] {
    const rows = this.groupFieldsByRow(fields);
    const mappedFields = rows.map(rowFields => ({
      fieldGroupClassName: 'grid',
      fieldGroup: rowFields.map(field => {
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
            options: field.options ? field.options.map((option: { label: any; value: any; }) => ({
              label: option.label,
              value: option.value
            })) : undefined,
            type: field.uiType === 'color' ? 'color' : undefined,
            min: validation.min,
            max: validation.max,
            pattern: validation.pattern,
            step: validation.step,
            mask: validation.mask,
            maxLength: validation.maxLength,
            minLength: validation.minLength,
            valueTemplate: validation.valueTemplate || '{value}%',
            valueColor: validation.valueColor,
            rangeColor: validation.rangeColor,
          },
          validation: validation.messages ? {messages: validation.messages} : undefined,
          expressions: this.mapExpressions(field),
        };
      })
    }));
    console.log('Mapped Fields:', mappedFields);
    return mappedFields;
  }

  private groupFieldsByRow(fields: any[]): any[][] {
    const rows: any = {};
    fields.forEach(field => {
      const rowIndex = field.properties.uiRow;
      if (!rows[rowIndex]) {
        rows[rowIndex] = [];
      }
      rows[rowIndex].push(field);
    });
    return Object.values(rows);
  }

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
      8.3333: 'md:col-1'
    };
    return colClasses[uiColPercentage] || 'md:col-12';
  }

  private mapValidationRules(rules: any[]): {
    required: boolean;
    messages?: any;
    min?: number;
    max?: number;
    pattern?: string;
    step?: number;
    mask?: string;
    valueTemplate?: string;
    valueColor?: string;
    rangeColor?: string;
    maxLength?: number;
    minLength?: number;
  } {
    if (!rules) {
      return {required: false};
    }

    const validation: {
      required: boolean;
      messages?: any;
      min?: number;
      max?: number;
      pattern?: string;
      step?: number;
      mask?: string;
      valueTemplate?: string;
      valueColor?: string;
      rangeColor?: string;
      maxLength?: number;
      minLength?: number;
    } = {required: false, messages: {}};

    rules.forEach(rule => {
      if (rule.type === 'Required') {
        validation.required = true;
        validation.messages['required'] = rule.message || 'This field is required';
      } else if (rule.type === 'Pattern') {
        validation.pattern = rule.pattern;
        validation.messages['pattern'] = rule.message || 'Invalid format';
      } else if (rule.type === 'Min') {
        validation.min = rule.min;
        validation.messages['min'] = rule.message || `Value should be at least ${rule.min}`;
      } else if (rule.type === 'Max') {
        validation.max = rule.max;
        validation.messages['max'] = rule.message || `Value should be at most ${rule.max}`;
      } else if (rule.type === 'maxLength') {
        validation.maxLength = rule.maxLength;
        validation.messages['maxLength'] = rule.message || `Value should be at most ${rule.maxLength} characters`;
      } else if (rule.type === 'minLength') {
        validation.minLength = rule.minLength;
        validation.messages['minLength'] = rule.message || `Value should be at least ${rule.minLength} characters`;
      }
    });

    return validation;
  }

  private mapExpressions(field: any): { [key: string]: string } {
    const expressions: { [key: string]: string } = {};

    if (field.validationRules) {
      field.validationRules.forEach((rule: { expression: string; }) => {
        if (rule.expression) {
          expressions['hide'] = `!model.${rule.expression}`;
          expressions['props.required'] = `model.${rule.expression}`;
        }
      });
    }

    return expressions;
  }

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
}
