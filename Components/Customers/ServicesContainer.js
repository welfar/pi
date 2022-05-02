import React  from "react";
import { COLOR_AZUL_OSCURO, COLOR_BLANCO } from '../../lib/util/Colors';


const ServicesContainer = ({
    title,
    children,
    
}) =>{

        return(
            <React.Fragment>
            <div className="container__section">
                <div className="container__section--header">
                    <p  className="header__title">{title}</p>
                </div>
                <div className="container__section--line"></div>
                <div className="container__content">{children[0]}</div>
                <div className="button__transations">
                {children[1]}
                </div>
            </div>

        <style jsx>{`
          

            .container__section{
                display: flex;
                flex-direction: column;
               background: ${COLOR_BLANCO};
               border-radius: 10px;
               margin: 0;
               margin-top: 18px;
               padding-bottom: 14px;
               width: 100%;
               height: 690px;
              
  
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
                width: 87%;
                height: 1px;
                margin: 45px 10px 5px 25px;
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

            .container__content {
              width: 87%;
              height: 500px;
              margin: 20px auto;
              overflow-y: scroll;
              
            }

            .button__transations {
                height: 55px;
                width: 170px;
                margin-right: 43px;
                align-self: flex-end;
            }

        `}</style>

        </React.Fragment>
        );
}

export default ServicesContainer;
