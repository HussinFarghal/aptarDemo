import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RequestsServiceService} from './requests-service.service';
import {FormlyFieldConfig,} from '@ngx-formly/core';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  standalone: false,
})
export class RequestsComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private requestsService: RequestsServiceService) {
  }

  ngOnInit(): void {
    this.fields = this.requestsService.fields;
    console.log('Fields in component:', this.fields); // Log fields in component
  }

  trackByFn(index: number, field: FormlyFieldConfig): string {
    return field.key as string; // Ensure the return type is a string
  }

  onSubmit(model: any): void {
    console.log(model);
  }

  onReset(): void {
    this.form.reset();
    this.model = {};
  }

  protected readonly JSON = JSON;
}
