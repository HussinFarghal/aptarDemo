import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, forkJoin, map, Observable, tap, throwError} from "rxjs";
import {API_ENDPOINTS} from "../../api-config";
import {ICategory} from "@shared/models/category.interface";
import {IProductCatalog} from "@shared/models/product-catalog.interface";
import {ICustomer} from "@shared/models/customer.interface";
import {IProductDropDown} from "@shared/models/product-dropdown.interface";
import {IFinalCustomerDropDown} from "@shared/models/final-customer-dropdown.interface";
import {IFinalProduct, IFinalProducts} from "@shared/models/final-products.interface";
import {IQuickFilters} from "@shared/models/quick-filters.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductAssetsService {
  public productOptionsSignal : WritableSignal<IProductDropDown[]> = signal<IProductDropDown[]>([]);
  public finalCustomerOptions : WritableSignal<IFinalCustomerDropDown[]> = signal<IProductDropDown[]>([]);
  public products : WritableSignal<IProductCatalog[]> = signal<IProductCatalog[]>([]);
  public categories : WritableSignal<ICategory[]> = signal<ICategory[]>([]);
  public selectedProduct : WritableSignal<IProductDropDown | null> = signal<IProductDropDown | null>(null);
  public finalProducts : WritableSignal<IFinalProduct[]> = signal<IFinalProduct[]>([]);
  public showAdvancedSearchDialog : WritableSignal<boolean> = signal<boolean>(false);
  public quickFiltersDataSignal : WritableSignal<IQuickFilters | null> = signal<IQuickFilters | null>(null);

  constructor(private http : HttpClient) {

  }


  getCategories() : Observable<ICategory[]> {
    return this.http.get<ICategory[]>(API_ENDPOINTS.getCategories()).pipe(
      map((response : ICategory[]) => {
        const filteredCategories = response.filter((product : any) => (product.parentCategory === null && product.childCategories !== null && product.icon !== null));
        this.categories.set(filteredCategories);
        return filteredCategories;
      }),
      catchError(error => {
        error.source = 'getCategories';
        throw error;
      }));

  }

  getProducts() : Observable<IProductCatalog[]> {
    return this.http.get<IProductCatalog[]>(API_ENDPOINTS.getProducts()).pipe(
      tap(response => this.generateProductsOptions(response)),
      catchError(error => {
        error.source = 'getProducts';
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
    return uniqueOptions;
  }

  getFinalCustomers() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_ENDPOINTS.getFinalCustomers()).pipe(
      tap(response => this.generateFinalCustomerOptions(response)),
      map(response => response),
      catchError(error => {
        error.source = 'getFinalCustomers';
        throw error;
      }));
  }

  getQuickFilterData() : Observable<{ products : IProductCatalog[], categories : ICategory[], customers : ICustomer[] }> {
    return forkJoin({
      products: this.getProducts(),
      categories: this.getCategories(),
      customers: this.getFinalCustomers()
    }).pipe(
      catchError(error => throwError(() => error))
    );
  }

  generateFinalCustomerOptions(response : ICustomer[]) {
    const options : IFinalCustomerDropDown[] = response.map((customer : ICustomer) => (
      {
        label: customer.finalCustomer,
        value: customer.partnerId,
      }));

    this.finalCustomerOptions.set(options);
  }

  getFinalProducts() : Observable<IFinalProducts> {
    return this.http.get<IFinalProducts>(API_ENDPOINTS.getFinalProducts()).pipe(
      tap(response => this.finalProducts.set(response.list)),
      catchError(error => {
        error.source = 'getFinalProducts';
        throw error;
      })
    );
  }

}
