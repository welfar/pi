import React from 'react';
import {COLOR_GRIS_CLARO } from '../../lib/util/Colors';


const PriceContainer = ({
    tittle,
    children
}) => {
    return(
        <React.Fragment>
            <div className = 'card__price'>
                <h3 className= 'card__price--title'>
                    <p>{tittle}</p>
                    <hr/>
                </h3>
                <div className='card__price--content'>
                {children}
                </div>
               
            </div>

            <style jsx>{`

                .card__price {

                    background-color: ${COLOR_GRIS_CLARO};
                    border-radius: 30px;
                    display: flex;
                    flex-direction: column;
                    min-height: 20%;                   
                    padding-bottom: 20px;
                    text-align: center;
                    width: 30%;
                    margin: 0 3% 0 3%;                    
                }

                .card__price--title {
                    
                    font-weight: bold;
                    font-size: 18px;
                    padding-top: 5%;
                    color: #25233C;
                }

                hr {

                    background-color: gray;
                    height: 0.1px;
                    margin: 0 auto;
                    opacity: 40%;
                    width: 80%;
                }

                .card__price--content {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                }
                              
                `}</style>
        
        </React.Fragment>
        );
}

export default PriceContainer;


  
    
