import {Component, effect, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "../../products.service";

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.scss'
})
export class ProductsFilterComponent implements OnInit{
  filterForm!: FormGroup;
  @Output() filtersData = new EventEmitter<{}>();
  private productService = inject(ProductsService);
  private formBuilder = inject(FormBuilder);
  constructor() {
    effect(() => {
    });
  }
  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      name:[''],
      id:['']
    });
  }
  onSubmit() {
    const filters = {
      name: this.filterForm.value.name?.trim().toLowerCase().replace(/\s/g, ''),
      id: this.filterForm.value.id?.trim().toLowerCase().replace(/\s/g, '')
    };
    this.filtersData.emit(filters);
  }
  resetFilters() {
    this.filterForm.reset();
    this.filtersData.emit({});
  }
}
