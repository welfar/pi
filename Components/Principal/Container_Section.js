import React  from "react";
import { COLOR_AZUL_OSCURO, COLOR_BLANCO } from '../../lib/util/Colors';

// En este componente se deben enviar el titulo de la sección y 2 hijos,
// 1 hijo en caso de que el contenedor tenga boton en la zona del encabezado
// si no lo tiene enviar un <div></div>, y el segundo hijo debe ser el contenido. 

const Container_Section = ({
    title,
    children,
    
}) =>{

        return(
            <React.Fragment>
            <div className="container__section">
                <div className="container__section--header">
                    <p  className="header__title">{title}</p>
                    <div className="header__button">{children[0]}</div>
                </div>
                <div className="container__section--line"></div>
                <div>{children[1]}</div>
            </div>

        <style jsx>{`

            .container__section{
               background: ${COLOR_BLANCO};
               border-radius: 10px;
               margin: 0;
               margin-top: 18px;
               padding-bottom: 14px;
               width: 100%;
            }

            .container__section--header{
                margin-top: 20px;
                padding: 5px;
                width: 97%;
                height: 5%;
                text-align: left;
                display: flex;
                flex-direction: row;
            }

            .container__section--line{
                background: #B0B0B0; 
                width: 97%;
                height: 1px;
                align-self: center;
                margin: 0px 17px 0px 15px;
            }
            
            .header__title{
                flex: 8;
                margin-left: 42px;
                padding-top: 15px;
                width: 85%;
                text-align: left;
                font-weight: 900;
                font-size: 23px;
                line-height: 33px;
                color: ${COLOR_AZUL_OSCURO};
            }

            .header__button {
                flex:2;
                height: 78%;
                //border: 1px solid red;
            }


        `}</style>

        </React.Fragment>
        );
}

export default Container_Section;
