import {FormlyFieldConfig} from "@ngx-formly/core";

export function validateRequired(error: any, field: FormlyFieldConfig) {
  return `This field is required`
}
