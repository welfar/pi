import React, {useState} from 'react';
import { COLOR_AZUL_OSCURO, COLOR_GRIS_CLARO, COLOR_BLANCO,COLOR_AZUL_CLARO} from '../../lib/util/Colors';
import {FaAngleRight} from 'react-icons/fa';


const ProcessLayout = (
  {
    area,
    tema,
    id,
  }) => {

   const  [toogle, setToogle] = useState(false)

    const showProcess = () =>{
      setToogle (!toogle);
      console.log(id, toogle);
    }
  return(

    <React.Fragment>

      <div className="card__container"> 
        <div>
            <p  className="card__container--text">  <strong> Área : </strong>  {area}  </p>
            <p  className="card__container--text">
              <strong>Tema : </strong> 
              {tema}
            </p>
        </div>
      
      <button className="card__button" onClick={showProcess}>  
      <div className="card__button--icon">  <FaAngleRight/>     </div>
       
      </button>
        
      </div>

    <style jsx>{`

      .card__container {
        width: 85%;
        border-radius: 10px;
        background-color: ${COLOR_GRIS_CLARO};
        margin: 15px auto;
        padding-top: 10px;
        padding-bottom: 8px;
        color: ${COLOR_AZUL_OSCURO};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .card__container--text {
        padding: 0 15px;
      }

      .card__button {
        align-self: center;
        border-color: ${COLOR_AZUL_OSCURO};
        margin-right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${COLOR_AZUL_OSCURO};
        outline: none;
      }
      .card__button--icon {
        color: ${COLOR_BLANCO};
        justify-content: center;
        align-self: center;
      }

      .card__button:active {
        box-shadow: 0 0 5px ${COLOR_AZUL_CLARO};
      }



      }
      `}</style>

    </React.Fragment>
    );
}

export default ProcessLayout;