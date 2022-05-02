import React, { Component } from "react";
import Simple_Search from '../Principal/Simple_Search';
import Container_Section from '../Principal/Container_Section';
import Newcontainer from "./New_Mail";
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';

const Admin = ({
    

}) =>{

        return(
        <React.Fragment>
             <Simple_Search
                    Query="Consulta aquí la información del servicio de correo de un dominio."
                    Typequery="Ingresa dominio...."
                    TitleButton="Buscar"
                />

                <Container_Section
                    title="Registrar Correo Nuevo"
                >
                    <div></div>
                    <div><Newcontainer></Newcontainer></div>
               </Container_Section>
        </React.Fragment>
        );
}


export default Admin;