import React from 'react';

import headerIcon from '../assets/svg/heading-solid.svg';
import paragraphIcon from '../assets/svg/paragraph-solid.svg';

export interface ICroakoformsElement {
  icon: string;
  title: string,
  type: React.ElementType;
}

export const sidebarElementsData: ICroakoformsElement[] = [
  {
    icon: headerIcon,
    title: 'Header',
    type: 'h1'
  },
  {
    icon: paragraphIcon,
    title: 'Paragraph',
    type: 'p'
  }
];

// {
//   icon: 'fa-heading',
//   title: 'Header',
//   formElementName: 'header',
//   inner: 'Header',
//   type: 'h1',
// },
// {
//   icon: 'fa-paragraph',
//   title: 'Paragraph',
//   formElementName: 'paragraph',
//   inner: 'Paragraph',
//   type: 'p',
// },
// {
//   icon: 'fa-edit',
//   title: 'Input',
//   formElementName: 'input',
//   label: 'Input',
//   type: 'input',
//   subtype: 'text',
//   value: '',
//   placeholder: '',
//   min: 0,
//   max: 56,
//   maxlength: '',
//   pattern: '',
//   required: false
// },
// {
//   icon: 'fa-bold',
//   title: 'Button',
//   formElementName: 'button',
//   label: 'Button',
//   inner: 'Button',
//   type: 'button',
//   subtype: 'button',
//   value: '',
// },
// {
//   icon: 'fa-align-justify',
//   title: 'Text Area',
//   formElementName: 'textarea',
//   label: 'Text Area',
//   type: 'textarea',
//   rows: 4,
//   disabled: false,
//   required: false,
// },
// {
//   icon: 'fa-file',
//   title: 'File Upload',
//   formElementName: 'file-upload',
//   label: 'File Upload',
//   type: 'input',
//   subtype: 'file',
// },
// {
//   icon: 'fa-check-square',
//   title: 'Checkbox Group',
//   formElementName: 'checkbox-group',
//   label: 'Checkbox Group',
//   formElementName: 'checkbox-group',
//   type: 'div',
//   name: '',
//   className: '',
//   checkboxes: [
//     {
//       label: 'checkbox 1',
//       checked: true,
//       value: 'checkbox-1'
//     },
//     {
//       label: 'checkbox 2',
//       checked: false,
//       value: 'checkbox-2'
//     }
//   ]
// },
// {
//   icon: 'fa-dot-circle',
//   title: 'Radio Group',
//   formElementName: 'radio-group',
//   label: 'Radio Group',
//   formElementName: 'radio-group',
//   type: 'div',
//   name: '',
//   className: '',
//   radioButtons: [
//     {
//       label: 'radio 1',
//       checked: true,
//       value: 'radio-1'
//     },
//     {
//       label: 'radio 2',
//       checked: false,
//       value: 'radio-2'
//     }
//   ]
// },
// {
//   icon: 'fa-bars',
//   title: 'Select',
//   label: 'Select',
//   formElementName: 'select',
//   type: 'select',
//   multi: false,
//   name: '',
//   className: '',
//   options: [
//     {
//       label: 'option 1',
//       selected: true,
//       value: 'option-1'
//     },
//     {
//       label: 'option 2',
//       selected: false,
//       value: 'option-2'
//     }
//   ]
// }
// ]);