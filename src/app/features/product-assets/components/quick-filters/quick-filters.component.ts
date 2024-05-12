import {Component, inject, OnDestroy, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-quick-filters',
  standalone: true,
  imports: [PanelModule, ReactiveFormsModule, DropdownModule, ButtonModule, InputTextModule, KeyFilterModule, SkeletonModule, NgOptimizedImage, TooltipModule],
  templateUrl: './quick-filters.component.html',
  styleUrl: './quick-filters.component.scss'
})
export class QuickFiltersComponent implements OnInit, OnDestroy {
  public quickFilterForm! : FormGroup;
  public productOptions : { label : any; value : any; categoryId : any; }[] = []
  public finalCustomerOptions : { label : any; value : any; }[] = [];
  public isProductFamiliesSuccess : boolean = false;
  isProductFamiliesError : boolean = false;
  isProductFamiliesLoading : boolean = true;
  public isFinalCustomersSuccess : boolean = false;
  protected readonly document = document;
  private getQuickFiltersDataSubscription : Subscription = new Subscription();
  private productOptionsSubscription : Subscription = new Subscription();
  private finalCustomerOptionsSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
    const formBuilder = inject(FormBuilder);
    this.quickFilterForm = formBuilder.group({
      product: [null, Validators.required],
      finalCustomer: [null],
      assetName: [null],
    });

  }

  ngOnInit() {

    this.getQuickFiltersData();
    this.productOptionsSubscription = this.productService.productOptions$.subscribe((options) => {
      this.productOptions = options;
    });
    this.finalCustomerOptionsSubscription = this.productService.finalCustomerOptions$.subscribe((options) => {
      this.finalCustomerOptions = options;
    });
  }

  submitFilters() {
    this.productService.quickFiltersDataValue = this.quickFilterForm.value;
    console.log('get quickFiltersDataValue =', this.productService.quickFiltersDataValue);
  }



  public onProductDropDownChange(event : any) : void {
    this.productService.selectedProductValue = event.value;
  }

  resetFilters() {
    this.quickFilterForm.reset();
    this.productService.quickFiltersDataValue = null
    this.productService.productsValue = [];
    console.log('reset quickFiltersDataValue =', this.productService.quickFiltersDataValue);
    console.log('reset productsValue =', this.productService.productsValue);
  }

  getQuickFiltersData() : void {
    const errorHandler = (source : string) => catchError((error : any) => {
      console.error(`An error occurred fetching ${source}:`, error);
      if (source === 'product families') {
        this.isProductFamiliesError = true;
        this.isProductFamiliesSuccess = false;
        this.isProductFamiliesLoading = false;
      }
      return EMPTY;
    });

    const productFamilies$ = this.productService.getProductCatalog().pipe(errorHandler('product families'));
    const finalCustomers$ = this.productService.getFinalCustomers().pipe(errorHandler('final customers'));
    this.getQuickFiltersDataSubscription.add(combineLatest([productFamilies$, finalCustomers$]).subscribe({
      next: ([productFamiliesData, finalCustomersData]) => {
        if (productFamiliesData) {
          this.isProductFamiliesSuccess = true;
          this.isProductFamiliesLoading = false;
          this.isProductFamiliesError = false;
        }
      }, error: (err) => {
        console.error('An error occurred:', err);
        this.isProductFamiliesError = true;
        this.isProductFamiliesSuccess = false;
        this.isProductFamiliesLoading = false;
      }
    }));
  }

  ngOnDestroy() : void {
    this.productOptionsSubscription.unsubscribe();
    this.finalCustomerOptionsSubscription.unsubscribe();
    this.getQuickFiltersDataSubscription.unsubscribe();
  }
}
