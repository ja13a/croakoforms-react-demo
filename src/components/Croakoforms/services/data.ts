import React from 'react';

import headerIcon from '../assets/svg/heading-solid.svg';
import paragraphIcon from '../assets/svg/paragraph-solid.svg';
import buttonIcon from '../assets/svg/b-solid.svg';
import textareaIcon from '../assets/svg/align-justify-solid.svg';
import fileUploadIcon from '../assets/svg/file-import-solid.svg';
import checkboxGroupIcon from '../assets/svg/square-check-solid.svg';
import radioGroupIcon from '../assets/svg/circle-dot-solid.svg';
import selectIcon from '../assets/svg/caret-right-solid.svg';
import textInputIcon from '../assets/svg/font-solid.svg';
import numberInputIcon from '../assets/svg/hashtag-solid.svg';

export interface ICroakoformsElement {
  icon: string; // string т.к. нельзя src img-элемента назначить HTMLSVGElement
  title: string,
  type: CroakoformsElementsName;
}

export interface IFormViewElement {
  require: boolean;
  className: string;
  id: string;
  name?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  innerText?: string;
  type: {
    currentType: React.ElementType,
    changable: boolean,
    options?: React.ElementType[]
  },
  subtype?: {
    currentSubtype: string,
    changable: boolean,
    options?: string[]
  },
  elementProperties?: {
    min?: number;
    max?: number;
    step?: number;
    maxLength?: number;
    minLength?: number;
    rows?: number;
    cols?: number;
    autoComplete?: 'on' | 'off';
    spellCheck?: 'true' | 'default' | 'false';
    wrap?: 'hard' | 'soft';
    pattern?: string;
    placeholder?: string;
    accept?: string;
  }
}

interface IFormViewElementsData {
  [elementType: string]: IFormViewElement,
}

enum CroakoformsElementsName {
  header = 'header',
  paragraph = 'paragraph',
  textInput = 'textInput',
  numberInput = 'numberInput',
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
  textInput,
  numberInput,
  button,
  textarea,
  fileUpload,
  checkboxGroup,
  radioGroup,
  select
} = CroakoformsElementsName;

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
    icon: textInputIcon,
    title: 'Text Input',
    type: textInput
  },
  {
    icon: numberInputIcon,
    title: 'Number Input',
    type: numberInput
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

export const formViewElementsData: IFormViewElementsData = {
  header: {
    require: false,
    className: '',
    id: '',
    innerText: 'Header',
    type: {
      changable: true,
      currentType: 'h1',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
      ]
    }
  },
  paragraph: {
    require: false,
    className: '',
    id: '',
    innerText: 'Paragraph',
    type: {
      changable: false,
      currentType: 'p'
    }
  },
  textarea: {
    require: false,
    className: 'croakoforms-form-view__textarea',
    id: '',
    label: 'Text Area',
    type: {
      changable: false,
      currentType: 'textarea'
    },
    elementProperties: {
      rows: 4,
      spellCheck: 'true',
      wrap: 'soft',
      placeholder: 'Text Area placeholder'
    }
  },
  textInput: {
    require: false,
    className: '',
    id: '',
    label: 'Text Input',
    type: {
      changable: false,
      currentType: 'input'
    },
    subtype: {
      currentSubtype: 'text',
      changable: true,
      options: [
        'text',
        'email'
      ]
    },
    elementProperties: {
      maxLength: 56,
      minLength: 0,
      pattern: '',
      spellCheck: 'true',
      autoComplete: 'on',
      placeholder: 'Text Input placeholder'
    }
  },
  numberInput: {
    require: false,
    className: '',
    id: '',
    label: 'Number Input',
    type: {
      changable: false,
      currentType: 'input'
    },
    subtype: {
      currentSubtype: 'number',
      changable: true,
      options: [
        'number',
        'range',
        'tel'
      ]
    },
    elementProperties: {
      step: 1,
      min: 0,
      max: 100,
      placeholder: 'Number Input placeholder'
    }
  },
  button: {
    require: false,
    className: '',
    id: '',
    label: 'Button',
    type: {
      changable: false,
      currentType: 'button'
    },
    subtype: {
      currentSubtype: 'button',
      changable: true,
      options: [
        'button',
        'reset',
        'submit'
      ]
    },
    elementProperties: {},
    innerText: 'Button'
  },
  fileUpload: {
    require: false,
    className: '',
    id: '',
    label: 'File Upload',
    type: {
      currentType: 'input',
      changable: false
    },
    subtype: {
      currentSubtype: 'file',
      changable: false
    },
    elementProperties: {
      accept: ''
    }
  }
};

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