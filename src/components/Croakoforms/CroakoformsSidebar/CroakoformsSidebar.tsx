import React from 'react';
import CroakoformsSidebarElement from './CroakoformsSidebarElement';
import { ICroakoformsElement } from '../services/data';

interface ICroakoformsSidebarProps {
  sidebarElements: ICroakoformsElement[];
}

export const CroakoformsSidebar: React.FC<ICroakoformsSidebarProps> = ({ sidebarElements }) => {
  return (
    <div className="croakoforms-sidebar">
      {sidebarElements.map(el => {
        return (
          <CroakoformsSidebarElement key={el.type.toString()} {...el}/>
        );
      })}
    </div>
  );
};