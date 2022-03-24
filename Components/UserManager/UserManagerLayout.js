import React from 'react';
import Simple_Search from '../Principal/Simple_Search';
import Container_Section from '../Principal/Container_Section';
import TableUserManager from './TableUserManager';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';
import {FaPlus} from "react-icons/fa";

const UserManagerLayout = () =>{

  const btnPlus =()=>{ alert("Crear nuevo usuario");  }
    return(
      <React.Fragment> 
        <Simple_Search
          Query="Consulta aquí la información de cada usuario de panel interno"
          Typequery="Ingresa un nombre"
          TitleButton="Buscar"
        />
        <Container_Section
          title="Registro de Usuarios"
        >
          <div></div>
        <div className='general'>
        <div className="itemContainer">
          <TableUserManager
          User="Duvan lozano"
          ></TableUserManager>

          <TableUserManager
          User="Andrea Moreno"
          ></TableUserManager>

          <TableUserManager
          User="Diego Aldemar"
          ></TableUserManager>

          <TableUserManager
          User="Juan David Welfar"
          ></TableUserManager>

          <TableUserManager
          User="Davids taka taka"
          ></TableUserManager>

          <TableUserManager
          User="Kevin Cavezas"
          ></TableUserManager>
          
          <TableUserManager
          User="Harold Talero"
          ></TableUserManager>

          <TableUserManager
          User="Jose Calderon"
          ></TableUserManager>

          <TableUserManager
          User="Luis Gomez"
          ></TableUserManager>

          <TableUserManager
          User="Samuel Jimenes"
          ></TableUserManager>

          <TableUserManager
          User="Katol Chitiva"
          ></TableUserManager>
          

          <TableUserManager
          User="Gerardo Aristizabal "
          ></TableUserManager>       
        </div>
          <div className="itemContainerBotton">
            <button onClick={btnPlus} className='itemContainerBotton__buttons--plus'>
                <div className="itemContainerBotton__buttons--plusIcon"><FaPlus/> </div>
            </button>
          </div>   
        </div>
          
        </Container_Section>



        <style jsx>{`

        .general{
          display: flex;
          flex-direction: column;
        }

        .itemContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          height:800px;
          border-radius: 10px;
          margin: 20px 25px;
          overflow-y: scroll;
         
        }

        .itemContainerBotton {
          display: flex;
          justify-content: flex-end;
          margin: 0px 25px;
          height:50px;
          widht: 100%;
        }

        .itemContainerBotton__buttons--plus {
        background-color: ${COLOR_CELESTE};
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-color: ${COLOR_CELESTE};
				border-radius: 50%;
				font-size: 0.8em;
				width: 50px;
				height: 50px;
				outline:none;
        margin: 5px;
		  }
      

      .itemContainerBotton__buttons--plus:hover {
			  color: $(COLOR_GRIS_CLARO);
        box-shadow: 0px 0px 5px 4px rgba(49,141,255,0.28);
        transition: all 0.2s ease;
        transform: scale(1.1);
			}

      .itemContainerBotton__buttons--plusIcon {
        font-size: 25px;
        color: #25233C;
        
      }

        
          
        `} </style>

            </React.Fragment>  
        );
}

export default UserManagerLayout;