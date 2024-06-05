import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsServiceService {
  fields: FormlyFieldConfig[] = [
    {
      key: 'subject',
      type: 'input',
      wrappers: ['formly-wrapper-primeng-form-field'],
      props: {
        label: 'Subject',
        required: true,
        maxLength: 50
      },
      validation: {
        messages: {
          required: 'Subject is required',
          maxLength: 'Subject must be less than 50 characters'
        }
      }
    },
    {
      key: 'description',
      type: 'textarea',
      props: {
        label: 'Description',
        required: true,
        maxLength: 500
      },
      validation: {
        messages: {
          required: 'Description is required',
          maxLength: 'Description must be less than 500 characters'
        }
      }
    },
    {
      key: 'samplesCount',
      type: 'input',
      props: {
        label: 'Samples Number',
        type: 'number',
        required: true,
        min: 1,
        max: 10
      },
      validation: {
        messages: {
          required: 'Samples Number is required',
          min: 'Samples Number must be at least 1',
          max: 'Samples Number must be at most 10'
        }
      }
    },
    {
      key: 'material',
      type: 'select',
      props: {
        label: 'Material',
        required: true,
        options: [
          {label: 'Plastic', value: 1},
          {label: 'Aluminum', value: 2},
          {label: 'Glass', value: 3}
        ]
      },
      validation: {
        messages: {
          required: 'Material is required'
        }
      }
    },
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        required: true,
        type: 'email'
      },
      validation: {
        messages: {
          required: 'Email is required',
          email: 'Email is not valid'
        }
      }
    },
    {
      key: 'phoneNumber',
      type: 'input',
      props: {
        label: 'Phone Number',
        required: false,
        pattern: '^[0-9]*$'
      },
      validation: {
        messages: {
          pattern: 'Phone Number must be numeric'
        }
      }
    }
  ];
  // fields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'grid',
  //     fieldGroup: [
  //       {
  //
  //         className: 'md:col-6',
  //         key: 'subject',
  //         type: 'input',
  //         wrappers: ['customWrapper'],
  //         props: {
  //           label: 'Subject',
  //           required: true,
  //           maxLength: 50
  //         },
  //         validation: {
  //           messages: {
  //             required: 'Subject is required',
  //             maxLength: 'Subject must be less than 50 characters'
  //           }
  //         }
  //       },
  //       {
  //         className: 'md:col-6',
  //         key: 'description',
  //         type: 'textarea',
  //         wrappers: ['customWrapper'],
  //         props: {
  //           label: 'Description',
  //           required: true,
  //           maxLength: 500
  //         },
  //         validation: {
  //           messages: {
  //             required: 'Description is required',
  //             maxLength: 'Description must be less than 500 characters'
  //           }
  //         }
  //       },
  //
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'grid',
  //     fieldGroup: [
  //       {
  //         className: 'md:col-3',
  //         key: 'samplesCount',
  //         type: 'input',
  //         wrappers: ['customWrapper'],
  //         props: {
  //           label: 'Samples Number',
  //           type: 'number',
  //
  //           required: true,
  //           min: 1,
  //           max: 10
  //         },
  //         validation: {
  //           messages: {
  //             required: 'Samples Number is required',
  //             min: 'Samples Number must be at least 1',
  //             max: 'Samples Number must be at most 10'
  //           }
  //         }
  //       },
  //       {
  //         className: 'md:col-3',
  //         key: 'material',
  //         type: 'select',
  //         wrappers: ['customWrapper'],
  //         props: {
  //           label: 'Material',
  //           required: true,
  //           options: [
  //             {label: 'Plastic', value: 1},
  //             {label: 'Aluminum', value: 2},
  //             {label: 'Glass', value: 3}
  //           ]
  //         },
  //         validation: {
  //           messages: {
  //             required: 'Material is required'
  //           }
  //         }
  //       },
  //       {
  //         className: 'md:col-3',
  //         key: 'email',
  //         type: 'input',
  //         wrappers: ['customWrapper'],
  //         props: {
  //           label: 'Email',
  //           required: true,
  //           type: 'email',
  //           pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' // Regex pattern for email validation
  //
  //         },
  //         validation: {
  //           messages: {
  //             required: 'Email is required',
  //             pattern: 'Email pattern is not valid'
  //           }
  //         }
  //       },
  //       {
  //         className: 'md:col-3',
  //         key: 'phoneNumber',
  //         type: 'input',
  //         wrappers: ['customWrapper'],
  //         props: {
  //           label: 'Phone Number',
  //           required: false,
  //           pattern: '^[0-9]*$'
  //         },
  //         validation: {
  //           messages: {
  //             pattern: 'Phone Number must be numeric'
  //           }
  //         }
  //       }
  //     ]
  //   }
  // ];

  constructor() {
    console.log('Fields initialized:', this.fields);
  }
}
