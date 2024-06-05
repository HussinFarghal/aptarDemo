import {Component} from '@angular/core';
import {FieldWrapper} from '@ngx-formly/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-formly-wrapper-custom',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './formly-wrapper-custom.component.html',
  styleUrl: './formly-wrapper-custom.component.scss'
})
export class FormlyWrapperCustomComponent extends FieldWrapper {

}
