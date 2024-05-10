import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription, switchMap} from "rxjs";
import {IProductFamily} from "../../../../shared/models/product-family.interface";
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
  private selectedProduct : any;
  private productFamilyId : string = '';

  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.productsSubscription = this.productService.quickFiltersData$
      .pipe(
        // Use switchMap to switch to a new observable when quickFiltersData changes
        switchMap(data => {
          if (data) {
            this.selectedProduct = data;
            this.productFamilyId = this.selectedProduct.product.value;
            // Return the getProducts observable
            return this.productService.getProductFamily(1, 10, 'lastUpdatedOn', 'desc', this.productFamilyId);
          }
          // Return an empty or default observable if there is no data
          else {
            this.productService.productsValue = null;
            return of(null); // Ensure to import `of` from 'rxjs'
          }
        })
      )
      .subscribe(
        products => {
          if (products) {
            this.productService.productsValue = products;
            // Handle your products data here
          }
        });


    this.productService.products$.subscribe({
      next: (products : IProductFamily[] | null) => {
        // Handle your products data here
        console.log('products =', products)
      }
    })
  }

  ngOnDestroy() : void {
    this.productsSubscription.unsubscribe();
  }

}
