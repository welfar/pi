import React, { useState } from 'react';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../../../lib/util/Colors';
import {GiCardExchange} from "react-icons/gi";

const ModalMoveDomain = () =>{
    const btnPlus =() =>{ alert("Mover Dominio");}
    const [inputs, setInputs] = useState({});  

    return(
      <React.Fragment> 
        
        <div className="containerForm">
          <div className="containerForm__data--domain">
            <div className="containerForm__data--nameDomain">
              <p>Dominio:</p>
            </div>
            <div className="containerForm__input--nameDomain">
                <p>Nombre del dominio</p>
            </div>
          </div>

          <div className="containerForm__datageneral">
          <div className="containerForm__data">
            <div className="containerForm__data--names">
              <p>ID. Origen</p>
            </div>
            <div className="containerForm__input">
              <input className="form-control" id="idOrigin" type="number" name="idOrigin" ></input>
            </div>
          </div>
          <div className="containerForm__data">
            <div className="containerForm__data--names">
              <p>ID. Destino</p>
            </div>
            <div className="containerForm__input">
              <input className="form-control" id="idDestination" type="number" name="idDestination" ></input>
            </div>
          </div>
          </div>
          <div className="itemContainerBotton">
            <p className="itemContainerBotton__buttons--plustext"> Mover Dominio </p>
            <button onClick={btnPlus} className="itemContainerBotton__buttons--plus">
                <div className="itemContainerBotton__buttons--plusIcon"><GiCardExchange/></div>
            </button>
          </div>   
        </div>

      
        <style jsx>{`
          .containerForm {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            margin: 5px 5px;
          }
          
          .containerForm__data {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 25px;
          }

          .containerForm__data--domain {
            display: flex;
            width: 100%;
          }

          .containerForm__data--nameDomain{
            height: 40px;
            width: 15%;
            font-size: 21px;
            color:${COLOR_NEGRO};     
            font-weight: 600;
            padding-top: 7px;
          }

          .containerForm__input--nameDomain {
            height: 40px;
            width: 50%;
            font-size: 19px;
            color: ${COLOR_AZUL_OSCURO};      
            font-weight: 480;
            padding-top: 11px;
          }


          .containerForm__datageneral{
            display: flex;
            width: 100%;
          }


          .containerForm__input {
            display: flex;
            width: 95%;
            height: 75px;
            
          }

          .containerForm__data--names{
            height: 40px;
            width: 80%;
            font-size: 19px;
            color: ${COLOR_NEGRO};      
            font-weight: 600;
            padding-top: 7px;
          }

          

        .form-control {
            background: ${COLOR_BLANCO};
            border-radius: 0px 10px;
            width: 300px;
            height: 65px;
            border: none;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }

        .itemContainerBotton {
          display: flex;
          justify-content: flex-end;
          height: 50px;
          width: 100%;
          margin-top: 15px;
          //border: 1px solid red;
        }

        .itemContainerBotton__buttons--plus {
        background-color: ${COLOR_VERDE_CLARO};
        border: none; 
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-color: ${COLOR_VERDE_CLARO};
				border-radius: 50%;
				width: 50px;
				height: 50px;
				outline:none;
        margin: 5px;
		  }
      

      .itemContainerBotton__buttons--plus:hover {
			  color: $(COLOR_GRIS_CLARO);
        transition: all 0.2s ease;
        transform: scale(1.1);
			}

      .itemContainerBotton__buttons--plusIcon {
        font-size: 25px;
        margin-left: 2px;
        margin-botton: 10px;
        color: ${COLOR_AZUL_CLARO};
      }

      .itemContainerBotton p {
        color: ${COLOR_AZUL_OSCURO};
        margin: 10px;
        margin-top: 23px;
        font-size: 18px;
        font-weight: bold;
        visibility: hidden;
      }

      .itemContainerBotton:hover p{
        visibility: visible;
      }

        `} </style>
            </React.Fragment>  
        );
}

export default ModalMoveDomain;