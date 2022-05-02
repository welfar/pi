import React, { useState } from 'react';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../../../lib/util/Colors';
import ToggleStole from './ToggleStole';
import TogglePrivacy from './TogglePrivacy';
import ToggleStatus from './ToggleStatus';
import {FaRegSave} from "react-icons/fa";

const ModalFormEditDataDomain = () =>{
    const btnPlus =() =>{ alert("Guardar cambios");}
    const [inputs, setInputs] = useState({});

    const [toggledStole, settoggledStole] = React.useState(true);
    const stoleHandleClick = () => {
      settoggledStole((s) => !s);
    };

    const [toggledPrivacy, settoggledPrivacy] = React.useState(true);
    const privacyHandleClick = () => {
      settoggledPrivacy((s) => !s);
    };


    const [toggledStatus, settoggledStatus] = React.useState(true);
    const statusHandleClick = () => {
      settoggledStatus((s) => !s);
    };

    return(
      <React.Fragment> 
        
        <div className="containerForm">
          <div className="containerForm__data">
            <div className="containerForm__data--names">
              <p>Dominio</p>
            </div>
            <div className="containerForm__input">
              <input className="form-control"  id="name" type="text" name="name"></input>
            </div>
          </div>
          <div className="containerForm__data">
            <div className="containerForm__data--names">
            <p>AuthCode</p>  
            </div>
            <div className="containerForm__input">
              <input className="form-control" id="id" type="number" name="id" ></input>
            </div>
          </div>
          
          <div className="containerForm__dataToggle">
          <div className="containerForm__dataToggle__tittle">
            <div className="containerForm__dataToggle__tittleName">
              <p>Estado</p>
            </div>
            <div className="containerForm__dataToggle--toggleInput">
            <ToggleStatus toggledStatus={toggledStatus} onclick={statusHandleClick} />
            </div>
          </div>
          <div className="containerForm__dataToggle__tittle">
            <div className="containerForm__dataToggle__tittleName">
              <p>Protección Contra Robo</p>
            </div>
            <div className="containerForm__dataToggle--toggleInput">
            <TogglePrivacy toggledPrivacy={toggledPrivacy} onclick={privacyHandleClick} />
            </div>
          </div>
          <div className="containerForm__dataToggle__tittle">
            <div className="containerForm__dataToggle__tittleName">
              <p>Protección De privacidad</p>
            </div>
            <div className="containerForm__dataToggle--toggleInput">
              <ToggleStole toggledStole={toggledStole} onclick={stoleHandleClick} />
            </div>
          </div>
          </div>



          <div className="itemContainerBotton">
            <p className="itemContainerBotton__buttons--plustext"> Guardar cambios </p>
            <button onClick={btnPlus} className="itemContainerBotton__buttons--plus">
                <div className="itemContainerBotton__buttons--plusIcon"><FaRegSave/></div>
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
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin: 10px;

          }

          .containerForm__dataToggle{
            display: flex;
            height: 100px;
            width: 100%;
            margin: 5px 5px;
            margin-top: 20px;
            margin-bottom: 30px;
          }

          .containerForm__dataToggle__tittle {
            display: flex;
            flex-direction: column;
            width: 160px;
            margin-right: 28px; 
          }

          .containerForm__dataToggle__tittleName {
            font-size: 17px;
            text-align: center; 
            color: #25233C;     
            font-weight: 600;
            padding-top: 7px;
            margin-left: 0px;
            height: 60px;
          }
          .containerForm__dataToggle--toggleInput {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding-top: 7px;
            padding-left: 50px;
          }

          .containerForm__input {
            display: flex;
            width: 70%;
            justify-content: space-between;
            align-items: center;
          }

          .containerForm__data--names{
            height: 40px;
            width: 30%;
            font-size: 19px;
            color: #25233C;     
            font-weight: 600;
            padding-top: 7px;
            margin-left: 30px;
          }

          .containerForm_input--config {
            background: ${COLOR_BLANCO};
            border-radius: 0px 10px;
            width: 340px;
            height 43px;
            border: none;
          }

        .form-control {
            background: ${COLOR_BLANCO};
            border-radius: 0px 10px;
            width: 340px;
            height 37px;
            border: none;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }

        .itemContainerBotton {
          display: flex;
          justify-content: flex-end;
          margin: 0px 25px;
          height:50px;
          widht: 100%;
        }

        .itemContainerBotton__buttons--plus {
        background-color: ${COLOR_PURPURA};
        border: none; 
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-color: ${COLOR_PURPURA};
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
        color: white;
      }

      .itemContainerBotton p {
        color: $(COLOR_AZUL_OSCURO);
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

export default ModalFormEditDataDomain;