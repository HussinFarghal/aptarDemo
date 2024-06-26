import {Component, effect, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ProductAssetsService} from "../../product-assets.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
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
import {IQuickFilters} from "@shared/models/quick-filters.interface";
import {TourService} from "@shared/services/tour.service";
import {JoyrideModule, JoyrideService} from "ngx-joyride";

@Component({
  selector: 'app-quick-filters',
  standalone: true,
  imports: [PanelModule, ReactiveFormsModule, DropdownModule, ButtonModule, InputTextModule, KeyFilterModule, SkeletonModule, NgOptimizedImage, TooltipModule,JoyrideModule],
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
  public quickFiltersData : IQuickFilters | null = null;
  public showSearchIcons : boolean = false;
  public showSearchIconsSignal = signal(false);
  protected readonly document = document;
  private getQuickFiltersDataSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService, private joyrideService: JoyrideService
  ) {
    const formBuilder = inject(FormBuilder);
    this.quickFilterForm = formBuilder.group({
      product: [null],
      finalCustomer: [null],
      assetName: [null],
    });
    effect(() => {
      this.productOptions = this.productService.productOptionsSignal();
      this.finalCustomerOptions = this.productService.finalCustomerOptions();
      this.selectedProduct = this.productService.selectedProduct();
      this.quickFiltersData = this.productService.quickFiltersDataSignal();
      this.quickFilterForm.get('product')?.setValue(this.selectedProduct);
      this.showSearchIcons = this.showSearchIconsSignal();
    }, {allowSignalWrites: true});
  }

  ngOnInit() {
    this.getQuickFiltersData();
    this.startTour();

  }

  getQuickFiltersData() {
    this.productService.getQuickFilterData().subscribe({
      next: ({products, categories, customers}) => {
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
    this.productService.quickFiltersDataSignal.set(this.quickFilterForm.value);
  }

  makeFormDisabled(formValues : IQuickFilters) : boolean {
    const {assetName, product, finalCustomer} = formValues;
    // Enable button if assetName or product have values
    return !(assetName || product);
  }

  showAdvancedSearchDialog() {
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
    this.productService.quickFiltersDataSignal.set({
      assetName: null,
      product: null,
      finalCustomer: null
    });
    this.productService.selectedProduct.set(null);
    this.productService.finalProducts.set([]);
    this.quickFilterForm.reset();
  }


  disableAdvancedSearch() : boolean {
    return (this.isFinalCustomersFailed || this.isProductsFailed) || this.isProductsLoading && this.isFinalCustomersLoading;
  }

  ngOnDestroy() : void {
    this.getQuickFiltersDataSubscription.unsubscribe();
  }

  startTour() {
    this.joyrideService.startTour({
      steps: ['step1', 'step2', 'step3'],
      customTexts: { prev: 'Previous', next: 'Next', done: 'Done' },
      themeColor: '#559c8a',
      stepDefaultPosition: 'bottom',
    });
  }
  onAssetNameChange(event : KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value.trim().length > 0) {
      console.log('inputElement', inputElement.value)
      this.productService.quickFiltersDataSignal.set({
        assetName: inputElement.value,
        product: null,
        finalCustomer: null

      });
      console.log('quickFiltersData', this.productService.quickFiltersDataSignal())
      this.showSearchIconsSignal.set(true);
    } else {
      this.showSearchIconsSignal.set(false);
    }
  }
}
