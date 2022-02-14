import React from 'react';
import CroakoformsSidebarElement from './CroakoformsSidebarElement';
import { ICroakoformsElement } from '../services/data';

interface ICroakoformsSidebarProps {
  sidebarElements: ICroakoformsElement[];
}

export const CroakoformsSidebar: React.FC<ICroakoformsSidebarProps> = ({ sidebarElements }) => {
  return (
    <div className="croakoforms-sidebar">
      <div className="croakoforms-sidebar__buttons-wrapper">
        <button className="croakoforms-sidebar__button">
          <span className="undo-button"></span>
        </button>
        <button className="croakoforms-sidebar__button">
          <span className="redo-button"></span>
        </button>
      </div>
      <div className="croakoforms-sidebar__elements-wrapper">
        {sidebarElements.map(el => {
          return (
            <CroakoformsSidebarElement
              key={el.type}
              {...el}
            />
          );
        })}
      </div>
      <div className="croakoforms-sidebar__buttons-wrapper">
        <button className="croakoforms-sidebar__button">Clear</button>
        <button className="croakoforms-sidebar__button">{'[{...}]'}</button>
        <button className="croakoforms-sidebar__button">{'<.../>'}</button>
      </div>
    </div>
  );
};