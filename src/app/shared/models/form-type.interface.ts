import {FormlyFieldConfig} from "@ngx-formly/core";

export interface IFormType {
  id: string;
  name: string;
  formlySchema: FormlyFieldConfig[];
}