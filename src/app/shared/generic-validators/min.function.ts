import {FormlyFieldConfig} from "@ngx-formly/core";

export function validateMin(error: any, field: FormlyFieldConfig) {
  return 'This value should be more than ' + field.props?.min
}
