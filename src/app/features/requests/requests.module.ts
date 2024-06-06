import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {PanelModule} from 'primeng/panel';
import {RequestsComponent} from './requests.component';
import {RequestsRoutingModule} from "./requests-routing.module";
import {FormlyFormFieldModule} from '@ngx-formly/primeng/form-field';
import {FormlyWrapperCustomComponent} from "./formly-wrapper-custom/formly-wrapper-custom.component";
import {ButtonModule} from "primeng/button";
import {FromlyFormComponent} from "@app/features/requests/fromly-form/fromly-form.component";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [RequestsComponent, FromlyFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      wrappers: [
        {name: 'customWrapper', component: FormlyWrapperCustomComponent},
      ],
    }),
    FormlyPrimeNGModule,
    PanelModule,
    RequestsRoutingModule,
    FormlyFormFieldModule,
    ButtonModule,
    DropdownModule,

  ],
  exports: [RequestsComponent]
})
export class RequestsModule {
}
