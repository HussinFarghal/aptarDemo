import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription, switchMap} from "rxjs";
import {ProductAssetsService} from "../../product-assets.service";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  private productsSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.getProducts();
  }

  getProducts() {

    this.productsSubscription = this.productService.quickFiltersData$
      .pipe(// Use switchMap to switch to a new observable when quickFiltersData changes
        switchMap(quickFiltersData => {
          if (quickFiltersData) {
            // Return the getProducts observable
            return this.productService.getProductFamily(1, 10, 'lastUpdatedOn', 'desc', quickFiltersData.product.value, quickFiltersData.assetName, quickFiltersData.finalCustomer.value);
          }
          // Return an empty or default observable if there is no data
          else {
            return of(null); // Ensure to import `of` from 'rxjs'
          }

        }))
      .subscribe({
        next: (products) => {
          if (products) {
            this.productService.productsValue = products;
            console.log('Products fetched successfully', products);

          }


        }, error: (error) => {
          console.error('Error fetching products', error);
        }
      });
  }

  ngOnDestroy() : void {
    this.productsSubscription.unsubscribe();
  }

}
