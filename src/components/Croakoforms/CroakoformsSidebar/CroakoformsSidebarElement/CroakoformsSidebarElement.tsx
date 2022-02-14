import React from 'react';
import { ICroakoformsElement } from '../../services/data';

export class CroakoformsSidebarElement extends React.Component<ICroakoformsElement> {

  render() {
    const { icon, title, type } = this.props;

    return (
      <div draggable={true} className="croakoforms-sidebar__element">
        <img className="croakoforms-sidebar__element-icon" src={icon}/>
        <span className="croakoforms-sidebar__element-title">{title}</span>
      </div>
    );
  }
}