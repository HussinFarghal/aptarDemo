import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  output,
  signal,
  Signal
} from '@angular/core';
import {IProduct} from "../../models/product.interface";
import {ProductsService} from "../../products.service";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  @Input() products: Signal<IProduct[]> = signal([]);
  isProductsLoading$ = computed(() => this.productService.isProductsLoading$());
  isProductsFailed$ = computed(() => this.productService.isProductsFailed$());
  isProductsSuccess$ = computed(() => this.productService.isProductsSuccess$());
  isProductsEmpty$ = computed(() => this.productService.isProductsEmpty$());
  private productService = inject(ProductsService);
  constructor() {
    effect(() => {
    });
  }

  ngOnInit(): void {

  }

}
