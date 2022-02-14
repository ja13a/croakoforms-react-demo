// import React from 'react';

import headerIcon from '../assets/svg/heading-solid.svg';
import paragraphIcon from '../assets/svg/paragraph-solid.svg';
import inputIcon from '../assets/svg/pen-to-square-solid.svg';
import buttonIcon from '../assets/svg/b-solid.svg';
import textareaIcon from '../assets/svg/align-justify-solid.svg';
import fileUploadIcon from '../assets/svg/file-import-solid.svg';
import checkboxGroupIcon from '../assets/svg/square-check-solid.svg';
import radioGroupIcon from '../assets/svg/circle-dot-solid.svg';
import selectIcon from '../assets/svg/caret-right-solid.svg';

export interface ICroakoformsElement {
  icon: string; // string т.к. нельзя src img-элемента назначить HTMLSVGElement
  title: string,
  type: CroakoformsElementsType;
}

enum CroakoformsElementsType {
  header = 'header',
  paragraph = 'paragraph',
  input = 'input',
  button = 'button',
  textarea = 'textarea',
  fileUpload = 'fileUpload',
  checkboxGroup = 'checkboxGroup',
  radioGroup = 'radioGroup',
  select = 'select'
}

const {
  header,
  paragraph,
  input,
  button,
  textarea,
  fileUpload,
  checkboxGroup,
  radioGroup,
  select
} = CroakoformsElementsType;

export const sidebarElementsData: ICroakoformsElement[] = [
  {
    icon: headerIcon,
    title: 'Header',
    type: header
  },
  {
    icon: paragraphIcon,
    title: 'Paragraph',
    type: paragraph
  },
  {
    icon: inputIcon,
    title: 'Input',
    type: input
  },
  {
    icon: buttonIcon,
    title: 'Button',
    type: button
  },
  {
    icon: textareaIcon,
    title: 'Text Area',
    type: textarea
  },
  {
    icon: fileUploadIcon,
    title: 'File Upload',
    type: fileUpload
  },
  {
    icon: checkboxGroupIcon,
    title: 'Checkbox Group',
    type: checkboxGroup
  },
  {
    icon: radioGroupIcon,
    title: 'Radio Group',
    type: radioGroup
  },
  {
    icon: selectIcon,
    title: 'Select',
    type: select
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