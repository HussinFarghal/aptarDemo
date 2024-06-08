import {FormlyFieldConfig} from "@ngx-formly/core";

export function validateMaxLength(error: any, field: FormlyFieldConfig) {
  return `Should have less than ${field.props?.maxLength} characters`
}
