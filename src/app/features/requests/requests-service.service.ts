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
  selectedFormType: BehaviorSubject<IFormType> = new BehaviorSubject<IFormType>(
    {id: "", name: "", formSchema: []}
  );
  selectedFormType$: Observable<IFormType> =
    this.selectedFormType.asObservable();
  apiUrl: string = "https://localhost:44317/requests/";

  constructor(private http: HttpClient) {
  }

  getFormTypes(): Observable<IFormType[]> {
    return this.http.get<IFormType[]>(`${API_ENDPOINTS.getFormTypes()}`).pipe(
      map((response: IFormType[]) => {
        console.log("response =", response);
        return response;
      }),
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
  }

  getRequests(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(`${API_ENDPOINTS.getRequests()}`).pipe(
      map((response: IRequest[]) => {
        console.log("response =", response);
        return response;
      }),
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
  }

  submit(model: any) {
    this.http
      .post<any>(this.apiUrl + this.selectedFormType.value.id, model)
      .subscribe((response) => {
        console.log("response =", response);
        alert("Request Submitted Successfully");
      });
  }
}
