import {FormlyFieldConfig} from '@ngx-formly/core';
import {Injectable} from '@angular/core';
import {AbstractControl} from "@angular/forms";

export function ipValidator(control: AbstractControl): null | { ip: boolean } {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : {ip: true};
}

@Injectable({
  providedIn: 'root',
})
export class RequestsService {

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'grid',
      fieldGroup: [
        {
          className: 'md:col-6',
          key: 'colorType',
          type: 'radio',
          props: {
            label: 'Color Type',
            required: true,
            options: [
              {value: 'Pantone', label: 'Pantone'},
              {value: 'RGB', label: 'RGB'},
              {value: 'HEX', label: 'HEX'},
              {value: 'CMYK', label: 'CMYK'},
            ],
          },
        },
        {
          className: 'md:col-6',
          key: 'color',
          type: 'input',
          props: {
            type: 'color',
            label: 'Color Picker',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'grid',
      fieldGroup: [
        {
          className: 'md:col-4',
          key: 'partNumber',
          type: 'input',
          props: {
            label: 'Part Number',
            required: true,
            pattern: '^p-\\d+$',
            placeholder: 'e.g., p-12345',
          },
          validation: {
            messages: {
              pattern: 'Part number must start with "p-" and be followed by positive numbers.',
            },
          },
        },
        {
          className: 'md:col-4',
          key: 'translucencePercentage',
          type: 'input',
          props: {
            type: 'number',
            label: 'Translucence percentage',
            min: 1,
            max: 100,
            required: true,
          },
          validation: {
            messages: {
              min: 'Number must be at least 1.',
              max: 'Number must be at most 100.',
              required: 'Number is required',
            },
          },
        },
        {
          key: 'ip',
          type: 'input',
          className: 'md:col-4',
          props: {
            label: 'IP Address (using custom validation through `validators.validation` property)',
            required: true,
          },
          validators: {
            validation: [ipValidator],
          },
        },
        {
          className: 'md:col-4',
          key: 'sampleSubmission',
          type: 'checkbox',
          props: {
            label: 'Sample Submission',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'grid',
      fieldGroup: [
        {
          className: 'md:col-12',
          key: 'shippingAddress',
          type: 'textarea',
          expressions: {
            hide: '!model.sampleSubmission',
            'props.required': 'model.sampleSubmission'
          },
          props: {
            label: 'Shipping Address',
            maxLength: 250,
            rows: 3,
          },
        },
      ],
    },
  ];

}
