import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {IFormType} from "@shared/models/form-type.interface";
import {HttpClient} from "@angular/common/http";
import {API_ENDPOINTS} from "@app/api-config";
import {IRequest} from "@shared/models/request.interface";
import {IFormlyFieldsModel} from "@shared/models/formly-fields-model.interface";

@Injectable({
  providedIn: "root",
})
export class RequestsService {
  apiUrl: string = "https://localhost:44317/requests/";
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
    return this.http.get<IFormType[]>(`${API_ENDPOINTS.getFormTypes()}`).pipe(map((response: IFormType[]) => {
      console.log("response =", response);
      return response;
    }), catchError((error) => {
      console.error(error);
      return of(error);
    }));
  }

  getRequests(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(`${API_ENDPOINTS.getRequests()}`).pipe(map((response: IRequest[]) => {
      console.log("response =", response);
      return response;
    }), catchError((error) => {
      console.error(error);
      return of(error);
    }));
  }

  submit(model: IFormlyFieldsModel) {
    // console.log("model =", model);
    // this.http.post(this.apiUrl + this.selectedFormType.value.id, model)
    //   .subscribe((response) => {
    //     console.log("response =", response);
    //   });
  }
}
