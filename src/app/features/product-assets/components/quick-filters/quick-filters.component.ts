import {ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ProductAssetsService} from "../../product-assets.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DropdownChangeEvent, DropdownModule} from "primeng/dropdown";
import {Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {SkeletonModule} from "primeng/skeleton";
import {NgOptimizedImage} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {IProductDropDown} from "@shared/models/product-dropdown.interface";
import {IFinalCustomerDropDown} from "@shared/models/final-customer-dropdown.interface";

@Component({
  selector: 'app-quick-filters',
  standalone: true,
  imports: [PanelModule, ReactiveFormsModule, DropdownModule, ButtonModule, InputTextModule, KeyFilterModule, SkeletonModule, NgOptimizedImage, TooltipModule],
  templateUrl: './quick-filters.component.html',
  styleUrl: './quick-filters.component.scss'
})
export class QuickFiltersComponent implements OnInit, OnDestroy {
  public quickFilterForm : FormGroup = new FormGroup({});
  public productOptions : IProductDropDown[] = []
  public finalCustomerOptions : IFinalCustomerDropDown[] = []
  public isProductsSuccess : boolean = false;
  public isProductsFailed : boolean = false;
  public isProductsLoading : boolean = true;
  public isCategoriesSuccess : boolean = false;
  public isCategoriesFailed : boolean = false;
  public isCategoriesLoading : boolean = true;
  public isFinalCustomersSuccess : boolean = false;
  public isFinalCustomersFailed : boolean = false;
  public isFinalCustomersLoading : boolean = true;
  public selectedProduct : IProductDropDown | null = null;
  protected readonly document = document;
  private getQuickFiltersDataSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService, private cd : ChangeDetectorRef) {
    const formBuilder = inject(FormBuilder);
    this.quickFilterForm = formBuilder.group({
      product: [null, Validators.required],
      finalCustomer: [null],
      assetName: [null],
    });
    effect(() => {
      this.productOptions = this.productService.productOptionsSignal();
      this.finalCustomerOptions = this.productService.finalCustomerOptions();
      this.selectedProduct = this.productService.selectedProduct();
      this.quickFilterForm.get('product')?.setValue(this.selectedProduct);

    }, {allowSignalWrites: true});
  }

  ngOnInit() {
    this.getQuickFiltersData();
  }

  getQuickFiltersData() {
    this.productService.getQuickFilterData().subscribe({
      next: ({products, categories, customers}) => {
        console.log('products, categories, customers', products, categories, customers)
        if (products) {
          this.isProductsSuccess = true;
          this.isProductsLoading = false;
          this.isProductsFailed = false;
        }
        if (categories) {
          this.isCategoriesSuccess = true;
          this.isCategoriesLoading = false;
          this.isCategoriesFailed = false;
        }
        if (customers) {
          this.isFinalCustomersSuccess = true;
          this.isFinalCustomersLoading = false;
          this.isFinalCustomersFailed = false;
        }
      },
      error: (error) => {
        console.error('Error getting quick filter data', error);
        if (error.source === 'getProducts') {
          this.isProductsFailed = true;
          this.isProductsLoading = false;
        }
        if (error.source === 'getCategories') {
          this.isCategoriesFailed = true;
          this.isCategoriesLoading = false;
        }
        if (error.source === 'getFinalCustomers') {
          this.isFinalCustomersFailed = true;
          this.isFinalCustomersLoading = false;
        }
      }
    })
  };

  submitFilters() {
    this.productService.quickFiltersDataValue = this.quickFilterForm.value;
  }

  showAdvancedSearchDialog() {
    console.log(' this.productService.showAdvancedSearchDialog=', this.productService.showAdvancedSearchDialog())
    this.productService.showAdvancedSearchDialog.set(true);
  }

  onProductDropDownChange(event : DropdownChangeEvent) : void {
    this.productService.selectedProduct.set(event.value);
    if (event) {
      this.productService.finalProducts.set([]);
    }
  }

  onProductDropDownClear(event : Event) {
    console.log(event);
    if (event) {
      this.productService.finalProducts.set([]);
    }
  }

  resetFilters() {
    this.quickFilterForm.reset();
    this.productService.quickFiltersDataValue = null
    this.productService.finalProducts.set([]);
  }


  disableAdvancedSearch() : boolean {
    return (this.isFinalCustomersFailed || this.isProductsFailed) || this.isProductsLoading && this.isFinalCustomersLoading;
  }

  ngOnDestroy() : void {
    this.getQuickFiltersDataSubscription.unsubscribe();
  }


  onAssetNameChange(event : Event) {
    if (event) {
      this.productService.showAdvancedSearchDialog.set(true);
    } else {
      this.productService.showAdvancedSearchDialog.set(false);
    }
  }
}
