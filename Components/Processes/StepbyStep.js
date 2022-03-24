import React from 'react';
import { Chrono } from 'react-chrono';
import { COLOR_AZUL_OSCURO} from '../../lib/util/Colors';

const StepbyStep = ( {
  title,
  children,
})=> {
  return (
    <React.Fragment>

      <div className="stepContainer">

        <div className="stepContainer__title">{title}</div>
      <Chrono 
        mode="VERTICAL_ALTERNATING" 
        allowDynamicUpdate="true"
        cardHeight= "100"

         theme={{
          primary: '#25233C',
          secondary: '#0096FF',
          cardBgColor: "#EAEDF7",
          cardForeColor: '#25233C',
          titleColor: '#EAEDF7',
        }}
        >
            {children}
        </Chrono>
      </div>

      <style jsx> 
        {`

        .stepContainer {
          height: 95%;
        }

        .stepContainer__title {
          color: ${COLOR_AZUL_OSCURO};
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 25px;
          margin-top: 30px;
          text-align: center;          
        }        
        `} 
        </style>
      
    </React.Fragment>
  )
}
export default StepbyStep;
