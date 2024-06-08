import {Component} from '@angular/core';
import {FieldWrapper, FormlyModule} from '@ngx-formly/core';
import {JsonPipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-formly-field',
  standalone: true,
  imports: [
    NgIf,
    FormlyModule,
    NgClass,
    JsonPipe
  ],
  templateUrl: './formly-field.component.html',
  styleUrl: './formly-field.component.scss'
})
export class FormlyFieldComponent extends FieldWrapper {

}
