import React from 'react';
import Simple_Search from '../Principal/Simple_Search';
import Container_Section from '../Principal/Container_Section';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';
import { Component } from 'react';

class SupportLayout extends Component{
    render(){
        return(
            <React.Fragment> 
                <Simple_Search
                  Query="Ingrese el dato del producto que quiere buscar en Tickets."
                  Typequery="Búsqueda por dominio, idCliente, correo...."
                  TitleButton="Buscar"
                />
          
        <style jsx>{`
        `}</style>
        
            </React.Fragment>  
        );
    }
}

export default SupportLayout;