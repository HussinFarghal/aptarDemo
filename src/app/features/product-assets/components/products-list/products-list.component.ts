import {Component, effect, OnDestroy, OnInit, signal} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {TableModule} from "primeng/table";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Column} from "@shared/models/table-column.interface";
import {DeepFieldPipe} from "@shared/pipes/deep-field.pipe";
import {ButtonModule} from "primeng/button";
import {IFinalProduct} from "@shared/models/final-products.interface";
import {IQuickFilters} from "@shared/models/quick-filters.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [TableModule, CommonModule, NgOptimizedImage, DeepFieldPipe, ButtonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  isProductSuccess : boolean = false;
  isProductError : boolean = false;
  isProductLoading : boolean = true;
  isProductEmpty : boolean = false;
  products = signal<IFinalProduct[]>([]);
  quickFiltersData = signal<IQuickFilters | null>(null);

  productsColumns : Column[] = [];
  private subscriptions : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
    this.productsColumns = [
      {field: 'displayName', header: 'Asset Name'},
      {field: 'finalCustomer', header: 'Final Customer'},
      {field: 'assetTypeName', header: 'Asset Type'},
      {field: 'lastUpdatedOn', header: 'Last Updated'}
    ]
    effect(() => {
      const quickFiltersData = this.productService.quickFiltersDataSignal();
      if (quickFiltersData !== this.quickFiltersData()) {
        console.log('Quick Filters Data', quickFiltersData)
        this.quickFiltersData.set(quickFiltersData);
        if (quickFiltersData) {
          console.log('Quick Filters Data', quickFiltersData)
          this.fetchFinalProducts();
          return;
        }
        this.products.set([]);
      }
    }, {allowSignalWrites: true});
  }

  ngOnInit() : void {
    if (this.productService.quickFiltersDataSignal()) {
      this.fetchFinalProducts();
    } else {
      this.isProductEmpty = true;
    }
  }


  fetchFinalProducts() : void {
    this.isProductLoading = true;
    this.isProductError = false;
    this.isProductEmpty = false;
    const subscription = this.productService.getFinalProducts().subscribe({
      next: res => {
        console.log('Final Products', res)
        if (res?.list?.length > 0) {
          this.products.set(res.list);
          this.isProductSuccess = true;
          this.isProductEmpty = false;
        } else {
          this.products.set([]);
          this.isProductEmpty = true;
          this.isProductSuccess = false;
        }
        this.isProductLoading = false;
      },
      error: error => {
        console.error('Error fetching finalProducts', error);
        this.isProductLoading = false;
        this.isProductError = true;
        this.isProductEmpty = false;
      }
    });

    this.subscriptions.add(subscription);
  }

  ngOnDestroy() : void {
    this.subscriptions.unsubscribe();
  }

}
