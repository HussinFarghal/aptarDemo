import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {IFormType} from "@shared/models/form-type.interface";
import {HttpClient} from "@angular/common/http";
import {API_ENDPOINTS} from "@app/api-config";

// export function ipValidator(control: AbstractControl): null | { ip: boolean } {
//   return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : {ip: true};
// }

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  selectedFormType: BehaviorSubject<IFormType> = new BehaviorSubject<IFormType>({id: '', name: '', formlySchema: []});
  selectedFormType$: Observable<IFormType> = this.selectedFormType.asObservable();

  constructor(private http: HttpClient) {
  }

  getFormTypes(): Observable<IFormType[]> {
    return this.http.get<IFormType[]>(`${API_ENDPOINTS.getFormTypes()}`).pipe(
      map((response: IFormType[]) => {
        console.log('response =', response);
        return response;
      }),
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
  }

}
