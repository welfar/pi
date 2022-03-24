import React from 'react';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_GRIS_CLARO, COLOR_PURPURA, COLOR_VERDE_BRILLANTE } from '../../lib/util/Colors';
import {BsCircleFill} from 'react-icons/bs';


const ItemTransDomain = ({
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
        <p>107601561</p>
        </div>
      
        <p className="amount"> $ 75.000</p>
      </div>

      <p className="description">Renewal of epyca.co for 1 year invoice
      Renewal of epyca.co for 1 year invoice
      Renewal of epyca.co for 1 year invoice
      Renewal of epyca.co for 1 year invoice
      Renewal of epyca.co for 1 year invoice
      Renewal of epyca.co for 1 year invoice
      </p>

      <div className="itemContainer__footer">
      <div className="transationType">Invoice</div>
      <div className="transationDate">
        <p> <strong> Fecha de Transacción : </strong>  21 de Mayo de 2014</p>
      </div>
      </div>
        



      </div>




      <style jsx>{`

        .itemContainer {
          background-color: ${COLOR_GRIS_CLARO};
          color: ${COLOR_AZUL_OSCURO};
          border-radius: 10px;
          margin: 10px 10px;
          padding:  10px 8px 3px 18px;;
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
          color: ${COLOR_AZUL_OSCURO};
        }

        .amount {
          font-size: 16px;
          color: ${COLOR_AZUL_CLARO};
          font-weight: bold;
          margin-right: 8px;
        }

        .description {
          font-size: 14px;
          margin-right: 15px;
          text-align: justify;
        }

        .itemContainer__footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

         .transationType {
           color: ${COLOR_PURPURA};
           font-weight: bold;
           text-transform: capitalize;
           font-size: 16px;
         }

        .transationDate {
          font-size: 14px;
        }
        
        `} </style>





    </React.Fragment>
    )
}

export default ItemTransDomain;