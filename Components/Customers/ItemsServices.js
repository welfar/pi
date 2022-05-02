import React from 'react';
import { COLOR_AZUL_CLARO, COLOR_GRIS_CLARO, COLOR_VERDE_BRILLANTE } from '../../lib/util/Colors';
import {BsCircleFill} from 'react-icons/bs';


const ItemServices = ({
  domain,
  status,
  idService,
  dueDate,
}) => 
{
  return (
    <React.Fragment>

      <div className="itemContainer">
        <div className="itemContainer__header">
          <div className="itemContainer__header--left">
            <p>Correo Mi.com.co</p>
           <div className="iconStatus">   <BsCircleFill/>   </div>
          </div>
          <p className="idDomain">    125628    </p>
      </div>

      <div className="itemContainer__content">
        <div className="nameDomain">pah.com.co</div>
        <p className="dueDate"> <strong> Fecha de Vencimiento : </strong>  21 de Mayo de 2014</p>
      </div>
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
        margin-right: 8px;
        font-size: 16px;
        font-weight: bold;
      }

      .idDomain {
        font-size: 16px;
        font-weight: bold;
        margin-right: 8px;
      }

      .iconStatus {
        color: ${COLOR_VERDE_BRILLANTE};
        margin-top: 2px;
        font-size: 11px; 
       }

      .itemContainer__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .nameDomain {
        color: ${COLOR_AZUL_CLARO};
        font-size: 16px;
        font-weight: bold;
        text-transform: capitalize;
      }

       .dueDate {
        font-size: 14px;
        }
        
        `} </style>

    </React.Fragment>
    )
}

export default ItemServices;