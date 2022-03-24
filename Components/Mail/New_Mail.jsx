import React, { Component } from "react";
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_CELESTE, COLOR_BLANCO, COLOR_GRIS_CLARO, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';

const Newcontainer = ({


}) => {
  return(
    <React.Fragment>
      <div className="container__newmail"></div>
        <div className="container__newmail--tittle">
          <p>Dominio</p>
        </div>
      <div className="container__newmail--search">
          <input className="form-control" type="search" placeholder="Ingresa dominio...."/>
      </div>
      <div className="container__newmail--accounts">
          <div className="date__filter--text">Numero de Cuentas:</div>
          <input className="form-control" type="number"></input>
          <div className="date__filter--fecha">Fecha:</div>
          <input className="form-control" type="date"></input>
      </div>
      <div className="container__newmail--botton">
          <button className ="button">
          <p className="button--title"> Aceptar</p>
        </button> 
      </div>

    <style jsx>{`           
      .container__newmail{
        background: ${COLOR_GRIS_CLARO};
        border-radius: 15px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .container__newmail--tittle{
        height: 70px;
        width: 90%;
        margin-left: 42px;
        padding-top: 25px;
        text-align: left;
        font-weight: 900;
        font-size: 20px;
        line-height: 33px;
        color: ${COLOR_AZUL_OSCURO};
      
      }

      .container__newmail--search{
        height: 40px;
        width: 90%;
        margin-left: 42px;
        
      }

      .container__newmail--botton{
        height: 100px;
        width: 90%;
        margin-left: 42px;
        display: flex;
        flex-direction: column;
      }

      .container__newmail--accounts{
        width: 90%;
        margin-left: 42px;
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        }
        
        .date__filter--text {
          width: 40%;
          margin: 6px 10px 0px 0px;
          font-size: 16px;
          font-weight: 900;
          color: ${COLOR_AZUL_OSCURO};
        }

        .date__filter--fecha{
          width: 40%;
          margin: 6px 15px 0px 70px;
          text-align: right;
          font-size: 16px;
          font-weight: 900;
          color: ${COLOR_AZUL_OSCURO};
        }

        .button {
          background-color: ${COLOR_CELESTE};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
          border-color:${COLOR_CELESTE};
          border-radius: 10px;
          width: 130px;
          height: 40px;
          outline:none;
          color: ${COLOR_AZUL_OSCURO};
          font-weight: bold;
          text-transform: capitalize;
          display: flex;
          flex-direction: row;
          margin-top: 25px;
          margin-left: 89%;
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
        
        

    `}</style>
    </React.Fragment>
  );
}

export default Newcontainer;