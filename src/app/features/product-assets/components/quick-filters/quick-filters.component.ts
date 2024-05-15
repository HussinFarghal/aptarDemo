import {ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ProductAssetsService} from "../../product-assets.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {catchError, combineLatest, EMPTY, Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {SkeletonModule} from "primeng/skeleton";
import {NgOptimizedImage} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {IDropdown} from "../../../../shared/models/dropdown.interface";

enum LoadState {
  Loading,
  Success,
  Error,
  Idle
}

@Component({
  selector: 'app-quick-filters',
  standalone: true,
  imports: [PanelModule, ReactiveFormsModule, DropdownModule, ButtonModule, InputTextModule, KeyFilterModule, SkeletonModule, NgOptimizedImage, TooltipModule],
  templateUrl: './quick-filters.component.html',
  styleUrl: './quick-filters.component.scss'
})
export class QuickFiltersComponent implements OnInit, OnDestroy {
  public quickFilterForm : FormGroup = new FormGroup({});
  public productOptions : IDropdown[] = []
  public finalCustomerOptions : { label : any; value : any; }[] = [];
  public isProductFamiliesSuccess : boolean = false;
  public isProductFamiliesError : boolean = false;
  public isProductFamiliesLoading : boolean = true;
  public isFinalCustomersSuccess : boolean = false;
  public isFinalCustomersError : boolean = false;
  public isFinalCustomersLoading : boolean = true;
  protected readonly document = document;
  private getQuickFiltersDataSubscription : Subscription = new Subscription();
  private finalCustomerOptionsSubscription : Subscription = new Subscription();
  private selectedProductSubscription : Subscription = new Subscription()

  constructor(private productService : ProductAssetsService, private cd : ChangeDetectorRef) {
    const formBuilder = inject(FormBuilder);
    this.quickFilterForm = formBuilder.group({
      product: [null, Validators.required],
      finalCustomer: [null],
      assetName: [null],
    });

  }

  ngOnInit() {

    this.getQuickFiltersData();
    this.finalCustomerOptionsSubscription = this.productService.finalCustomerOptions$.subscribe((options) => {
      this.finalCustomerOptions = options;
    });
    this.selectedProductSubscription = this.productService.selectedProduct$.subscribe((product) => {
      this.quickFilterForm.get('product')?.setValue(product)

    });
  }

  submitFilters() {
    this.productService.quickFiltersDataValue = this.quickFilterForm.value;
  }

  showAdvancedSearchDialog() {
    this.productService.showAdvancedSearchDialogValue = true;
  }

  onProductDropDownChange(event : any) : void {
    this.productService.selectedProductValue = event.value;
    if (event) {
      this.productService.productsValue = [];
    }
  }

  resetFilters() {
    this.quickFilterForm.reset();
    this.productService.quickFiltersDataValue = null
    this.productService.productsValue = [];
  }

  getQuickFiltersData() : void {
    const errorHandler = (source : string) => catchError((error : any) => {
      console.error(`An error occurred fetching ${source}:`, error);
      if (source === 'product families') {
        this.isProductFamiliesError = true;
        this.isProductFamiliesSuccess = false;
        this.isProductFamiliesLoading = false;
      } else if (source === 'final customers') {
        this.isFinalCustomersSuccess = false;
        this.isFinalCustomersError = true;
        this.isFinalCustomersLoading = false;

      }
      return EMPTY;
    });
    const productFamilies$ = this.productService.getProductCatalog().pipe(errorHandler('product families'));
    const finalCustomers$ = this.productService.getFinalCustomers().pipe(errorHandler('final customers'));
    this.isProductFamiliesLoading = true;
    this.isProductFamiliesError = false;
    this.isProductFamiliesSuccess = false;
    this.isFinalCustomersLoading = true;
    this.isFinalCustomersError = false;
    this.isFinalCustomersSuccess = false;
    this.getQuickFiltersDataSubscription.add(combineLatest([productFamilies$, finalCustomers$]).subscribe({
      next: ([productFamiliesData, finalCustomersData]) => {
        this.productOptions = this.productService.productOptionsSignal();
        if (productFamiliesData) {
          this.productService.productFamiliesValue = productFamiliesData;
          this.isProductFamiliesSuccess = true;
          this.isProductFamiliesLoading = false;
          this.isProductFamiliesError = false;
        }
      }, error: (err) => {
        console.error('An error occurred:', err);
        if (err.source === 'getProductCatalog') {
          this.isProductFamiliesError = true;
          this.isProductFamiliesSuccess = false;
          this.isProductFamiliesLoading = false;
        } else if (err.source === 'getFinalCustomers') {
          this.isFinalCustomersSuccess = false;
          this.isFinalCustomersError = true;
          this.isFinalCustomersLoading = false;
        }

      }
    }));
  }

  ngOnDestroy() : void {
    this.finalCustomerOptionsSubscription.unsubscribe();
    this.getQuickFiltersDataSubscription.unsubscribe();
  }

  disableAdvancedSearch() : boolean {
    return (this.isFinalCustomersError || this.isProductFamiliesError) || this.isProductFamiliesLoading && this.isFinalCustomersLoading;
  }

}
