import React from 'react';
import CroakoformsSidebar from './CroakoformsSidebar';
import CroakoformsFormView from './CroakoformsFormView';
import { sidebarElementsData } from './services/data';

export class Croakoforms extends React.Component {
  render() {
    return(
      <div className="croakoforms">
        <CroakoformsFormView />
        <CroakoformsSidebar
          sidebarElements={sidebarElementsData}
        />
      </div>
    );
  }
}