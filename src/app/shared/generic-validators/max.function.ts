import {FormlyFieldConfig} from "@ngx-formly/core";

export function validateMax(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.max}`
}
