import {Component} from '@angular/core';
import {FieldType} from "@ngx-formly/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-phone-mask',
  standalone: false,
  templateUrl: './input-phone-mask.component.html',
  styleUrl: './input-phone-mask.component.scss'
})
export class InputPhoneMaskComponent extends FieldType {
  getFormControl(): FormControl {
    return this.formControl as FormControl;
  }
}
