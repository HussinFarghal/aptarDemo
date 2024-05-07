import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {ProductAssetsService} from "./product-assets.service";
import {QuickFiltersComponent} from "./components/quick-filters/quick-filters.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {BreadCrumbsComponent} from "../../shared/components/bread-crumbs/bread-crumbs.component";

@Component({
  selector: 'app-product-assets',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ToastModule, QuickFiltersComponent, ProductsListComponent, BreadCrumbsComponent],
  providers: [ConfirmationService, MessageService],
  templateUrl: './product-assets.component.html',
  styleUrl: './product-assets.component.scss'
})
export class ProductAssetsComponent implements OnInit {
  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.productService.getCategory().subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    });
  };

}
