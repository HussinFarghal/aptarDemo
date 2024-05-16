import {Component, effect, OnDestroy, OnInit} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {DialogModule} from "primeng/dialog";
import {Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import lodash from 'lodash';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {IProductCatalog} from "../../../../shared/models/product-catalog.interface"; // Ensure lodash is installed and imported
@Component({
  selector: 'app-advanced-search-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, NgOptimizedImage, CommonModule, BreadcrumbModule],
  templateUrl: './advanced-filter.component.html',
  styleUrl: './advanced-filter.component.scss'
})
export class AdvancedFilterComponent implements OnInit, OnDestroy {
  showDialog : boolean = false;
  getProductCatalogSubscription : Subscription = new Subscription();
  categories : any = [];
  subCategories : any = [];
  products : any = [];
  selectedProduct : any;
  selectedCategory : any;
  selectedSubCategory : any;
  private productFamilies : IProductCatalog[] = [];
  private quickFiltersDataSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
    effect(() => {
      this.showDialog = this.productService.showAdvancedSearchDialog();
      this.productFamilies = this.productService.productFamilies();
    }, {allowSignalWrites: true});
  }

  // Allow calling with no arguments to clear all selections
  clearSelected() : void;

  // Original method which requires an argument
  clearSelected(selected : any) : void;

  clearSelected(selected? : any) : void {
    if (selected === undefined) {
      // Clear all selections logic
      this.selectedCategory = null;
      this.selectedSubCategory = null;
      this.selectedProduct = null;
      this.subCategories = [];
      this.products = [];
      this.productService.productFamilies.set([]);
    } else {
      // Existing logic
      switch (selected) {
        case this.selectedCategory:
          this.selectedCategory = null;
          this.subCategories = [];
          break;
        case this.selectedSubCategory:
          this.selectedSubCategory = null;
          this.products = [];
          break;
        case this.selectedProduct:
          this.productService.selectedProduct.set(null);
          this.selectedSubCategory = null;
          this.products = [];
          break;
      }
    }
  }

  ngOnInit() : void {
    this.getProductCatalog();
    this.products = this.productService.products();
    this.quickFiltersDataSubscription = this.productService.quickFiltersData$.subscribe({
      next: (response) => {
        if (!response) {
          this.clearSelected();
        }

      }
    });
  }

  getProductCatalog() {
    this.getProductCatalogSubscription = this.productService.getCategory().subscribe({
      next: (response) => {
        for (let category of response) {
          this.categories.push(category);
        }
      }, error: (error) => {
        console.log('error', error);
      }
    });
  };

  onSelectedCategory(category : any) {
    this.selectedCategory = category;
    this.subCategories = this.selectedCategory.childCategories;
  }

  onSelectedSubCategory(subCategory : any) {
    this.selectedSubCategory = subCategory;
    this.products = this.productService.productFamilies().filter((product : any) => {
      return product.productFamily.categoryId === this.selectedSubCategory.id;
    }).map((product : any) => product.productFamily);
    this.products = lodash.uniqBy(this.products, 'id');
  }

  onSelectedProduct(product : any) {
    this.selectedProduct = product;
    this.productService.selectedProduct.set({label: product.name, value: product.id, categoryId: product.categoryId})
    this.closeDialog()
  }

  closeDialog() {
    this.productService.showAdvancedSearchDialog.set(false);
  }


  ngOnDestroy() : void {
    this.getProductCatalogSubscription.unsubscribe();
  }


}
