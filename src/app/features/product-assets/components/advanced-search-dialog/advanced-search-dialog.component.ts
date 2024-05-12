import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductAssetsService} from "../../product-assets.service";
import {DialogModule} from "primeng/dialog";
import {Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-advanced-search-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule
  ],
  templateUrl: './advanced-search-dialog.component.html',
  styleUrl: './advanced-search-dialog.component.scss'
})
export class AdvancedSearchDialogComponent implements OnInit, OnDestroy {
  showDialog : boolean = false;
  showDialogSubscription : Subscription = new Subscription();

  constructor(private productService : ProductAssetsService) {
  }

  ngOnInit() : void {
    this.showDialog = this.productService.showAdvancedSearchDialogValue;
    this.showDialogSubscription = this.productService.showAdvancedSearchDialog$.subscribe({
      next: (value) => {
        this.showDialog = value;
      }
    });

  };

  closeDialog() {
    this.productService.showAdvancedSearchDialogValue = false;
  }

  ngOnDestroy() : void {
  }

}
