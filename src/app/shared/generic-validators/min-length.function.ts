import {FormlyFieldConfig} from "@ngx-formly/core";

export function validateMinLength(error: any, field: FormlyFieldConfig) {
  return `Should have at least ${field.props?.minLength} characters`
}
