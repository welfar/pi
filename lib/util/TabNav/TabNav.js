import React from 'react';
import {COLOR_AZUL_OSCURO, COLOR_CELESTE, COLOR_GRIS,COLOR_GRIS_CLARO} from '../Colors';

const TabNav = ({
  tabs,
  selected,
  setSelected,
  children}) =>
  {
  return (
    <React.Fragment>

      <ul className="navigation__container">

        {tabs.map( (tab) => {
          const active = (tab === selected ? 'active' : 'inactive');

          return (
            <li key={tab} className="navigation__item" key={tab}>
                <a className="" onClick={() => setSelected(tab)}>
                  <div className={` itemlist__container ${active}`} >
                      {tab} 
                  </div>
                </a>
            </li>
            )})}

      </ul>
      <div className="contentContainer">
        {children}
      </div>

      <style jsx>{`

        .navigation__container {
          margin-top: 18px;
          display: flex;
          padding: 0px;
          flex-direction: row;
          list-style: none;
          height: 42px;
          color: ${COLOR_AZUL_OSCURO};
        }

        .itemlist__container {
          cursor: pointer;
          text-align: center;
          font-size: 20px;
          padding-top: 5px;
          width: calc(80vw/3);
          height: 100%;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          font-weight: bold;
        }

          .active {
            background: ${COLOR_CELESTE};
          }

          .inactive {
            background: ${COLOR_GRIS_CLARO};
          }

        `} </style>
    </React.Fragment>)
}

export default TabNav;