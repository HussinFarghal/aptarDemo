import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, tap} from "rxjs";
import {API_ENDPOINTS} from "../../api-config";
import {ICategory} from "../../shared/models/category.interface";
import {IProductCatalog} from "../../shared/models/product-catalog.interface";
import {ICustomer} from "../../shared/models/customer.interface";
import {IProductDropDown} from "../../shared/models/product-dropdown.interface";
import {IFinalCustomerDropDown} from "../../shared/models/final-customer-dropdown.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductAssetsService {
  public productOptionsSignal : WritableSignal<IProductDropDown[]> = signal<IProductDropDown[]>([]);
  public finalCustomerOptions : WritableSignal<IFinalCustomerDropDown[]> = signal<IProductDropDown[]>([]);
  public productFamilies : WritableSignal<any[]> = signal<any[]>([]);
  public selectedProduct : WritableSignal<IProductDropDown | null> = signal<IProductDropDown | null>(null);
  public products : WritableSignal<any> = signal<any>(null);
  public showAdvancedSearchDialog : WritableSignal<boolean> = signal<boolean>(false);
  public quickFiltersDataSignal : WritableSignal<any> = signal<any>(null);
  private quickFiltersData : BehaviorSubject<any> = new BehaviorSubject(null);
  public quickFiltersData$ : Observable<any> = this.quickFiltersData.asObservable();
  // private showAdvancedSearchDialog : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // public showAdvancedSearchDialog$ : Observable<boolean> = this.showAdvancedSearchDialog.asObservable();

  constructor(private http : HttpClient) {

  }


  set quickFiltersDataValue(value : any) {

    if (value && value.assetName === null) {
      value.assetName = '';
    }
    if (value && value.finalCustomer === null) {
      value.finalCustomer = {label: '', value: ''};
    }
    this.quickFiltersData.next(value);
    this.quickFiltersDataSignal.set(value);

  }


  getCategory() : Observable<ICategory[]> {
    return this.http.get<ICategory[]>(API_ENDPOINTS.getCategory()).pipe(
      map((response : any) => {
        return response.filter((product : any) => (product.parentCategory === null && product.childCategories !== null && product.icon !== null));
      }),
      catchError(error => {
        error.source = 'getCategory';
        throw error;
      }));

  }

  getProductCatalog() : Observable<IProductCatalog[]> {
    return this.http.get<IProductCatalog[]>(API_ENDPOINTS.getProductCatalog()).pipe(
      tap(response => this.generateProductsOptions(response)),
      catchError(error => {
        console.error('Failed to fetch product catalog', error);
        error.source = 'getProductCatalog';
        throw error;
      })
    );
  }

  generateProductsOptions(response : IProductCatalog[]) {
    const options = response.map((product : any) => (
      {
        label: product.productFamily.name,
        value: product.productFamilyId,
        categoryId: product.productFamily.categoryId
      }));

    const uniqueOptions = Array.from(new Set(options.map(a => a.value)))
      .map(value => options.find(option => option.value === value))
      .filter(option => option !== undefined) as IProductDropDown[];
    this.productOptionsSignal.set(uniqueOptions);
  }

  getFinalCustomers() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_ENDPOINTS.getFinalCustomers()).pipe(
      tap(response => this.generateFinalCustomerOptions(response)),
      catchError(error => {
        error.source = 'getFinalCustomers';
        throw error;
      }));
  }

  generateFinalCustomerOptions(response : ICustomer[]) {
    const options : IFinalCustomerDropDown[] = response.map((customer : any) => (
      {
        label: customer.finalCustomer, value: customer.partnerId,
      }));

    this.finalCustomerOptions.set(options);
  }

  getProductFamily(pageNumber : number, pageSize : number, sortDataColumnName : string, sortDataDirection : string, productFamilyId : string, assetName : string, finalCustomer : string) : Observable<any> {
    return this.http.get(API_ENDPOINTS.getProductFamily(pageNumber, pageSize, sortDataColumnName, sortDataDirection, productFamilyId, assetName, finalCustomer))
      .pipe(
        tap((res) => {
          this.products.set(res)
        }),
        catchError(error => {
          error.source = 'getProductFamily';
          throw error;
          }
        ));
  }
}
