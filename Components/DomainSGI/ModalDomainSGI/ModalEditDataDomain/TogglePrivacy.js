import React from 'react';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../../../lib/util/Colors';

export default function TogglePrivacy ({ toggledPrivacy, onclick}) {

    return(
      <React.Fragment> 
          <div onClick={onclick} className={`toggledPrivacy${toggledPrivacy ? " night" : " "}`}>
            <div className="notch"></div>
          </div>
          
        <style jsx>{`

          .toggledPrivacy {
            height: 34px;
            width: 60px;
            border-radius: 50px;
            background: #9fa0a4;
            position: relative; 
            cursor: pointer;
          }

          .toggledPrivacy.night {
            background: ${COLOR_AZUL_CLARO};
          }

          .notch {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: whitesmoke;
            position: absolute;
            top: 2px;
            left: 3px;
            box-shadow: 0 0 5px whitesmoke;
            z.index: 1;
          }

          .night > .notch {
            background: whitesmoke;
            box-shadow: 0 0 5px whitesmoke;
            transform: translate(25px, 0);
          }

        `} </style>

        </React.Fragment> 
        );
}