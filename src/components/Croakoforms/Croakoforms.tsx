import React from 'react';
import CroakoformsSidebar from './CroakoformsSidebar';
import { sidebarElementsData } from './services/data';

export class Croakoforms extends React.Component {
  render() {
    return(
      <div className="croakoforms">
        <CroakoformsSidebar
          sidebarElements={sidebarElementsData}
        />
      </div>
    );
  }
}