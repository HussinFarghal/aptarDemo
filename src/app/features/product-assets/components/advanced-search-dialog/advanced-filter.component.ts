import {Component, effect, OnDestroy, OnInit} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {DropdownModule} from "primeng/dropdown";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TreeSelectModule} from "primeng/treeselect";
import {ChipsModule} from "primeng/chips";
import {MultiSelectModule} from "primeng/multiselect";
import {IQuickFilters} from "@shared/models/quick-filters.interface";
import {map, Subscription} from "rxjs";
import {ICategory} from "@shared/models/category.interface"; // Ensure lodash is installed and imported
export interface TreeNode {
  label : string;
  children? : TreeNode[];
}
@Component({
  selector: 'app-advanced-search-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, NgOptimizedImage, CommonModule,
    BreadcrumbModule, DropdownModule, ReactiveFormsModule, TreeSelectModule, ChipsModule, MultiSelectModule],
  templateUrl: './advanced-filter.component.html',
  styleUrl: './advanced-filter.component.scss'
})

export class AdvancedFilterComponent implements OnInit, OnDestroy {
  showDialog : boolean = false;
  formGroup : FormGroup;
  categories : any[] = [];
  products : any[] = [];
  assetName : string | undefined | null = '';
  quickFiltersData : IQuickFilters | null = {
    assetName: null,
    finalCustomer: null,
    product: null
  };
  categoriesSubscription : Subscription = new Subscription();
  productsSubscription : Subscription = new Subscription();
  protected readonly document = document;

  constructor(private productService : ProductAssetsService) {

    this.formGroup = new FormGroup({
      assetName: new FormControl(),
      selectedProducts: new FormControl(),
      selectedCategories: new FormControl(),
    });

    this.categories = [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'pi pi-fw pi-cog',
        children: [
          {key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document'},
          {key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document'}
        ]
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'pi pi-fw pi-home',
        children: [{key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month'}]
      }
    ];
    effect(() => {
      this.showDialog = this.productService.showAdvancedSearchDialog();
      this.quickFiltersData = this.productService.quickFiltersDataSignal();
      this.assetName = this.quickFiltersData?.assetName;
      this.formGroup.get('assetName')?.setValue(this.assetName);
    }, {allowSignalWrites: true});
  }

  ngOnInit() : void {
    this.categoriesSubscription = this.productService.getCategories().pipe(
      map(categories => this.transformCategoriesToTreeNodes(categories))
    ).subscribe({
      next: (treeNodes : TreeNode[]) => {
        this.categories = treeNodes;
      }
    });
    this.productsSubscription = this.productService.getProducts().pipe(
      map((products : any[]) => products.map(product => (
        {
          label: product.name,
          value: product.id
        }
      )))
    ).subscribe({
      next: (products : any[]) => {
        this.products = products;
        console.log('Products', products);
      }
    });
  }

// Function to transform categories to TreeNode structure
  private transformCategoriesToTreeNodes(categories : ICategory[]) : TreeNode[] {
    return categories.map(category => ({
      label: category.name,
      children: category.childCategories.map(childCategory => ({
        label: childCategory.name,
        children: childCategory.childCategories.length > 0 ? this.transformCategoriesToTreeNodes(childCategory.childCategories) : []
      }))
    }));
  }

  closeDialog() {
    this.productService.showAdvancedSearchDialog.set(false);
  }

  ngOnDestroy() : void {
    this.categoriesSubscription.unsubscribe();
  }
}
