import {Component, computed, effect, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {ProductsFilterComponent} from "./components/products-filter/products-filter.component";
import {ProductsService} from "./products.service";
import {IProduct} from "./models/product.interface";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductsListComponent,
    ProductsFilterComponent
  ],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  private productService = inject(ProductsService);
  products$ = computed(() => this.productService.products$());
  private filtersSignal: WritableSignal<any> = signal({});

  filteredProducts$ = computed(() => {
    const products = this.products$();
    const filters = this.filtersSignal();

    // Return all products if no filters are applied
    if (!filters.name && !filters.id) {
      return products;
    }

     const nameFilter = filters.name;
      const idFilter = filters.id;
      console.log('nameFilter', nameFilter);
      console.log('idFilter', idFilter);
    // Use filter to locate products that match the specified name and id
    return products.filter(product => {
      const productName = product.name;
      const productId = product.id;
      console.log('productName', productName);
      console.log('productId', productId);
      return productName === nameFilter || productId === idFilter;
    });
  });


  constructor() {

    effect(() => {
      console.log('products$ in Effect', this.products$());
    });
  }

  ngOnInit(): void {
    this.productService.getProducts();

  }
  applyFilters(filters: any) {
    this.filtersSignal.set(filters);
  }
}
