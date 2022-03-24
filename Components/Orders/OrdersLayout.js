import React from 'react';
import OrderFilter_Search from './OrderFilter_Search';
import Container_Section from "./../Principal/Container_Section"
import TableOrders from './TableOrders';
import { COLOR_CELESTE, COLOR_BLANCO, COLOR_AZUL_OSCURO } from '../../lib/util/Colors';

const OrdersLayout = () => {
  return(
    <React.Fragment>

      <OrderFilter_Search Query="Selecciona el tipo de dato por el que deseas realizar la búsqueda : " Typequery="Ingresa aquí los datos..."/>

      <Container_Section title="Servicios">
        <div className="btn__container">
          <button  className="btn__content">Exportar</button>
          </div> 
        <div>
          <br/>
          <div className="TableContainer">
          <TableOrders/>
          </div>
         
        </div>
                
        </Container_Section>

        <style jsx>{`

          .TableContainer {
            margin: 0px 15px 2px 15px;
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
        
          `} </style>
    </React.Fragment>)
}

export default OrdersLayout;