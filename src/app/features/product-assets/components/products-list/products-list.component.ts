import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription, switchMap} from "rxjs";
import {ProductAssetsService} from "../../product-assets.service";
import {TableModule} from "primeng/table";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Column} from "../../../../shared/models/table-column.interface";
import {DeepFieldPipe} from "../../../../shared/deep-field.pipe";
import {SpeedDialModule} from "primeng/speeddial";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [TableModule, CommonModule, NgOptimizedImage, DeepFieldPipe, SpeedDialModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  isProductSuccess : boolean = false;
  isProductError : boolean = false;
  isProductLoading : boolean = true;
  isProductEmpty : boolean = false;
  products : any[] = [];
  productsColumns : Column[] = [];
  items : MenuItem[] | null = null;

  private getProductFamilySubscription : Subscription = new Subscription();
  private productsSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService, private cdr : ChangeDetectorRef) {
    this.productsColumns = [

      {field: 'displayName', header: 'Asset Name'},
      {field: 'finalCustomer', header: 'Final Customer'},
      {field: 'assetTypeName', header: 'Asset Type'},
      {field: 'lastUpdatedOn', header: 'Last Updated'}
    ]
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          console.log('Edit');
        }
      }
    ];
  }

  ngOnInit() : void {
    this.getProductFamily();
    this.getProducts();
  }

  getProductFamily() {

    this.getProductFamilySubscription = this.productService.quickFiltersData$
      .pipe(// Use switchMap to switch to a new observable when quickFiltersData changes
        switchMap(quickFiltersData => {
          if (quickFiltersData) {
            // Return the getProductFamily observable
            return this.productService.getProductFamily(1, 10, 'lastUpdatedOn', 'desc', quickFiltersData.product.value, quickFiltersData.assetName, quickFiltersData.finalCustomer.label);
          }
          // Return an empty or default observable if there is no data
          else {
            this.isProductError = true;
            this.isProductLoading = false;
            this.isProductEmpty = false;
            return of(null); // Ensure to import `of` from 'rxjs'
          }

        }))
      .subscribe({

        next: (res) => {
          console.log('product families', res)
          if (res) {
            this.productService.productsValue = res.list;
            this.isProductSuccess = true;
            this.isProductLoading = false;
            this.isProductEmpty = false;
          } else {
            this.isProductSuccess = false;
            this.isProductLoading = false;
            this.isProductEmpty = true;
          }


        },
        error: (error) => {
          console.error('Error fetching products', error);
          this.isProductError = true;
          this.isProductLoading = false;
          this.isProductEmpty = false;
        },
        complete: () => {
          this.isProductLoading = true;
        }

      });
  }

  getProducts() {
    this.productsSubscription = this.productService.products$.subscribe({
      next: (res) => {
        console.log('res', res);
        this.isProductEmpty = true;
        if (res) {
          this.products = res.map((product : any) => {
            const finalCustomers = product.fileFinalCustomers
              ? product.fileFinalCustomers.map((fc : any) => fc.finalCustomer).join(', ')
              : 'None';  // Gracefully handle null or empty arrays

            return {
              id: product.id,
              displayName: product.displayName,
              finalCustomer: finalCustomers, // Concatenate names or show 'None'
              assetTypeName: product.assetType.name,
              lastUpdatedOn: product.lastUpdatedOn
            };
          });
          console.log('products', this.products);
          this.isProductSuccess = true;
          this.isProductLoading = false;
          this.isProductEmpty = false;
        }
      },
      error: (error) => {
        console.error('Error fetching products', error);
        this.isProductError = true;
        this.isProductLoading = false;
        this.isProductEmpty = false;
      }
    });
  }

  trackByProductId(index : number, product : any) : any {
    return product.id; // assuming each product has a unique ID
  }

  ngOnDestroy() : void {
    this.getProductFamilySubscription.unsubscribe();
    this.productsSubscription.unsubscribe();
  }

}
