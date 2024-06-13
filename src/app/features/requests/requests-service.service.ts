import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {IFormType} from "@shared/models/form-type.interface";
import {HttpClient} from "@angular/common/http";
import {API_ENDPOINTS} from "@app/api-config";
import {IRequest} from "@shared/models/request.interface";

@Injectable({
  providedIn: "root",
})
export class RequestsService {
  // apiUrl: string = "https://localhost:44317/requests/";
  private _selectedFormType: BehaviorSubject<IFormType> = new BehaviorSubject<IFormType>({fields: [], id: 0, name: ""});
  selectedFormType$: Observable<IFormType> = this._selectedFormType.asObservable();

  constructor(private http: HttpClient) {
  }

  get selectedFormType() {
    return this._selectedFormType.value as IFormType;
  }

  set selectedFormType(value: IFormType) {
    this._selectedFormType.next(value as IFormType);
  }

  getFormTypes(): Observable<IFormType[]> {
    return this.http.get<IFormType[]>(`${API_ENDPOINTS.getFormTypes()}`).pipe(
      map((formTypes: IFormType[]) => formTypes.map(formType => ({
          ...formType,
          fields: this.mapToFormlyFields(formType.fields)
        }
      ))),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  private mapToFormlyFields(fields: any[]): any[] {
    return fields.map(field => {
      const validation = this.mapValidationRules(field.validationRules);
      return {
        className: this.getFieldClassName(field.uiType),
        key: field.key,
        type: this.mapUiTypeToFieldType(field.uiType),
        wrappers: ['formly-field'],
        props: {
          label: field.properties.label,
          placeholder: field.properties.placeholder || '',
          required: validation.required,
          options: field.options ? field.options.map((option: { label: any; value: any; }) => ({
            label: option.label,
            value: option.value
          })) : undefined,
          type: field.uiType === 'color' ? 'color' : undefined
        },
        validation: validation.messages ? {messages: validation.messages} : undefined
      };
    });
  }

  private mapValidationRules(rules: any[]): { required: boolean, messages?: any } {
    if (!rules) {
      return {required: false};
    }

    const validation: { required: boolean, messages?: any } = {required: false, messages: {}};

    rules.forEach(rule => {
      if (rule.type === 'Required') {
        validation.required = true;
        validation.messages['required'] = rule.message || 'This field is required';
      } else if (rule.type === 'Pattern') {
        validation.messages['pattern'] = rule.message || 'Invalid format';
      }
    });

    return validation;
  }

  private getFieldClassName(uiType: string): string {
    switch (uiType) {
      case 'radio':
        return 'md:col-4';
      case 'color':
        return 'md:col-8';
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
      case 'date':
        return 'input';
      case 'slider':
        return 'slider';
      default:
        return 'input';
    }
  }

  getRequests(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(`${API_ENDPOINTS.getRequests()}`).pipe(map((response: IRequest[]) => {
      return response;
    }), catchError((error) => {
      console.error(error);
      return of(error);
    }));
  }

  // submit(model: IFormlyFieldsModel) {
  //   // console.log("model =", model);
  //   // this.http.post(this.apiUrl + this.selectedFormType.value.id, model)
  //   //   .subscribe((response) => {
  //   //     console.log("response =", response);
  //   //   });
  // }
}
