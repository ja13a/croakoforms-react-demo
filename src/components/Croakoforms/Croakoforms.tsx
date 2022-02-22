import React from 'react';
import CroakoformsSidebar from './CroakoformsSidebar';
import CroakoformsFormView from './CroakoformsFormView';
import { IFormViewElement, sidebarElementsData, formViewElementsData, ICroakoformsElement } from './services/data';

interface ICroakoformsState {
  formViewElements: IFormViewElement[];
}

interface ICroakoformsContext {
  formViewElements: IFormViewElement[];
  sidebarElements: ICroakoformsElement[],
  formViewOnDropHandler: (e: React.DragEvent) => void;
  formViewOnDragOverHandler: (e: React.DragEvent) => void;
  clearFormView: () => void;
}

const defaultCroakoformsContext: ICroakoformsContext = {
  formViewElements: [],
  sidebarElements: sidebarElementsData,
  formViewOnDropHandler: () => {},
  formViewOnDragOverHandler: () => {},
  clearFormView: () => {}
};

export const CroakoformsContext = React.createContext(defaultCroakoformsContext);

export class Croakoforms extends React.Component<null, ICroakoformsState> {
  constructor(props: null) {
    super(props);

    this.state = {
      formViewElements: []
    };
  }

  render() {
    return(
      <div className="croakoforms">
        <CroakoformsContext.Provider value={
          {
            formViewElements: this.state.formViewElements,
            sidebarElements: sidebarElementsData,
            formViewOnDropHandler: this.formViewOnDropHandler,
            formViewOnDragOverHandler: this.formViewOnDragOverHandler,
            clearFormView: this.clearFormView
          }
        }>
          <CroakoformsFormView />
          <CroakoformsSidebar />
        </CroakoformsContext.Provider>
      </div>
    );
  }

  formViewOnDropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const formViewElements = this.state.formViewElements;
    const newElement = formViewElementsData[e.dataTransfer.getData('text/plain')];

    newElement && formViewElements.push(newElement);
    this.setState({ formViewElements });
  };

  formViewOnDragOverHandler = (e: React.DragEvent) => e.preventDefault();

  clearFormView = () => {
    this.setState({ formViewElements: [] });
  };
}