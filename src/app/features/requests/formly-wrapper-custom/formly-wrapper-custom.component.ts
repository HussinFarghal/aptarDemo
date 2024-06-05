import {Component} from '@angular/core';
import {FieldWrapper, FormlyModule} from '@ngx-formly/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-formly-wrapper-custom',
  standalone: true,
  imports: [
    NgIf,
    FormlyModule,
    NgClass
  ],
  templateUrl: './formly-wrapper-custom.component.html',
  styleUrl: './formly-wrapper-custom.component.scss'
})
export class FormlyWrapperCustomComponent extends FieldWrapper {

}
