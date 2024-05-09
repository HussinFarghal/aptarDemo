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

@Component({
  selector: 'app-quick-filters',
  standalone: true,
  imports: [PanelModule, ReactiveFormsModule, DropdownModule, ButtonModule, InputTextModule, KeyFilterModule, SkeletonModule],
  templateUrl: './quick-filters.component.html',
  styleUrl: './quick-filters.component.scss'
})
export class QuickFiltersComponent implements OnInit, OnDestroy {
  public quickFilterForm! : FormGroup;
  public productOptions : { label : any; value : any; categoryId : any; }[] = []
  public finalCustomerOptions : { label : any; value : any; }[] = [];
  public isProductFamiliesSuccess : boolean = false;
  public isFinalCustomersSuccess : boolean = false;
  private getQuickFiltersDataSubscription : Subscription = new Subscription();
  private productOptionsSubscription : Subscription = new Subscription();
  private finalCustomerOptionsSubscription : Subscription = new Subscription();
  protected readonly document = document;

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
    console.log('this.quickFilterForm.value =', this.quickFilterForm.value);
  }

  ngOnDestroy() : void {
    this.productOptionsSubscription.unsubscribe();
    this.finalCustomerOptionsSubscription.unsubscribe();
    this.getQuickFiltersDataSubscription.unsubscribe();
  }

  private getQuickFiltersData() : void {
    const errorHandler = (source : string) => catchError((error : any) => {
      console.error(`An error occurred fetching ${source}:`, error);
      switch (error.source) {
        case '"getProductFamilies"':
          this.isProductFamiliesSuccess = false;
          break;
        case '"getFinalCustomers"':
          this.isFinalCustomersSuccess = false;
          break;
      }
      return EMPTY;
    });
    const productFamilies$ = this.productService.getProductFamilies().pipe(errorHandler('product families'));
    const finalCustomers$ = this.productService.getFinalCustomers().pipe(errorHandler('final customers'));
    this.getQuickFiltersDataSubscription.add(combineLatest([productFamilies$, finalCustomers$]).subscribe({
      next: ([productFamiliesData, finalCustomersData]) => {
        if (productFamiliesData) {
          this.isProductFamiliesSuccess = true;
        }
      }, error: (err) => {
        console.error('An error occurred:', err);

      }
    }));
  }

}
