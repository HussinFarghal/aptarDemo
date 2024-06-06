import {FormlyFieldConfig} from '@ngx-formly/core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  fields: FormlyFieldConfig[] = [
    {
      key: 'colorType',
      type: 'radio',
      wrappers: ['customWrapper'],
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
      key: 'color',
      type: 'input',
      props: {
        type: 'color',
        label: 'Color Picker',
        required: true,
        validation: {
          required: 'color code is required'
        }
      },
    },
    {
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
          required: 'Part Number is required'
        },
      },
    },
    {
      key: 'sampleSubmission',
      type: 'checkbox',
      props: {
        label: 'Sample Submission',
      },
    },
    {
      key: 'shippingAddress',
      type: 'textarea',
      expressions: {
        hide: '!model.sampleSubmission',
      },
      props: {
        label: 'Shipping Address',
        maxLength: 250,
        rows: 10,
        required: true,
        validation: {
          messages: {
            maxLength: 'chars not exceed 250',
          },
        },
      },
    },
  ];
}
