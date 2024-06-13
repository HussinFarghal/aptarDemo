interface Field {
  key: string;
  type: string;
  uiType: string;
  properties: Property;
  options: { label: string, value: string }[] | null;
  validationRules: Validator[] | null;
}

interface Property {
  placeholder?: string;
  label: string;
  rows?: number
}

interface Validator {
  expression?: string | null;
  type?: string;
  message?: string | null;
  min?: number;
  minDate?: string | null;
  maxDate?: string | null;
  maxLength?: number | null;
  max?: number;
  pattern?: string
}

export interface IFormType {
  id: number;
  name: string;
  fields: Field[];
}
