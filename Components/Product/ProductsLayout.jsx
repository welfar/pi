import React from 'react';
import Simple_Search from '../Principal/Simple_Search';
import Container_Section from '../Principal/Container_Section';
import Carousel from './Carousel';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';
import {FiPhoneCall} from "react-icons/fi";
import Domain_Data from './Domain_Data';
import { Component } from 'react';

class Products extends Component{
    render(){
        return(
            <React.Fragment> 
                <Simple_Search
                    Query="Consulta aquí los productos de un dominio."
                    Typequery="Buscar Producto"
                    TitleButton="Buscar"
                />
                <Container_Section
                    title="Datos del dominio"
                >
                    <div></div>
                    <div>
                        <Domain_Data
                            Namedomain="Pah.com.co"
                            Iddomain="#1234568"
                        />
                    </div>
                </Container_Section>
                <Container_Section
                    title="Productos del Dominio"
                >
                    <div>
                        <button className ="button__container">
                            <div className="button__container--icon"> <FiPhoneCall/>  </div> 
                             <p className="button__container--title"> Celular no válidado</p>
                        </button>  
                    </div>
                    <div>
                        <Carousel/>
                    </div>
                </Container_Section>


        <style jsx>{`
            .button__container {
				background-color: ${COLOR_ROJO};
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
				border-color:${COLOR_BLANCO};
				border-radius: 10px;
				color: ${COLOR_BLANCO};
				font-weight: bold;
				width: 100%;
				height: 40px;
				outline:none;
				text-transform: capitalize;
                display: flex;
                flex-direction: row;
                margin-top: 10px;
		    }

            .button__container--icon {
                flex: 3;
                color: white;
                font-size: 20px;
            }
           
            .button__container--title {
                flex: 7;
                color: white;
                font-size: 15px;
                margin-top: 5px;
                line-height: 25px;
                padding-right: 15px;
            }

            .button:hover {
			  color: $(COLOR_ROJO);
              box-shadow: 0px 0px 5px 4px rgba(49,141,255,0.25);
              transition: all 0.2s ease;
			}

            @media only screen and (max-width: 1400px) and (min-width:1302px){
            
                .button__container--icon {
                    flex: 2;
                    color: white;
                    font-size: 20px;
                }
           
                .button__container--title {
                    flex: 8;
                    color: white;
                    font-size: 15px;
                    margin-top: 5px;
                    line-height: 25px;
                    padding-right: 15px;

                }

            }
        `}</style>
        
            </React.Fragment>  
        );
    }
}

export default Products;