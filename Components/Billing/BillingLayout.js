import React from 'react';
import { COLOR_VERDE_CLARO, COLOR_BLANCO, COLOR_AZUL_OSCURO, COLOR_CELESTE } from '../../lib/util/Colors';
import Container_Section from '../Principal/Container_Section';
import TableBilling from './TableBilling';
import BillingFilter_Search from './BillingFilter_search';
import {FaClipboardCheck} from 'react-icons/fa';


const BillingLayout = () => {
  return(
    <React.Fragment>s

      <BillingFilter_Search Query="Selecciona el tipo de dato por el que deseas realizar la búsqueda : " Typequery="Ingresa aquí los datos..."/>
     

      <Container_Section title="Facturas">
      <div className="btn__container">
          <button  className="btn__content">Exportar</button>
          </div> 

      
        <div className="tableContainer"> 
          <TableBilling/>
          <div className="button__container">
          <button className ="button">
            <div className="button--icon">
            <FaClipboardCheck/>
            </div>
          <p className="button--title"> Aprobar Facturas</p>
        </button> 
        </div>
        </div>
      </Container_Section>

      <style jsx> {`

        .tableContainer {
            margin: 25px 15px 2px 15px;
          }
          .btn__container {
            margin-left: 65%;
            margin-right: 25px;
            margin-top: 20px;
            width: 90px;
				    height: 35px;
          }
          .btn__content {
              background-color: ${COLOR_CELESTE};
              text-align: center;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
              border-color:${COLOR_CELESTE};
              border-radius: 10px;
              color: ${COLOR_AZUL_OSCURO};
              font-weight: bold;
              width: 100%;
              height: 100%;
              outline:none;
				      text-transform: capitalize;
          }
        
          .button__container {
          display: flex;
          flex-direction: column;
          margin-left: 80%;
          }

          .button {
            background-color: ${COLOR_VERDE_CLARO};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
            border-color:${COLOR_VERDE_CLARO};
            border-radius: 10px;
            width: 200px;
            height: 40px;
            outline:none;
            color: ${COLOR_AZUL_OSCURO};
            font-weight: bold;
            text-transform: capitalize;
            display: flex;
            flex-direction: row;
          }

        .button--icon {
          flex: 3;
          color: ${COLOR_AZUL_OSCURO};
          font-size: 20px;
        }
             
        .button--title {
          flex: 7;
          color: ${COLOR_AZUL_OSCURO};
          font-size: 15px;
          line-height: 25px;
          margin-top: 5px;
          padding-right: 10px;
          }
  
        .button:hover {
          box-shadow: 0px 0px 6px 5px rgba(106,252,168,0.28);
          transition: all 0.2s ease;
        }
        `} 

      </style>
    </React.Fragment>
    )
}

export default BillingLayout;