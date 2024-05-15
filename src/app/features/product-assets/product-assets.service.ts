import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, tap} from "rxjs";
import {API_ENDPOINTS} from "../../api-config";
import {ICategory} from "../../shared/models/category.interface";
import {IProductCatalog} from "../../shared/models/product-catalog.interface";
import {ICustomer} from "../../shared/models/customer.interface";
import {IDropdown} from "../../shared/models/dropdown.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductAssetsService {
  productOptionsSignal : WritableSignal<IDropdown[]> = signal<IDropdown[]>([]);
  private productFamilies : BehaviorSubject<any> = new BehaviorSubject(null);
  public readonly productFamilies$ = this.productFamilies.asObservable();
  private products : BehaviorSubject<[] | null> = new BehaviorSubject<[] | null>(null);
  public products$ : Observable<[] | null> = this.products.asObservable();
  private finalCustomerOptions : BehaviorSubject<{ label : any; value : any; }[]> = new BehaviorSubject<{
    label : any; value : any;
  }[]>([]);
  public readonly finalCustomerOptions$ = this.finalCustomerOptions.asObservable();
  private selectedProduct : BehaviorSubject<{ label : any; value : any; categoryId : any; }> = new BehaviorSubject<any>(null);
  public selectedProduct$ : Observable<{ label : any; value : any; categoryId : any; }> = this.selectedProduct.asObservable();
  private quickFiltersData : BehaviorSubject<any> = new BehaviorSubject(null);
  public quickFiltersData$ : Observable<any> = this.quickFiltersData.asObservable();
  private showAdvancedSearchDialog : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showAdvancedSearchDialog$ : Observable<boolean> = this.showAdvancedSearchDialog.asObservable();

  constructor(private http : HttpClient) {
  }

  get productFamiliesValue() {
    return this.productFamilies.value;
  }

  set productFamiliesValue(value : any) {
    this.productFamilies.next(value);
  }

  get showAdvancedSearchDialogValue() : boolean {
    return this.showAdvancedSearchDialog.value;
  }

  set showAdvancedSearchDialogValue(value : boolean) {
    this.showAdvancedSearchDialog.next(value);
  }

  get productsValue() : [] | null {
    return this.products.value;
  }

  set productsValue(value : [] | null) {
    this.products.next(value);
  }

  set selectedProductValue(value : { label : any; value : any; categoryId : any; }) {
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
    this.quickFiltersData.next(value);

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
      tap(response => this.productFamiliesValue = response),
      catchError(error => {
        console.error('Failed to fetch product catalog', error);
        error.source = 'getProductCatalog';
        throw error;
      })
    );
  }

  generateProductsOptions(response : any[]) {
    const options = response.map((product : any) => ({
      label: product.productFamily.name, value: product.productFamilyId, categoryId: product.productFamily.categoryId
    }));

    const uniqueOptions = Array.from(new Set(options.map(a => a.value)))
      .map(value => options.find(option => option.value === value))
      .filter(option => option !== undefined) as IDropdown[];

    this.productOptionsSignal.set(uniqueOptions);
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
