import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";
import {API_ENDPOINTS} from "../../api-config";

@Injectable({
  providedIn: 'root'
})
export class ProductAssetsService {
  private getCategoryURL = API_ENDPOINTS.getCategory();

  constructor(private http : HttpClient) {
  }

  getCategory() {
    return this.http.get(this.getCategoryURL).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
}
