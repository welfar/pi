import React from 'react';

const Tab = (  {isSelected, children}   ) =>
{
  return (
    <React.Fragment>
      { isSelected
        ? <div className="container">
           { children }
           </div>
        : null
  }
    </React.Fragment>
    )}
  export default Tab;

 

