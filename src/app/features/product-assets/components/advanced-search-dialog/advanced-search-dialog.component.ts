import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {DialogModule} from "primeng/dialog";
import {of, Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import lodash from 'lodash';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {MenuItem} from "primeng/api"; // Ensure lodash is installed and imported
@Component({
  selector: 'app-advanced-search-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, NgOptimizedImage, CommonModule, BreadcrumbModule],
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
  selectedProduct : any;
  selectedCategory : any;
  selectedSubCategory : any;
  items : MenuItem[] | undefined;
  home : MenuItem | undefined;
  protected readonly of = of;
  private productFamilies = [];
  private productFamiliesSubscription : Subscription = new Subscription();
  private quickFiltersDataSubscription : Subscription = new Subscription();

  // Allow calling with no arguments to clear all selections
  clearSelected() : void;
  // Original method which requires an argument
  clearSelected(selected : any) : void;
  clearSelected(selected? : any) : void {
    console.log('selected=', selected)
    if (selected === undefined) {
      // Clear all selections logic
      this.selectedCategory = null;
      this.selectedSubCategory = null;
      this.selectedProduct = null;
      this.subCategories = [];
      this.products = [];
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
          this.selectedProduct = null;
          this.selectedSubCategory = null;
          this.products = [];
          break;
      }
    }
  }
  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.showDialog = this.productService.showAdvancedSearchDialogValue;
    console.log('this.selectedCategory=', this.selectedCategory);
    console.log('this.selectedSubCategory=', this.selectedSubCategory);
    console.log('this.products=', this.products);
    this.showDialogSubscription = this.productService.showAdvancedSearchDialog$.subscribe({
      next: (value) => {
        this.showDialog = value;
        console.log('this.selectedCategory=', this.selectedCategory);
        console.log('this.selectedSubCategory=', this.selectedSubCategory);
        console.log('this.products=', this.products);
      }
    });
    this.getProductCatalog();
    this.productFamiliesSubscription = this.productService.productFamilies$.subscribe({
      next: (response) => {
        this.productFamilies = response;
      }
    });
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
    console.log('this.selectedCategory=', this.selectedCategory);
  }

  onSelectedSubCategory(subCategory : any) {
    this.selectedSubCategory = subCategory;
    this.products = this.productFamilies.filter((product : any) => {
      return product.productFamily.categoryId === this.selectedSubCategory.id;
    }).map((product : any) => product.productFamily);
    this.products = lodash.uniqBy(this.products, 'id');
    console.log('this.selectedSubCategory=', this.selectedSubCategory);
    console.log('this.products=', this.products);


  }

  onSelectedProduct(product : any) {
    this.selectedProduct = product;
    this.productService.selectedProductValue = {label: product.name, value: product.id, categoryId: product.categoryId}
    console.log('selectedProduct=', product);
    this.closeDialog()
  }

  closeDialog() {
    this.productService.showAdvancedSearchDialogValue = false;
  }



  ngOnDestroy() : void {
    this.getProductCatalogSubscription.unsubscribe();
  }


}
