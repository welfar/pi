import React from 'react';
import { COLOR_GRIS_CLARO, COLOR_VERDE_BRILLANTE } from '../../lib/util/Colors';
import {BsCircleFill} from 'react-icons/bs';


const ItemDomains = ({
  domain,
  status,
  idService,
  dueDate,
}) => {
  return (
    <React.Fragment>

      <div className="itemContainer">
      <div className="itemContainer__header">
        <div className="itemContainer__header--left">
        <p>Pah.com.co</p>
        <div className="iconStatus">
            <BsCircleFill/>   </div>
        </div>
        <p className="idDomain">125628</p>
      </div>

        <p className="dueDate"> <strong> Fecha de Vencimiento : </strong>  21 de Mayo de 2014</p>
      </div>




      <style jsx>{`

        .itemContainer {
          background-color: ${COLOR_GRIS_CLARO};
          border-radius: 10px;
          margin: 10px 10px;
          padding:  10px 8px 3px 18px;
        }

        .itemContainer__header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .itemContainer__header--left {
          display: flex;
          flex-direction: row;
        }

        .itemContainer__header--left p {
          font-size: 16px;
          font-weight: bold;
          margin-right: 8px;
        }

        .idDomain {
          font-size: 16px;
          font-weight: bold;
          margin-right: 8px;
        }

        .iconStatus {
          color: ${COLOR_VERDE_BRILLANTE};
          font-size: 10px;
          margin-top: 3px;
        }

        .dueDate {
          font-size: 14px;
        }
        
        `} </style>

    </React.Fragment>
    )
}

export default ItemDomains;