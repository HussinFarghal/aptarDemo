import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {API_ENDPOINTS} from "../../api-config";
import {ICategory} from "../../shared/models/category.interface";
import {IProductFamily} from "../../shared/models/product-family.interface";
import {ICustomer} from "../../shared/models/customer.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductAssetsService {

  constructor(private http : HttpClient) {
  }

  getCategory() : Observable<ICategory> {
    return this.http.get<ICategory>(API_ENDPOINTS.getCategory()).pipe(
      map((response : any) => {
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );

  }

  getProductFamilies() : Observable<IProductFamily> {
    return this.http.get<IProductFamily>(API_ENDPOINTS.getProductFamilies()).pipe(
      map((response : any) => {
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  getFinalCustomers() : Observable<ICustomer> {
    return this.http.get<ICustomer>(API_ENDPOINTS.getFinalCustomers()).pipe(
      map((response : any) => {
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );
  }
}
