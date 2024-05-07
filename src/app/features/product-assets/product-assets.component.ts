import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductAssetsService} from "./product-assets.service";
import {QuickFiltersComponent} from "./components/quick-filters/quick-filters.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {BreadCrumbsComponent} from "../../shared/components/bread-crumbs/bread-crumbs.component";
import {catchError, combineLatest, of, Subscription} from "rxjs";

@Component({
  selector: 'app-product-assets',
  standalone: true,
  imports: [CommonModule, BreadCrumbsComponent, QuickFiltersComponent, ProductsListComponent],
  providers: [ProductAssetsService],
  templateUrl: './product-assets.component.html',
  styleUrl: './product-assets.component.scss'
})
export class ProductAssetsComponent implements OnInit, OnDestroy {
  private subscriptions : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.loadProductAssets();

  };

  ngOnDestroy() : void {
    this.subscriptions.unsubscribe();
  }

  private loadProductAssets() : void {
    const category$ = this.productService.getCategory().pipe(
      catchError(error => of({error, source: 'Category'}))
    );
    const productFamilies$ = this.productService.getProductFamilies().pipe(
      catchError(error => of({error, source: 'ProductFamilies'}))
    );
    const finalCustomers$ = this.productService.getFinalCustomers().pipe(
      catchError(error => of({error, source: 'FinalCustomers'}))
    );

    this.subscriptions.add(
      combineLatest([category$, productFamilies$, finalCustomers$]).subscribe({
        next: ([categoryData, productFamiliesData, finalCustomersData]) => {
          console.log('categoryData =', categoryData);
          console.log('productFamiliesData =', productFamiliesData);
          console.log('finalCustomersData =', finalCustomersData);
        },
        error: (err) => {
          console.error('An error occurred:', err);
        }
      })
    );
  }

}
