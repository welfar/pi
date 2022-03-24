import React, { Component } from "react";
import {BsCircleFill} from "react-icons/bs";
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_CELESTE, COLOR_GRIS_CLARO, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';

const Table_Carousel = ({
    Product,
    Idservice
}) =>{

        return(
            <React.Fragment>
                <div className="container__card">
                    <div className="container__card--header">
                        <div className="header__title">
                            <h4>{Product}</h4>
                        </div>
                        <div className="header_id">
                            <h6 className="header__id--type">
                                {Idservice}
                            </h6>  
                            <div className="header-id--icon"> 
                                <BsCircleFill/>
                            </div>
                        </div>
                    </div>
                    <div className="container__card--data">
                        <div className="Flat_data">
                            <ul>
                                <li>
                                    Nombre de usuario:
                                </li>
                                <li>
                                    Primer pago:
                                </li>
                                <li>
                                    Pago de renovacion:
                                </li>
                                <li>
                                    Fecha de registro:
                                </li>
                                <li>
                                    Fecha de vencimiento:
                                </li>
                                <li>
                                    Cantidad:
                                </li>
                                <li>
                                    Capacidad:
                                </li>
                                <li>
                                    Descripcion:
                                </li>
                            </ul>
                        </div>
                        <div className="real_data">
                        <ul>
                                <li>
                                    pepe@gmail.com
                                </li>
                                <li>
                                    $2.999.999
                                </li>
                                <li>
                                    $50.000
                                </li>
                                <li>
                                    15/06/2021
                                </li>
                                <li>
                                    15/06/2021
                                </li>
                                <li>
                                    2
                                </li>
                                <li>
                                    25GB
                                </li>
                                <li>
                                    servicio de correo
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Button_Carousel">
                        <div className="button__container">
                            <button className='button'>Hist. Cambios</button>
                        </div>
                        <div className="button__container--editar">
                            <button className='button--edit'>Editar</button>
                        </div>
                    </div>
                </div>
                
        <style jsx>{`

            .container__card{
                background: ${COLOR_GRIS_CLARO};
                border-radius: 20px;
                height: 60%;
                width: 65%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: 640px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
                margin-bottom: 10px;
            }
        

            .container__card--header{
                background: ${COLOR_AZUL_OSCURO};
                display: flex;
                flex-direction: row;
                height: 40%;
                width: 100%;
                align-items: center;
                border-radius: 20px 20px 0px 0px;
            }


            .header__title{
                text-align: center;
                padding-top: 15px;
                padding-left: 120px;
                color: white;
                flex: 6;
                margin-bottom: 8px;
            }

            .header_id{
                color: white;
                flex: 4;
                display:flex;
                flex-direction: row;
            }
            .header__id--type {
                font-size: 14px;
                margin: 3px 10px 15px 50px;
            }

            .header-id--icon {
                font-size: 10px;
                color: #1EFD42;
            }

            .container__card--data{
                display: flex;
                flex-direction: row; 
                height: 40%;
                width: 100%;
            }

            .Flat_data{
                flex: 6;
                text-align: left;
                padding: 2%;
                font-size: 20px;
                font-weight: 400;
                line-height: 34px; 
                
            }

            .Flat_data ul{
                list-style: none;
            }

            .real_data{
                flex: 4;
                text-align: left;
                padding: 2%;
                font-size: 15px;
                font-weight: 300;
                line-height: 34px; 
            }

            .real_data ul{
                list-style: none;
            }

            .Button_Carousel{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                width: 100%;
                height: 60px; 
                align-items: center;
                border-radius: 0px 0px 20px 20px;
                padding: 5px;
                margin-bottom: 10px;
            }

            .button__container{
                width: 20%;
                height: 35px; 
                margin-left: 7%;
                margin-right: 70px;
               
            }
            

            .button__container--editar{
                width: 15%;
                height: 35px; 
                margin-left: 28%;
            }

            .button {
				background-color: ${COLOR_AZUL_OSCURO};
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-color: ${COLOR_AZUL_OSCURO};
				border-radius: 10px;
				color: ${COLOR_BLANCO};
				font-size: 0.8em;
				font-weight: bold;
				width: 100%;
				height: 100%;
				outline:none;
				text-transform: capitalize;
		    }

            .button:hover {
			  color: $(COLOR_GRIS_CLARO);
              box-shadow: 0px 0px 5px 4px rgba(49,141,255,0.28);
              transition: all 0.2s ease;
			}

            .button--edit {
				background-color: ${COLOR_CELESTE};
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-color: ${COLOR_CELESTE};
				border-radius: 10px;
				color: ${COLOR_AZUL_OSCURO};
				font-size: 0.8em;
				font-weight: bold;
				width: 100%;
				height: 100%;
				outline:none;
				text-transform: capitalize;
		    }

            .button-edit:hover {
			  color: $(COLOR_GRIS_CLARO);
              box-shadow: 0px 0px 5px 4px rgba(49,141,255,0.28);
              transition: all 0.2s ease;
			}

           .prueba{
               margin-top: 15px;
           }
           
           @media only screen and (max-width: 1400px) and (min-width:1302px) {

            .container__card{
                background: ${COLOR_GRIS_CLARO};
                border-radius: 20px;
                height: 60%;
                width: 65%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: 540px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
                margin-bottom: 10px;
            }

            .header__title{
                text-align: center;
                padding-top: 15px;
                padding-left: 120px;
                color: white;
                flex: 5;
                margin-bottom: 8px;
            }

            .header_id{
                color: white;
                flex: 5;
                display:flex;
                flex-direction: row;
            }

        }


        @media (max-width: 800px) {

            .container__card{
                background: ${COLOR_GRIS_CLARO};
                border-radius: 20px;
                height: 60%;
                width: 65%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: 540px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
                margin-bottom: 10px;
            }

            .header__title{
                text-align: center;
                padding-top: 15px;
                padding-left: 120px;
                color: white;
                flex: 5;
                margin-bottom: 8px;
            }

            .header_id{
                color: white;
                flex: 5;
                display:flex;
                flex-direction: row;
            }

            .Flat_data{
                flex: 6;
                text-align: left;
                padding: 2%;
                font-size: 15px;
                font-weight: 400;
                line-height: 34px; 
                
            }

            .real_data{
                flex: 4;
                text-align: left;
                padding: 2%;
                font-size: 13px;
                font-weight: 300;
                line-height: 34px; 
            }

        }


        @media (max-width: 425px) {

            .container__card{
                background: ${COLOR_GRIS_CLARO};
                border-radius: 20px;
                height: 30%;
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: 270px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 25);
                margin-bottom: 10px;
            }

            .header__title{
                text-align: center;
                padding-top: 15px;
                padding-left: 120px;
                color: white;
                flex: 5;
                margin-bottom: 8px;
            }

            .header_id{
                color: white;
                flex: 5;
                display:flex;
                flex-direction: row;
            }

            .Flat_data{
                flex: 3;
                text-align: left;
                padding: 0%;
                font-size: 8px;
                font-weight: 400;
                line-height: 34px; 
                
            }


            .real_data{
                flex: 4;
                text-align: left;
                padding: 0%;
                font-size: 9px;
                font-weight: 300;
                line-height: 33px; 
            }

        }


                      
        `}</style>

        </React.Fragment>
        );
}


export default Table_Carousel;