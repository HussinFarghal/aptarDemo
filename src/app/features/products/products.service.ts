import {computed, inject, Injectable, Injector, runInInjectionContext, signal, WritableSignal} from '@angular/core';
import {IProduct} from "./models/product.interface";
import {API_ENDPOINTS} from "@app/api-config";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsSignal: WritableSignal<IProduct[]> = signal<IProduct[]>([]);
  private filterSignal: WritableSignal<{}> = signal<{}>({});
  private isProductsLoadingSignal: WritableSignal<boolean> = signal<boolean>(false);
  private isProductsFailedSignal: WritableSignal<boolean> = signal<boolean>(false);
  private http = inject(HttpClient);
  private injector = inject(Injector);

  constructor() {}

  get isProductsLoading$() {
    return this.isProductsLoadingSignal.asReadonly();
  }

  get isProductsFailed$() {
    return this.isProductsFailedSignal.asReadonly();
  }

  get products$() {
    return computed(() => this.productsSignal());
  }

  get isProductsSuccess$() {
    return computed(() => this.productsSignal().length > 0);
  }

  get isProductsEmpty$() {
    return computed(() => this.productsSignal().length === 0);
  }

  private handleError(error: Error): Observable<never> {
    this.isProductsFailedSignal.set(true);
    this.isProductsLoadingSignal.set(false);
    console.error(error);
    return throwError(() => error);
  }

  getProducts(): void {
    this.isProductsLoadingSignal.set(true);
    const productsObservable = this.http.get<IProduct[]>(`${API_ENDPOINTS.getProducts()}`).pipe(
      catchError((error) => this.handleError(error)),
      map((products) => {
        this.isProductsLoadingSignal.set(false);
        this.productsSignal.set(products);
        return products;
      })
    );

    runInInjectionContext(this.injector, () => {
      toSignal(productsObservable);
    });
  }

  addProduct(product: IProduct) {
    this.isProductsLoadingSignal.set(true);
    toSignal(
      this.http.post<IProduct>(`${API_ENDPOINTS.addProducts()}`, product).pipe(
        catchError((error) => {
          this.handleError(error);
          throw error;
        }),
        map((newProduct) => {
          this.isProductsLoadingSignal.set(false);
          this.productsSignal.set([...this.productsSignal(), newProduct]);
          return newProduct;
        })
      ),

    );
  }

  deleteProduct(id: string) {
    this.isProductsLoadingSignal.set(true);
    toSignal(
      this.http.delete<void>(`${API_ENDPOINTS.deleteProducts(id)}`).pipe(
        catchError((error) => {
          this.handleError(error);
          throw error;
        }),
        map(() => {
          this.isProductsLoadingSignal.set(false);
          this.productsSignal.set(this.productsSignal().filter(product => product.id !== id));
        })
      ),

    );
  }
}
