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
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [TableModule, CommonModule, NgOptimizedImage, DeepFieldPipe, ButtonModule, SkeletonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  isProductSuccess : boolean = false;
  isProductError : boolean = false;
  isProductLoading : boolean = false;
  isProductEmpty : boolean = false;
  products = signal<IFinalProduct[]>([]);
  quickFiltersData = signal<IQuickFilters | null>(null);

  productsColumns : Column[] = [];
  private subscriptions : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
    this.productsColumns = [
      {field: 'displayName', header: 'Display Name'},
      {field: 'finalCustomer', header: 'Final Customer'},
      {field: 'assetTypeName', header: 'Asset Type'},
      {field: 'lastUpdatedOn', header: 'Last Updated'}
    ]
    effect(() => {
      const quickFiltersData = this.productService.quickFiltersDataSignal();
      if (quickFiltersData !== this.quickFiltersData()) {
        this.quickFiltersData.set(quickFiltersData);
        if (quickFiltersData) {
          this.fetchFinalProducts();
          return;
        } else {
        this.products.set([]);
          this.isProductEmpty = true;
        }
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
    this.isProductSuccess = false;
    this.products.set([]);
    const subscription = this.productService.getFinalProducts('UltraFlex Nozzle', '44').subscribe({
      next: res => {
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
