import React from 'react';
import { IFormViewElement } from '../../services/data';
import { generateUUID } from '../../services/generateUUID';

export class CroakoformsFormViewElement extends React.Component<IFormViewElement> {
  render() {
    const { type, label, elementProperties, innerText, className, id, subtype } = this.props;

    const Element = type.currentType;
    const elementID = !id && generateUUID();

    return(
      <div className="croakoforms-form-view__element">
        {label &&
          (<label htmlFor={elementID} className="croakoforms-form-view__element-label">
            {label}
          </label>)
        }
        <Element
          type={subtype && subtype.currentSubtype}
          id={elementID}
          className={className}
          {...elementProperties}
        >
          {innerText}
        </Element>
      </div>
    );
  }
}