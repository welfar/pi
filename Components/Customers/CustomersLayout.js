import React, {useState} from 'react';
import Simple_Search from '../Principal/Simple_Search';
import ServicesContainer from './ServicesContainer';
import Container_Section from './../Principal/Container_Section';
import CustomerData from './CustomerData';
import ItemDomains from './ItemDomains';
import ItemServices from './ItemsServices';
import ItemTransDomain from './ItemTransDomain';
import {FaExchangeAlt} from 'react-icons/fa';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO } from '../../lib/util/Colors';
import ItemTransServices from './ItemTransServices';


const CustomersLayout = () =>{

  const [transactionsDomain, setTransactionsDomain] = useState (false);
  const [transactionsServices, setTransactionServices] = useState (false);

  const btnTransactionsDomains =()=>{
    setTransactionsDomain (!transactionsDomain);
  }

  const btnTransactionsServices = () =>{
    setTransactionServices(!transactionsServices);
  }
  return(
    <>
    <Simple_Search Query="Consulta aquí los datos de Cliente: " Typequery="Ingresa correo de usuario o dominio..." TitleButton="Buscar"/>

    <Container_Section title="Datos del Cliente">
      <div></div>
      <div>   <CustomerData/>    </div>
      
    </Container_Section>

    <div className="products__container">

    {transactionsDomain 
    ? <div className="products__domain">
    <ServicesContainer title="Transacciones Dominios">
      <div>
        <ItemTransDomain/>
        <ItemTransDomain/>
        <ItemTransDomain/>

      </div>
  <div  className="button__container">
    <p className="textTransactions">    
    Dominios     
    </p>
    <button onClick={btnTransactionsDomains} className="button__transactions"> 
      <FaExchangeAlt/>
    </button>
  </div>
  </ServicesContainer>
  </div> 
  : <div className="products__domain">
  <ServicesContainer title="Dominios">
    <div>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
      <ItemDomains/>
    </div>
<div  className="button__container">
  <p className="textTransactions">    
  Transacciones      
  </p>
  <button onClick={btnTransactionsDomains} className="button__transactions"> 
    <FaExchangeAlt/>
  </button>
</div>
</ServicesContainer>
</div>} 


{transactionsServices
?<div className="products__services">
<ServicesContainer title="Transacciones Servicios">
  <div>
    <ItemTransServices/>
    <ItemTransServices/>
    <ItemTransServices/>
    <ItemTransServices/>
    <ItemTransServices/>
    
  </div>
  <div  className="button__container">
    <p className="textTransactions">Servicios</p>
    <button onClick={btnTransactionsServices} className="button__transactions"> 
      <FaExchangeAlt/>
    </button>
  </div>
</ServicesContainer>
</div>
: <div className="products__services">
    <ServicesContainer title="Servicios">
      <div>
        <ItemServices/>
        <ItemServices/>
        <ItemServices/>
        <ItemServices/>
        <ItemServices/>
        <ItemServices/>
      </div>
      <div  className="button__container">
        <p className="textTransactions">Transacciones</p>
        <button onClick={btnTransactionsServices} className="button__transactions"> 
          <FaExchangeAlt/>
        </button>
      </div>
    </ServicesContainer>
</div>
}



    </div>
    
    <style jsx>{`

      .products__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .products__domain {
        width: 48%;
      }
      .products__services {
        width: 48%;
      }

      .button__container {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }

      .textTransactions {
        margin-top: 12px;
        padding-right: 10px;
        font-size: 16px;
        color: ${COLOR_AZUL_OSCURO};
        font-weight: bold;
      }

      .button__transactions {
        width :54px;
        height: 54px;
        border-radius: 50%;
        background-color: ${COLOR_AZUL_CLARO};
        border-color: ${COLOR_AZUL_CLARO};
        font-size: 25px;
        color: ${COLOR_BLANCO};
        outline:none;
      }
    
      
      `}</style>
    
    
    
    </>
  );
}

export default CustomersLayout;