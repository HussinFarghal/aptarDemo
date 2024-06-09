import {Component} from '@angular/core';
import {FieldType} from "@ngx-formly/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-part-number-mask',
  standalone: false,
  templateUrl: './input-part-number-mask.component.html',
  styleUrl: './input-part-number-mask.component.scss'
})
export class InputPartNumberMaskComponent extends FieldType {
  getFormControl(): FormControl {
    return this.formControl as FormControl;
  }
}
