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
    return fields.reduce((acc, field, index) => {
      const fieldGroupIndex = Math.floor(index / 2);
      if (!acc[fieldGroupIndex]) {
        acc[fieldGroupIndex] = {
          fieldGroupClassName: 'grid',
          fieldGroup: [],
        };
      }

      const validation = this.mapValidationRules(field.validationRules);
      const formlyField = {
        className: this.getFieldClassName(field.uiType),
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
          step: field.uiType === 'knob' ? validation.step || 1 : validation.step,
          mask: field.uiType === 'partNumberMask' ? 'p-99999' : validation.mask,
          valueTemplate: field.uiType === 'knob' ? validation.valueTemplate || '{value}%' : validation.valueTemplate,
          valueColor: validation.valueColor,
          rangeColor: validation.rangeColor,
        },
        validation: validation.messages ? {messages: validation.messages} : undefined,
        expressions: this.mapExpressions(field.key),
      };

      acc[fieldGroupIndex].fieldGroup.push(formlyField);
      return acc;
    }, []);
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
      } else if (rule.type === 'Step') {
        validation.step = rule.step;
      } else if (rule.type === 'Mask') {
        validation.mask = rule.mask;
      } else if (rule.type === 'ValueTemplate') {
        validation.valueTemplate = rule.valueTemplate;
      } else if (rule.type === 'ValueColor') {
        validation.valueColor = rule.valueColor;
      } else if (rule.type === 'RangeColor') {
        validation.rangeColor = rule.rangeColor;
      }
    });

    return validation;
  }

  private mapExpressions(key: string): { [key: string]: string } {
    const expressions: { [key: string]: string } = {};

    if (key === 'shippingAddress' || key === 'shippingDate') {
      expressions['hide'] = '!model.sampleSubmission';
      expressions['props.required'] = 'model.sampleSubmission';
    }

    return expressions;
  }

  private getFieldClassName(uiType: string): string {
    switch (uiType) {
      case 'radio':
      case 'color':
        return 'md:col-6';
      case 'input':
      case 'textarea':
      case 'slider':
      case 'knob':
      case 'checkbox':
        return 'md:col';
      case 'date':
        return 'md:col-12';
      default:
        return 'md:col-12';
    }
  }

  private mapUiTypeToFieldType(uiType: string): string {
    switch (uiType) {
      case 'radio':
      case 'checkbox':
        return uiType;
      case 'color':
      case 'input':
      case 'textarea':
        return 'input';
      case 'partNumberMask':
        return uiType;
      case 'date':
        return 'calendar';
      case 'knob':
        return uiType;
      case 'slider':
        return uiType;
      default:
        return 'input';
    }
  }
}
