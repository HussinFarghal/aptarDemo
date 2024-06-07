import {AbstractControl} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

export function ipValidator(control: AbstractControl): null | { ip: boolean } {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : {ip: true};
}

export function IpValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid IP Address`;
}
