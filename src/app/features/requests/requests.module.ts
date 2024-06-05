import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {PanelModule} from 'primeng/panel';
import {RequestsComponent} from './requests.component';
import {RequestsRoutingModule} from "./requests-routing.module";
import {FormlyFormFieldModule} from '@ngx-formly/primeng/form-field';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [RequestsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      //   wrappers: [
      //     {name: 'customWrapper', component: FormlyWrapperCustomComponent},
      //   ],
    }), // Import FormlyModule with forRoot configuration
    FormlyPrimeNGModule,
    PanelModule,
    RequestsRoutingModule,
    FormlyFormFieldModule,
    ButtonModule,
  ],
  exports: [RequestsComponent]
})
export class RequestsModule {
}
