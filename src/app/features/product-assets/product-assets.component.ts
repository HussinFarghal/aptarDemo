import {Component, effect, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductAssetsService} from "./product-assets.service";
import {QuickFiltersComponent} from "./components/quick-filters/quick-filters.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {BreadCrumbsComponent} from "@shared/components/bread-crumbs/bread-crumbs.component";
import {AdvancedFilterComponent} from "./components/advanced-search-dialog/advanced-filter.component";

@Component({
  selector: 'app-product-assets',
  standalone: true,
  imports: [CommonModule, BreadCrumbsComponent, QuickFiltersComponent, ProductsListComponent, AdvancedFilterComponent],
  providers: [ProductAssetsService],
  templateUrl: './product-assets.component.html',
  styleUrl: './product-assets.component.scss'
})
export class ProductAssetsComponent implements OnInit, OnDestroy {
  showAdvancedSearchDialog : boolean = false;
  constructor(private productService : ProductAssetsService) {
    effect(() => {
      this.showAdvancedSearchDialog = this.productService.showAdvancedSearchDialog();
    });
  }

  ngOnInit() : void {
  }
  ngOnDestroy() : void {

  }


}
