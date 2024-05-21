import {ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ProductAssetsService} from "../../product-assets.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DropdownChangeEvent, DropdownModule} from "primeng/dropdown";
import {catchError, combineLatest, EMPTY, Observable, Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {SkeletonModule} from "primeng/skeleton";
import {NgOptimizedImage} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {IProductDropDown} from "../../../../shared/models/product-dropdown.interface";
import {IProductCatalog} from "../../../../shared/models/product-catalog.interface";
import {IFinalCustomerDropDown} from "../../../../shared/models/final-customer-dropdown.interface";
import {ICustomer} from "../../../../shared/models/customer.interface";

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
  public isProductFamiliesSuccess : boolean = false;
  public isProductFamiliesError : boolean = false;
  public isProductFamiliesLoading : boolean = true;
  public isFinalCustomersSuccess : boolean = false;
  public isFinalCustomersError : boolean = false;
  public isFinalCustomersLoading : boolean = true;
  public selectedProduct : IProductDropDown | null = null;
  protected readonly document = document;
  private productFamilies = this.productService.productFamilies;
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
      this.productService.products.set([]);
    }
  }

  onProductDropDownClear(event : Event) {
    console.log(event);
    if (event) {
      this.productService.products.set([]);
    }
  }

  resetFilters() {
    this.quickFilterForm.reset();
    this.productService.quickFiltersDataValue = null
    this.productService.products.set([]);
  }

  getQuickFiltersData() : void {
    this.isProductFamiliesLoading = true;
    this.isProductFamiliesError = false;
    this.isProductFamiliesSuccess = false;
    this.isFinalCustomersLoading = true;
    this.isFinalCustomersError = false;
    this.isFinalCustomersSuccess = false;
    this.getQuickFiltersDataSubscription.add(combineLatest([this.getProductFamilies$(), this.getFinalCustomers$()]).subscribe({
      next: ([productFamiliesData, finalCustomersData]) => {

        if ([productFamiliesData]) {
          this.productFamilies.set(productFamiliesData);
          this.isProductFamiliesSuccess = true;
          this.isProductFamiliesLoading = false;
          this.isProductFamiliesError = false;
        }
        if ([finalCustomersData]) {
          this.isFinalCustomersSuccess = true;
          this.isFinalCustomersLoading = false;
          this.isFinalCustomersError = false;
        }
      }, error: (err) => {
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

  getProductFamilies$() : Observable<IProductCatalog[]> {
    return this.productService.getProductCatalog().pipe(this.errorHandler('product families')) as Observable<IProductCatalog[]>;
  }

  getFinalCustomers$() : Observable<ICustomer[]> {
    return this.productService.getFinalCustomers().pipe(this.errorHandler('final customers')) as Observable<ICustomer[]>;

  }

  errorHandler = (source : string) => catchError((error : any) => {
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

  disableAdvancedSearch() : boolean {
    return (this.isFinalCustomersError || this.isProductFamiliesError) || this.isProductFamiliesLoading && this.isFinalCustomersLoading;
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
