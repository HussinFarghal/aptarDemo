import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription, switchMap} from "rxjs";
import {ProductAssetsService} from "../../product-assets.service";
import {TableModule} from "primeng/table";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Column} from "../../../../shared/models/table-column.interface";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    TableModule, CommonModule, NgOptimizedImage
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  isProductSuccess : boolean = false;
  isProductError : boolean = false;
  isProductLoading : boolean = false;
  isProductEmpty : boolean = false;
  products : [] = [];
  productsColumns : Column[] = [];
  private getProductFamilySubscription : Subscription = new Subscription();
  private productsSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
    this.productsColumns = [
      {field: 'assetName', header: 'Asset Name'},
      {field: 'finalCustomer', header: 'Final Customer'},
      {field: 'productFamily', header: 'Product Family'},
      {field: 'assetType', header: 'Asset Type'},
      {field: 'lastUpdated', header: 'Last Updated'}
    ]
  }

  ngOnInit() : void {
    this.getProductFamily();
    this.getProducts();
  }

  getProductFamily() {
    this.isProductLoading = true;
    this.getProductFamilySubscription = this.productService.quickFiltersData$
      .pipe(// Use switchMap to switch to a new observable when quickFiltersData changes
        switchMap(quickFiltersData => {
          if (quickFiltersData) {
            // Return the getProductFamily observable
            return this.productService.getProductFamily(1, 10, 'lastUpdatedOn', 'desc', quickFiltersData.product.value, quickFiltersData.assetName, quickFiltersData.finalCustomer.value);
          }
          // Return an empty or default observable if there is no data
          else {
            return of(null); // Ensure to import `of` from 'rxjs'
          }

        }))
      .subscribe({
        next: (res) => {
          console.log('product families', res)
          if (res) {
            this.productService.productsValue = res.list;
            this.isProductSuccess = true;
            this.isProductLoading = false;
            this.isProductEmpty = false;
          } else {
            this.isProductSuccess = false;
            this.isProductLoading = false;
            this.isProductEmpty = true;
          }


        }, error: (error) => {
          console.error('Error fetching products', error);
          this.isProductError = true;
          this.isProductLoading = false;
          this.isProductEmpty = false;
        }
      });
  }

  getProducts() {
    this.productsSubscription = this.productService.products$.subscribe({
      next: (res) => {
        console.log('products', res)
        if (res) {

          this.isProductSuccess = true;
          this.isProductLoading = false;
          this.isProductEmpty = false;
        } else {
          this.isProductSuccess = false;
          this.isProductLoading = false;
          this.isProductEmpty = true;
        }
      }, error: (error) => {
        this.isProductError = true;
        this.isProductLoading = false;
        this.isProductEmpty = false;
      }
    });
  }

  ngOnDestroy() : void {
    this.getProductFamilySubscription.unsubscribe();
    this.productsSubscription.unsubscribe();
  }

}
