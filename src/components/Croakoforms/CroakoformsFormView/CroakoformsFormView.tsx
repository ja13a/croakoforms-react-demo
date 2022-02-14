import React from 'react';

interface ICroakoformsFormViewProps {
  smth?: string;
}

export const CroakoformsFormView: React.FC<ICroakoformsFormViewProps> = () => {
  return(
    <div data-placeholder="drag elements here..." className="croakoforms-form-view"></div>
  );
};