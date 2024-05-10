import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription, switchMap} from "rxjs";
import {ProductAssetsService} from "../../product-assets.service";

@Component({
  selector: 'app-products-list', standalone: true, imports: [], templateUrl: './products-list.component.html', styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  private productsSubscription : Subscription = new Subscription();
  private selectedProduct : any;

  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.getProducts();
  }

  getProducts() {
    this.productsSubscription = this.productService.quickFiltersData$
      .pipe(// Use switchMap to switch to a new observable when quickFiltersData changes
        switchMap(data => {
          if (data) {
            this.selectedProduct = data;
            // Return the getProducts observable
            return this.productService.getProductFamily(1, 10, 'lastUpdatedOn', 'desc',
              this.selectedProduct.product.value, this.selectedProduct.assetName, this.selectedProduct.finalCustomer.label);
          }
          // Return an empty or default observable if there is no data
          else {
            this.productService.productsValue = [];
            return of(null); // Ensure to import `of` from 'rxjs'
          }

        }))
      .subscribe({
        next: (products) => {
          if (products) {
            this.productService.productsValue = products;
            console.log('Products fetched successfully', this.productService.productsValue);
          }


        }, error: (error) => {
          console.error('Error fetching products', error);
        }
      });
  };

  ngOnDestroy() : void {
    this.productsSubscription.unsubscribe();
  }

}
