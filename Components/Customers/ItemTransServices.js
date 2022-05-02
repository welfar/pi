import React from 'react';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_GRIS_CLARO, COLOR_PURPURA, COLOR_VERDE_BRILLANTE } from '../../lib/util/Colors';


const ItemTransServices = ({
  idTransaction,
  amount,
  typeTransaction,
  transactionDate,
}) =>
 {
  return (
    <React.Fragment>
      <div className="itemContainer">
        <div className="itemContainer__header">
          <p className="idTransaction">         15961         </p>
          <p className="amountTransaction"> $ 75.000    </p>
      </div>

    <div className="itemContainer__footer">
      <p className="transationType">   Invoice Payment       </p>
      <p className="transationDate"> <strong> Fecha de Transacción: </strong>  21 de Mayo de 2014</p>
    </div>
      
     </div>

    <style jsx>{`

      .itemContainer  {
        background-color: ${COLOR_GRIS_CLARO};
        border-radius: 10px;
        color: ${COLOR_AZUL_OSCURO};
        margin: 10px 10px;
        padding:  10px 8px 3px 18px;
      }

      .itemContainer__header  {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .idTransaction  {
        color: ${COLOR_AZUL_OSCURO};
        font-weight: bold;
        font-size: 16px; 
      }

      .amountTransaction  {
        color: ${COLOR_AZUL_CLARO};
        font-weight: bold;
        font-size: 16px;
        margin-right: 8px;
      }

      .itemContainer__footer  {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .transationType  {
        color: ${COLOR_PURPURA};
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 0px;
        text-transform: capitalize;    
     }

      .transationDate {
        align-self: flex-end;
        font-size: 15px;
      }
        
        `} </style>
    </React.Fragment>

    )
  }

export default ItemTransServices;