import React, {Component} from "react";
import Simple_Search from '../Principal/Simple_Search';
import Container_Section from '../Principal/Container_Section';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';
import {FaFileExport} from "react-icons/fa";

const Commercial = ({


}) =>{ 
  
  return(
      <React.Fragment>
          <Simple_Search
            Query="Dar de baja un número de celular:"
            Typequery="Ingresa el número de celular..."
            TitleButton="Bloquear"
          />

        <Container_Section
            title="Exportar Buzones Disponibles"
        >
        <div>
          <button className ="button__container">
            <div className="button__container--icon"> <FaFileExport/></div> 
            <p className="button__container--title">Exportar</p>
          </button>  
        </div>
        <div>
        <div className="space"></div>
        </div>
        </Container_Section>
        

        <style jsx>{`
          .button__container {
				    background-color: ${COLOR_CELESTE};
				    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
				    border-color:${COLOR_CELESTE};
				    border-radius: 10px;
				    color: ${COLOR_AZUL_OSCURO};
				    font-weight: bold;
			    	width: 70%;
				    height: 40px;
			    	outline:none;
				    text-transform: capitalize;
            display: flex;
            flex-direction: row;
            margin-top: 10px;
		      }
           
          .button__container--title {
            flex: 2;
            color: ${COLOR_AZUL_OSCURO};
            font-size: 15px;
            margin-top: 5px;
            line-height: 25px;
            text-align: left;
            margin-left: 8px;
          }

          .button:hover {
			      color: ${COLOR_CELESTE};
            box-shadow: 0px 0px 5px 4px rgba(49,141,255,0.25);
            transition: all 0.2s ease;
			    }

          .button__container--icon {
            flex: 1;
            color: ${COLOR_AZUL_OSCURO};
            font-size: 20px;
            text-align: right;
          }
        

          .space{
            width: 100%;
            height: 30px;
          }


        `}</style>

      </React.Fragment>
      );

}

export default Commercial; 

