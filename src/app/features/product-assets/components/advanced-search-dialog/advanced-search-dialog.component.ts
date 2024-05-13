import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {DialogModule} from "primeng/dialog";
import {of, Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import lodash from 'lodash'; // Ensure lodash is installed and imported
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
  selectedProduct : any = {};
  selectedCategory : any = {};
  selectedSubCategory : any = {};
  protected readonly of = of;
  private productFamilies = [];
  private productFamiliesSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.showDialog = this.productService.showAdvancedSearchDialogValue;
    this.showDialogSubscription = this.productService.showAdvancedSearchDialog$.subscribe({
      next: (value) => {
        this.showDialog = value;
      }
    });
    this.getProductCatalog();
    console.log('this.categories', this.categories)
    this.productFamiliesSubscription = this.productService.productFamilies$.subscribe({
      next: (response) => {
        this.productFamilies = response;
      }
    });
  };

  getProductCatalog() {
    this.getProductCatalogSubscription = this.productService.getCategory().subscribe({
      next: (response) => {
        for (let category of response) {
          this.categories.push(category);
        }
      },
      error: (error) => {
        console.log('error', error);
      }
    });
  };

  onSelectedCategory(category : any) {
    this.selectedCategory = category.id;
    this.subCategories = category.childCategories;
    console.log('this.subCategories', this.subCategories);
    console.log('this.selectedCategory', this.selectedCategory);
  }

  onSelectedSubCategory(subCategory : any) {
    this.selectedSubCategory = subCategory.id;
    console.log('this.productFamilies=', this.productService.productFamiliesValue);
    console.log('this.selectedSubCategory', this.selectedSubCategory);
    this.products = this.productFamilies.filter((product : any) => {
      return product.productFamily.categoryId === this.selectedSubCategory;
    }).map((product : any) => product.productFamily);
    this.products = lodash.uniqBy(this.products, 'id');
    console.log('this.products', this.products);

  }

  closeDialog() {
    this.productService.showAdvancedSearchDialogValue = false;
  }

  ngOnDestroy() : void {
    this.getProductCatalogSubscription.unsubscribe();
  }

  onSelectedProduct(product : any) {
    console.log('product=', product);
    this.productService.selectedProductValue = {label: product.name, value: product.id, categoryId: product.categoryId}
    this.closeDialog()
  }
}
