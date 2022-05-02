import React  from "react";
import Simple_Search from "../Principal/Simple_Search";
import Container_Section from "../Principal/Container_Section";
import ResultsCard from './ResultsCard';
import StepbyStep from './StepbyStep'
import { COLOR_AZUL_OSCURO, COLOR_VERDE_CLARO} from '../../lib/util/Colors';
import Step from "./Step";


const ProcessLayout = ()=> {
return(
  <React.Fragment>

  <Simple_Search
   Query='Consulta aquí la información detallada para llevar a cabo los siguientes procesos internos según su área.' 
   Typequery='Ingresa tema a buscar'
   TitleButton="Buscar"
   />

  <Container_Section title='Lista de Procesos'>
    <div className='button__container'> 
      <button className='button__addProcess'>Agregar Proceso</button> 		
    </div>
       <div className="container__processes">
         <div className="container__processes-results">
            <ResultsCard area="Comercial" tema="Crear una promoción" id="1"/>
            <ResultsCard area="Desarrollo" tema="Eliminar un dominio"id="2"/>
            <ResultsCard area="Marketing" tema="Cambiar banners" id="3"/>
            <ResultsCard area="Correo" tema="Cambiar una contraseña" id="4"/>
            <ResultsCard area="Comercial" tema="Crear una promoción" id="5"/>
            <ResultsCard area="Comercial" tema="Crear una promoción" id="6"/>
        </div>


         <div className="stepByStep__container">
           <StepbyStep title="Crear una Promoción">
             <Step title="Propuesta" content="Plantear propuesta en base a números del mes."/>
             <Step title="Aprobación" content="Enviar propuesta al correo CorreodeG@mi.com.co y esperar aprobación para aplicar promoción"/>
             <Step title="Áreas Afectadas" content="Informar a facturación, comercial, desarrollo y marketing en caso de ser necesario"/>
             <Step title="Propuesta" content="Plantear propuesta en base a números del mes."/>
             <Step title="Aprobación" content="Enviar propuesta al correo CorreodeG@mi.com.co y esperar aprobación para aplicar promoción"/>
             <Step title="Áreas Afectadas" content="Informar a facturación, comercial, desarrollo y marketing en caso de ser necesario"/>
             <Step title="Propuesta" content="Plantear propuesta en base a números del mes."/>
             <Step title="Aprobación" content="Enviar propuesta al correo CorreodeG@mi.com.co y esperar aprobación para aplicar promoción"/>
             <Step title="Áreas Afectadas" content="Informar a facturación, comercial, desarrollo y marketing en caso de ser necesario"/>
          

           </StepbyStep>
         </div>
         
         
         
         
      </div>              
  </Container_Section>

  <style jsx> {`

    .button__container {
      width: 175px;
      height: 35px;
    }

   .button__addProcess   {
      background-color: ${COLOR_VERDE_CLARO};
      border-color: ${COLOR_VERDE_CLARO};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      color: ${COLOR_AZUL_OSCURO};
			font-size: 1.1rem;
			font-weight: bold;
      margin-top: 15px;
      height: 100%;
      outline: none;
      width: 100%;
		}
    .container__processes {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .container__processes-results {
      height: 90vh;
      width: 40%;
      min-width: 350px;
      overflow-y: scroll;
      margin-top: 20px;
      margin-left: 20px;
    }
    .stepByStep__container {
      width: 56%;
      height: 85vh;
    }
  `}
  </style>

  </React.Fragment> 
  
)
}
export default ProcessLayout;
