import React from 'react';
import { COLOR_AZUL_OSCURO, COLOR_GRIS_CLARO,COLOR_GRIS_OSCURO } from '../../lib/util/Colors';
import {FaRecycle, FaChartLine , FaEdit, FaGlobeAmericas, FaEnvelopeOpenText, FaServer} from 'react-icons/fa';



const CardServices = ({
  title,
  text1,
  text2,
  text3,
  numberRegistered
}) => {
  return(
    <React.Fragment>
      <div className="cardContainer">
        <p className="card__title">{title}</p>

        <div className="card__content">
          
          <div className="card__content--up">
            <div className="card__content--upitem">
              <div className="icon">
                { text1 === "Registros"
                ? <FaEdit/>  
                : text1==="Dominios"
                ? <FaGlobeAmericas/>
                : null  }
              </div>
              <p className="type">{text1}</p>
            </div>

            <div className="card__content--upitem">
              <p className="date">   Hoy   </p>
              <p className="number">  {numberRegistered}   </p>
            </div>
          </div>

          <div className="line"></div>
          <div className="card__content--down">
            <p className="date">   Ayer  </p>
            <p className="number">  {numberRegistered}   </p>
          </div>
        </div>

        <div className="card__content">
          
          <div className="card__content--up">
            <div className="card__content--upitem">
            <div className="icon">
              { text2 === "Renovación"
                ? <FaRecycle/>  
                : text2 === "Correos"
                ? <FaEnvelopeOpenText/>
                : null }
                 </div>
              <p className="type">{text2}</p>
            </div>

            <div className="card__content--upitem">
              <p className="date">   Hoy   </p>
              <p className="number">  {numberRegistered}   </p>
            </div>
          </div>

          <div className="line"></div>
          <div className="card__content--down">
            <p className="date">   Ayer  </p>
            <p className="number">  {numberRegistered}   </p>
          </div>
        </div>
        
        <div className="card__content">
          
          <div className="card__content--up">
            <div className="card__content--upitem">
              <div className="icon">
              { text3 === "Cumplido"
                ? <FaChartLine/> 
                :   text3 === "Hosting" 
                ? <FaServer/> 
                : null }
                 </div>
              <p className="type">{text3}</p>
            </div>

            <div className="card__content--upitem">
              <p className="date">   Hoy   </p>
              <p className="number">  {numberRegistered}   </p>
            </div>
          </div>

          <div className="line"></div>
          <div className="card__content--down">
            <p className="date">   Ayer  </p>
            <p className="number">  {numberRegistered}   </p>
          </div>
        </div>
        

      </div>

    <style jsx>{`

      .cardContainer {
        height: 280px;
        width: 28%;
        background-color: ${COLOR_GRIS_CLARO};
        border-radius: 15px;
        padding: 20px 30px;
        color: ${COLOR_AZUL_OSCURO};
      }
      .card__title {

        font-size: 18px;
        font-weight: bold;
      }

      .card__content {
        display: flex;
        flex-direction: column;

      }
      .card__content--up {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }

      .card__content--upitem {
        display: flex;
        flex-direction:row;
      }
      .card__content--upitem p {
        padding-top: 5px;
        font-size: 1rem;
        margin: 0px;
      }
      .icon {
        font-size: 1.2rem;
        padding-right: 8px;
      }

      .date {
        padding-right: 8px;
      }

      .number {
        padding-right: 8px;
      }

      .line {
        height: 1px;
        width: 100%;
        margin: 0px auto;
        background-color: ${COLOR_GRIS_OSCURO};
      }

      .card__content--down {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
      }
      `}
    </style>

    </React.Fragment>
  );
}

export default CardServices;