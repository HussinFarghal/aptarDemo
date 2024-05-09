import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable} from "rxjs";
import {API_ENDPOINTS} from "../../api-config";
import {ICategory} from "../../shared/models/category.interface";
import {IProductFamily} from "../../shared/models/product-family.interface";
import {ICustomer} from "../../shared/models/customer.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductAssetsService {
  private productOptions : BehaviorSubject<{ label : any; value : any; categoryId : any; }[]> = new BehaviorSubject<{
    label : any;
    value : any;
    categoryId : any;
  }[]>([]);
  public productOptions$ = this.productOptions.asObservable();
  private finalCustomerOptions : BehaviorSubject<{ label : any; value : any; }[]> = new BehaviorSubject<{
    label : any;
    value : any;
  }[]>([]);
  public finalCustomerOptions$ = this.finalCustomerOptions.asObservable();

  constructor(private http : HttpClient) {
  }

  getCategory() : Observable<ICategory[]> {
    return this.http.get<ICategory[]>(API_ENDPOINTS.getCategory()).pipe(
      catchError(error => {
        error.source = 'getCategory';
        throw error;
      })
    );

  }

  getProductFamilies() : Observable<IProductFamily[]> {
    return this.http.get<IProductFamily[]>(API_ENDPOINTS.getProductFamilies()).pipe(
      map((response : any) => {
        this.generateProductsOptions(response);
        return response;
      }),
      catchError(error => {
        error.source = 'getProductFamilies';
        throw error;
      })
    );
  }

  generateProductsOptions(response : any[]) {
    const options = response.map((product : any) => ({
      label: product.productFamily.name,
      value: product.productFamilyId,
      categoryId: product.productFamily.categoryId
    }));

    const uniqueOptions = Array.from(new Set(options.map(a => a.value)))
      .map(value => options.find(option => option.value === value))
      .filter(option => option !== undefined) as { label : any; value : any; categoryId : any; }[];

    this.productOptions.next(uniqueOptions);
    console.log('uniqueOptions:', uniqueOptions);
    return uniqueOptions;
  }

  getFinalCustomers() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_ENDPOINTS.getFinalCustomers()).pipe(
      map((response : any) => {
        this.generateProductOptions(response);
        return response;
      }),
      catchError(error => {
        error.source = 'getFinalCustomers';
        throw error;
      })
    );
  }

  generateProductOptions(response : any[]) {
    const options = response.map((customer : any) => ({
      label: customer.finalCustomer,
      value: customer.partnerId,
    }));

    this.finalCustomerOptions.next(options);
    return this.finalCustomerOptions.value;
  }
}
