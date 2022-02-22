import React from 'react';
import CroakoformsSidebarElement from './CroakoformsSidebarElement';
import { CroakoformsContext } from '../Croakoforms';

export const CroakoformsSidebar: React.FC = () => {
  return (
    <CroakoformsContext.Consumer>
      {value => (
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
            {value.sidebarElements.map(el => {
              return (
                <CroakoformsSidebarElement
                  key={el.type}
                  {...el}
                />
              );
            })}
          </div>
          <div className="croakoforms-sidebar__buttons-wrapper">
            <button className="croakoforms-sidebar__button" onClick={value.clearFormView}>Clear</button>
            <button className="croakoforms-sidebar__button">{'[{...}]'}</button>
            <button className="croakoforms-sidebar__button">{'<.../>'}</button>
          </div>
        </div>
      )}
    </CroakoformsContext.Consumer>
  );
};