import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {PanelModule} from 'primeng/panel';
import {RequestsComponent} from './requests.component';
import {RequestsRoutingModule} from "./requests-routing.module";
import {FormlyFormFieldModule} from '@ngx-formly/primeng/form-field';
import {FormlyFieldComponent} from "@app/features/requests/components/components/formly-field/formly-field.component";
import {ButtonModule} from "primeng/button";
import {FromlyFormComponent} from "@app/features/requests/components/components/fromly-form/fromly-form.component";
import {DropdownModule} from "primeng/dropdown";
import {DividerModule} from "primeng/divider";
import {ipValidator, IpValidatorMessage} from "@shared/custom-validators/ip-validator.function";
import {validateRequired} from "@shared/generic-validators/required-validator.function";
import {validateMax} from "@shared/generic-validators/max.function";
import {validateMinLength} from "@shared/generic-validators/min-length.function";
import {validateMaxLength} from "@shared/generic-validators/max-length.function";
import {validateMin} from "@shared/generic-validators/min.function";
import {
  InputPhoneMaskComponent
} from "@app/features/requests/components/components/input-phone-mask/input-phone-mask.component";
import {InputMaskModule} from "primeng/inputmask";
import {
  InputPartNumberMaskComponent
} from "@app/features/requests/components/components/input-part-number-mask/input-part-number-mask.component";
import {
  FormlySliderComponent
} from "@app/features/requests/components/components/formly-slider/formly-slider.component";
import {SliderModule} from "primeng/slider";
import {FormlyKnobComponent} from "@app/features/requests/components/components/formly-knob/formly-knob.component";
import {KnobModule} from "primeng/knob";
import {
  FormlyCalendarComponent
} from "@app/features/requests/components/components/formly-calendar/formly-calendar.component";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [RequestsComponent, FromlyFormComponent, InputPhoneMaskComponent,
    InputPartNumberMaskComponent, FormlySliderComponent, FormlyKnobComponent, FormlyCalendarComponent],
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild({
    validators: [
      {name: 'ip', validation: ipValidator}
    ],
    validationMessages: [
      {name: 'ip', message: IpValidatorMessage},
      {name: 'required', message: validateRequired},
      {name: 'minlength', message: validateMinLength},
      {name: 'maxlength', message: validateMaxLength},
      {name: 'min', message: validateMin},
      {name: 'max', message: validateMax},
    ],
    types: [
      {name: 'phoneMask', component: InputPhoneMaskComponent},
      {name: 'partNumberMask', component: InputPartNumberMaskComponent},
      {name: 'slider', component: FormlySliderComponent},
      {name: 'knob', component: FormlyKnobComponent},
      {name: 'date', component: FormlyCalendarComponent},


    ],
    wrappers: [{name: 'formly-field', component: FormlyFieldComponent}],
  }), FormlyPrimeNGModule, PanelModule, RequestsRoutingModule, FormlyFormFieldModule, ButtonModule, DropdownModule, DividerModule, InputMaskModule, SliderModule, KnobModule, CalendarModule,

  ],
  exports: [RequestsComponent]
})
export class RequestsModule {
}
