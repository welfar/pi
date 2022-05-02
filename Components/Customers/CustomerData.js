import React from 'react';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO,COLOR_BLANCO,COLOR_GRIS_CLARO, COLOR_PURPURA, COLOR_ROJO, COLOR_VERDE_BRILLANTE, COLOR_VERDE_CLARO } from '../../lib/util/Colors';
import {FaUserAstronaut, FaKey, FaTicketAlt, FaPlus} from 'react-icons/fa';
import {BsCircleFill} from 'react-icons/bs';


const CustomerData = () => 
{
  const btnCoupons =()=>{   alert("Cupones");  }
  const btnAddFunds =()=>{ alert("agregar Fondos");  }
  const btnPass =()=>{ alert("Contraseña temporal");  }

  return (
    <React.Fragment>

      <div className="data__container">
        <div className="costumerData__header">

          <div className="costumerData__header--left">
            <div className="costumerData__header--icon">    <FaUserAstronaut/>   </div>
            <div>
              <p className="costumerData__header--name" > Pedro Alonso</p>
              <p className="costumerData__header--email" >abogados@pah.com.co</p>
            </div>
            <div className="costumerData__header--circle">   <BsCircleFill/>            </div>
          </div>

          <p className="costumerData__header--id">     #  7546793    </p>
        </div>

        <div className="costumerData__amounts">
          <p className="costumerData__amounts--spend">  $ 564651213564   </p>
          <p className="costumerData__amounts--available">   $ 4654523       </p>
        </div>

        <div className="costumerData__content">
          <div  className="costumerData__content--left">
          <div className="costumerData__content--titles">
            <p>Compañía </p>
            <p>Celular </p>
            <p>Ciudad </p>
            <p>Dirección </p>
            <p>Identificación </p>
            <p>Fecha de Creación </p>
        </div>
        <div className="costumerData__content--data">

            <p> PAH Abogados Consultores - 9003291282</p>
            <p>3114834271</p>
            <p>Bogotá</p>
            <p>Bogotá</p>
            <p>9003291282</p>
            <p>19 de Noviembre 2011</p>
        </div>

          </div>
        <div className="costumerData__content--right">
          <div className="costumerData__content--buttons">

            <div className="button__container">
              <p className="textKey">  Contraseña Temporal  </p>
              <button onClick={btnPass} className="button__key"> <FaKey/>  </button>
            </div>

            <div className="button__container">
            <p  className="textCoupons">Cupones</p>
            <button onClick={btnCoupons} className="button__coupons" >  <FaTicketAlt/>  </button>
            </div>

            <div  className="button__container">
            <p className="textAddFunds">Agregar Fondos</p>
            <button  onClick={btnAddFunds} className="button__addFunds"> <FaPlus/> </button>
            </div>
          </div>
        </div>
    
        </div>
      </div>
      

    <style jsx>{`

      .data__container  {
        background-color: ${COLOR_GRIS_CLARO};
        border-radius: 15px;
        color: ${COLOR_AZUL_OSCURO};
        display: flex;
        flex-direction: column;
        margin: 25px;    
        padding: 0px 15px 10px;
      }

      .costumerData__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .costumerData__header--left {
        display: flex;
        flex-direction: row;
      }

      .costumerData__header--icon {
        font-size: 2.68rem;
        margin: 5px 3px 2px 10px;
      }

      .costumerData__header--name {
        font-weight: bold;
        font-size: 18px;
        margin: 15px 5px 2px 15px;
      }

      .costumerData__header--email {
        margin: 0px 15px;
        font-size: 16px;
      }

      .costumerData__header--circle {
        color: ${COLOR_VERDE_BRILLANTE};
        font-size: 15px;
        margin-top: 15px;
      }

      .costumerData__header--id {
        color: ${COLOR_AZUL_OSCURO};
        font-size: 18px;
        font-weight: bold; 
        margin: 15px 15px 0px;
      }

      .costumerData__amounts {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: bold;
        margin-right: 15px;
      }

      .costumerData__amounts--spend {
        color: ${COLOR_ROJO};   
        margin-bottom: 0px;
      }

       .costumerData__amounts--available {
        color: ${COLOR_AZUL_CLARO};
        margin-bottom: 2px;
      }

      .costumerData__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .costumerData__content--left {
        display: flex;
        flex-direction: row;
      }

      .costumerData__content--titles {
        margin: 0px 20px 0px 10px;
        font-size: 16px;
        font-weight: bold;
        color: ${COLOR_AZUL_OSCURO};
      }

      .costumerData__content--titles p{
        margin-bottom: 5px;
      }
      .costumerData__content--data p {
        margin-bottom: 5px;
      }

      .costumerData__content--right {
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
                
      }

      .costumerData__content--text {
        border: 1px solid red;
        color: ${COLOR_AZUL_OSCURO};
        display: flex;
        flex-direction: row;
        font-weight: bold;
        justify-content: flex-end;
      }

      .costumerData__content--buttons {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        margin-right: 15px;
      }

      .button__container {
        align-self: flex-end;
        display: flex;
        flex-direction: row;
      }

      .button__container p {
        margin: 10px 10px auto;
        font-size: 15px;
        font-weight: bold;
        visibility: hidden;
      }
  
      .button__container button {
        align-items: center;
        border-radius: 50%;
        font-size: 20px;
        font-weight: bold;
        height: 40px;
        line-height: 0.5;
        width: 40px;        
      }

      .button__key {
        background-color: ${COLOR_AZUL_CLARO};
        border-color: ${COLOR_AZUL_CLARO};
        color: ${COLOR_BLANCO};
        margin-bottom: 10px;
      }
      .button__key:hover { 
        transform: scale(1.1);
      }

      .button__container:hover p{
         visibility: visible;
      }

      .button__coupons {
        background-color: ${COLOR_PURPURA};
        border-color: ${COLOR_PURPURA};
        color: ${COLOR_BLANCO};
        margin-bottom: 10px;
      }

      .button__coupons:hover{
        transform: scale(1.1);
      }

      .button__addFunds {
        background-color: ${COLOR_VERDE_CLARO};
        border-color: ${COLOR_VERDE_CLARO};
        color: ${COLOR_AZUL_CLARO};
        margin-bottom: 0px;
      }
      
      .button__addFunds:hover{
        transform: scale(1.1);
      }
            
      `}</style>

    </React.Fragment>
  );
}
export default CustomerData;