import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable} from "rxjs";
import {API_ENDPOINTS} from "../../api-config";
import {ICategory} from "../../shared/models/category.interface";
import {IProductCatalog} from "../../shared/models/product-catalog.interface";
import {ICustomer} from "../../shared/models/customer.interface";
import {IProductFamily} from "../../shared/models/product-family.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductAssetsService {
  private productOptions : BehaviorSubject<{ label : any; value : any; categoryId : any; }[]> = new BehaviorSubject<{
    label : any; value : any; categoryId : any;
  }[]>([]);
  public readonly productOptions$ = this.productOptions.asObservable();
  private products : BehaviorSubject<IProductFamily[] | null> = new BehaviorSubject<IProductFamily[] | null>(null);
  public products$ : Observable<IProductFamily[] | null> = this.products.asObservable();
  private finalCustomerOptions : BehaviorSubject<{ label : any; value : any; }[]> = new BehaviorSubject<{
    label : any; value : any;
  }[]>([]);
  public readonly finalCustomerOptions$ = this.finalCustomerOptions.asObservable();
  private selectedProduct : BehaviorSubject<{ label : any; value : any; }> = new BehaviorSubject<any>(null);
  private quickFiltersData : BehaviorSubject<any> = new BehaviorSubject(null);
  public quickFiltersData$ : Observable<any> = this.quickFiltersData.asObservable();

  constructor(private http : HttpClient) {
  }

  get productsValue() : IProductFamily[] | null {
    return this.products.value;
  }

  set productsValue(value : IProductFamily[] | null) {
    this.products.next(value);
  }

  set selectedProductValue(value : { label : any; value : any; }) {
    this.selectedProduct.next(value);
  }

  get quickFiltersDataValue() {
    return this.quickFiltersData.value;

  }

  set quickFiltersDataValue(value : any) {

    if (value && value.assetName === null) {
      value.assetName = '';
    }
    if (value && value.finalCustomer === null) {
      value.finalCustomer = {label: '', value: ''};
    }
    console.log('set quickFiltersDataValue =', value);
    this.quickFiltersData.next(value);

  }


  getCategory() : Observable<ICategory[]> {
    return this.http.get<ICategory[]>(API_ENDPOINTS.getCategory()).pipe(catchError(error => {
      error.source = 'getCategory';
      throw error;
    }));

  }

  getProductCatalog() : Observable<IProductCatalog[]> {
    return this.http.get<IProductCatalog[]>(API_ENDPOINTS.getProductCatalog()).pipe(map((response : any) => {
      this.generateProductsOptions(response);
      return response;
    }), catchError(error => {
      error.source = 'getProductCatalog';
      throw error;
    }));
  }

  generateProductsOptions(response : any[]) {
    const options = response.map((product : any) => ({
      label: product.productFamily.name, value: product.productFamilyId, categoryId: product.productFamily.categoryId
    }));

    const uniqueOptions = Array.from(new Set(options.map(a => a.value)))
      .map(value => options.find(option => option.value === value))
      .filter(option => option !== undefined) as { label : any; value : any; categoryId : any; }[];

    this.productOptions.next(uniqueOptions);
    return uniqueOptions;
  }

  getFinalCustomers() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_ENDPOINTS.getFinalCustomers()).pipe(map((response : any) => {
      this.generateProductOptions(response);
      return response;
    }), catchError(error => {
      error.source = 'getFinalCustomers';
      throw error;
    }));
  }

  generateProductOptions(response : any[]) {
    const options = response.map((customer : any) => ({
      label: customer.finalCustomer, value: customer.partnerId,
    }));

    this.finalCustomerOptions.next(options);
    return this.finalCustomerOptions.value;
  }

  getProductFamily(pageNumber : number, pageSize : number, sortDataColumnName : string, sortDataDirection : string, productFamilyId : string, assetName : string, finalCustomer : string) : Observable<any> {
    return this.http.get(API_ENDPOINTS.getProductFamily(pageNumber, pageSize, sortDataColumnName, sortDataDirection, productFamilyId, assetName, finalCustomer))
      .pipe(
        catchError(error => {
        error.source = 'getProductFamily';
        throw error;
          }
        ));
  }
}
