import React, { DragEvent } from 'react';
import { ICroakoformsElement } from '../../services/data';

export class CroakoformsSidebarElement extends React.Component<ICroakoformsElement> {

  render() {
    const { icon, title } = this.props;

    return (
      <div
        draggable={true}
        className="croakoforms-sidebar__element"
        onDragStart={(e) => this.sidebarElementOnDragHandler(e)}
      >
        <img className="croakoforms-sidebar__element-icon" src={icon} />
        <span className="croakoforms-sidebar__element-title">{title}</span>
      </div>
    );
  }

  sidebarElementOnDragHandler(e: DragEvent) {
    e.dataTransfer.setData('text/plain', this.props.type);
  }
}