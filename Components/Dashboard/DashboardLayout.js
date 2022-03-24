import React, { useState} from 'react';
import DashboardHeader from './DashboardHeader';
import Container_Section from './../Principal/Container_Section';
import TabNav from '../../lib/util/TabNav/TabNav';
import Tab from './../../lib/util/TabNav/Tab';
import CardServices from './CardServices';

const DashboardLayout = () => {

  const [selected, setSelected] = useState('Resumen día');
  const [reportSelected, setReportSelected] = useState('Resumen día');

  return(
    <React.Fragment>

      <div className="dashboard__container">
        <DashboardHeader/>

        <Container_Section title="Servicios">
          <div></div>
          <div className="servicesContainer">
          <TabNav   tabs={['Resumen día', 'Mes', 'Historial']} selected={ selected }  setSelected={setSelected} >
          <Tab  isSelected={ selected === 'Resumen día'}>
            <div className="tabs__container">
            <CardServices 
            title="Total Servicios" 
            text1 ="Registros"
            text2 ="Renovación"
            text3 ="Cumplido"
            />
            <CardServices 
            title="Registros Hoy" 
            text1 ="Dominios"
            text2 ="Correos"
            text3 ="Hosting"
            />
            <CardServices title="Renovaciones Hoy" 
            text1 ="Dominios"
            text2 ="Correos"
            text3 ="Hosting"/>
            </div>

          </Tab>

          <Tab isSelected={ selected === 'Mes'} >
            <h1>Mes</h1>
          </Tab>

          <Tab isSelected={ selected === 'Historial'} >
            <h1>Historial</h1>
          </Tab>

        </TabNav>
          </div>
        </Container_Section>

        <Container_Section title="Reportes">
          <div></div>
          <div>
          <TabNav   tabs={['Resumen día', 'Mes', 'Historial']}  selected={ reportSelected }   setSelected={setReportSelected} >
          <Tab  isSelected={ reportSelected === 'Resumen día'} >
            <h1>Resumen día</h1>
          </Tab>
          <Tab
            isSelected={ reportSelected === 'Mes'}
          >
            <h1>Mes</h1>
          </Tab>
          <Tab
            isSelected={ reportSelected === 'Historial'}
          >
            <h1>Historial</h1>
          </Tab>
        </TabNav>
          </div>
        </Container_Section>


      </div>

      <style jsx>{`
      .dashboard__container {
       
        }
      .servicesContainer {
        margin: 15px;
      }
      .tabs__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }


       
    
      `}</style>

    </React.Fragment>
  );
}

export default DashboardLayout;