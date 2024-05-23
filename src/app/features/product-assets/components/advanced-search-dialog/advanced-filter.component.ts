import {Component, effect, OnDestroy, OnInit} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {DropdownModule} from "primeng/dropdown";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TreeSelectModule} from "primeng/treeselect";
import {ChipsModule} from "primeng/chips"; // Ensure lodash is installed and imported
@Component({
  selector: 'app-advanced-search-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, NgOptimizedImage, CommonModule,
    BreadcrumbModule, DropdownModule, ReactiveFormsModule, TreeSelectModule, ChipsModule],
  templateUrl: './advanced-filter.component.html',
  styleUrl: './advanced-filter.component.scss'
})
export class AdvancedFilterComponent implements OnInit, OnDestroy {
  showDialog : boolean = false;
  formGroup : FormGroup;
  categories : any[] = [];
  protected readonly document = document;

  constructor(private productService : ProductAssetsService) {

    this.formGroup = new FormGroup({
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
    }, {allowSignalWrites: true});
  }

  ngOnInit() : void {
    console.log(Array.isArray(this.categories)); // Should log true
    console.log(this.categories);
    // Verify each child array
    this.categories.forEach(category => {
      console.log('Is children an array?', Array.isArray(category.children));
      console.log('Children:', category.children);
    });
  }


  closeDialog() {
    this.productService.showAdvancedSearchDialog.set(false);
  }

  ngOnDestroy() : void {
  }
}
