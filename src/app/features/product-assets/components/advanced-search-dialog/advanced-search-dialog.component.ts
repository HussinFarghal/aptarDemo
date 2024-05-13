import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {DialogModule} from "primeng/dialog";
import {of, Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-advanced-search-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './advanced-search-dialog.component.html',
  styleUrl: './advanced-search-dialog.component.scss'
})
export class AdvancedSearchDialogComponent implements OnInit, OnDestroy {
  showDialog : boolean = false;
  showDialogSubscription : Subscription = new Subscription();
  getProductCatalogSubscription : Subscription = new Subscription();
  categories : any = [];
  subCategories : any = [];
  products : any = [];
  selectedCategory : any = {};
  selectedSubCategory : any = {};
  selectedProduct : any = {};
  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.showDialog = this.productService.showAdvancedSearchDialogValue;
    this.showDialogSubscription = this.productService.showAdvancedSearchDialog$.subscribe({
      next: (value) => {
        this.showDialog = true;
      }
    });
    this.getProductCatalog();
    console.log(this.categories)
  };

  getProductCatalog() {
    this.getProductCatalogSubscription = this.productService.getCategory().subscribe({
      next: (response) => {
        for (let category of response) {
          this.categories.push(category);
        }
      }
    });
  };
  closeDialog() {
    this.productService.showAdvancedSearchDialogValue = false;
  }

  ngOnDestroy() : void {
    this.getProductCatalogSubscription.unsubscribe();
  }

  protected readonly of = of;
}
