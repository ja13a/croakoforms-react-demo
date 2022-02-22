import React from 'react';
import CroakoformsFormViewElement from './CroakoformsFormViewElement';
import { CroakoformsContext } from '../Croakoforms';
import { generateUUID } from '../services/generateUUID';

export const CroakoformsFormView: React.FC = () => {
  return (
    <CroakoformsContext.Consumer>
      {value => (
        <div
          data-placeholder="drag elements here..."
          className="croakoforms-form-view"
          onDrop={(e) => value.formViewOnDropHandler(e)}
          onDragOver={(e) => value.formViewOnDragOverHandler(e)}
        >
          {value.formViewElements.map(el => <CroakoformsFormViewElement key={generateUUID()} {...el}/>)}
        </div>
      )}
    </CroakoformsContext.Consumer>
  );
};