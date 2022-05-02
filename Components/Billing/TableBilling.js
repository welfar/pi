import React from 'react';
import DataTable from 'react-data-table-component';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_CELESTE, COLOR_GRIS, COLOR_GRIS_CLARO, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_ROJO } from '../../lib/util/Colors';


/** Estilos  */
const customStyles = {
  rows: {    
    style: {    
      minHeight: '50px',
    },

  },
  headCells: { 

        style: {
          backgroundColor: COLOR_AZUL_OSCURO,
          color: COLOR_BLANCO,
          fontSize: '13px',
          textAlign: 'Left',
          '&:not(:last-of-type)': {
            borderRightStyle: 'solid',
            borderRightWidth: '0.5px',
            borderRightColor: COLOR_GRIS_OSCURO,
          },
    },
    activeSortStyle: {
      color: COLOR_AZUL_CLARO,
      '&:focus': {
        outline: 'none',
      },
    },
    inactiveSortStyle: {
      '&:focus': {
        outline: 'none',
        color: COLOR_BLANCO,
      },
      '&:hover': {
        color: COLOR_AZUL_CLARO,
      },
  },
},
  cells: {
    style: {
      paddingLeft: '5px',
      paddingRight: '5px',
      backgroundColor: COLOR_GRIS_CLARO,

      '&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '0.5px',
				borderRightColor: COLOR_GRIS,
			},
    },
    },  

    pagination: {
      style: {
      
        color: COLOR_AZUL_OSCURO,
        fontSize: '12px',
        minHeight: '40px',
        backgroundColor: COLOR_GRIS_CLARO,
      },
      pageButtonsStyle: {
        borderRadius: '50%',
        height: '33px',
        width: '33px',
        padding: '5px',
        cursor: 'pointer',
        transition: '0.4s',
        color: COLOR_AZUL_CLARO,
        fill: COLOR_AZUL_CLARO,
        backgroundColor: COLOR_GRIS_CLARO,
        '&:disabled': {
          cursor: 'unset',
          color: COLOR_GRIS_OSCURO,
          fill: COLOR_GRIS_OSCURO,
        },
        '&:hover:not(:disabled)': {
          backgroundColor: COLOR_CELESTE,
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: COLOR_CELESTE,
        },
      },
    },
};



const data = [
  {
    "action" : "Modificar",
    "customerData" : "Datos del cliente",
    "idPurchase" :"192950",
     "idCustomer" : "192950",
    "idService" : "125638",
    "product" : "Correo",
    "description": "RENOVACION 3 CUENTAS DE CORREO MICOMCO PARA EL DOMINIO efectowow.com.co",
    "subtotal" : "189075.63",
    "iva" : "35924.37",
    "total": "225000",
    "status": "Ejecutado",
    "creationDate" : "10/02/2020",
    "approvalDate": "10/02/2020",
    "executionDate": "10/02/2020",
},
{
  "action" : "Modificar",
  "customerData" : "Datos del cliente",
  "idPurchase" :"192950",
   "idCustomer" : "192950",
  "idService" : "125638",
  "product" : "Correo",
  "description": "RENOVACION 3 CUENTAS DE CORREO MICOMCO PARA EL DOMINIO efectowow.com.co",
  "subtotal" : "189075.63",
  "iva" : "35924.37",
  "total": "225000",
  "status": "Ejecutado",
  "creationDate" : "10/02/2020",
  "approvalDate": "10/02/2020",
  "executionDate": "10/02/2020",
},
{
  "action" : "Modificar",
  "customerData" : "Datos del cliente",
  "idPurchase" :"192950",
   "idCustomer" : "192950",
  "idService" : "125638",
  "product" : "Correo",
  "description": "RENOVACION 3 CUENTAS DE CORREO MICOMCO PARA EL DOMINIO efectowow.com.co",
  "subtotal" : "189075.63",
  "iva" : "35924.37",
  "total": "225000",
  "status": "Ejecutado",
  "creationDate" : "10/02/2020",
  "approvalDate": "10/02/2020",
  "executionDate": "10/02/2020",
},

];

const TableBilling = () =>{

  const columns = [
    {
        name: 'Acción',
        selector: row => row.action,
        width: '70px',
        center: false,
    },
    {
        name: 'Data Cliente ',
        selector: row => row.costumerData,
        width: '105px',
        center: false,
    },
    {
      name: 'ID. Compra',
      selector: row => row.idPurchase,
      width: '100px',
      center: true,
  },
  {
    name: 'ID. Cliente',
    selector: row => row.idCustomer,
    width: '100px',
    center: true,
  },
  {
    name: 'ID. Servicio',
    selector: row => row.idService,
    width: '100px',
    center: true,
  },
  {
    name: 'Producto',
    selector: row => row.product,
    center: true,
    width: '110px',
  },
  {
    name: 'Descripción',
    selector: row => row.description,
    center: true,
    width: '200px',
  },
  {
    name: 'Subtotal',
    selector: row => row.subtotal,
    center: true,
    width: '100px',
  },
  {
    name: 'Iva',
    selector: row => row.iva,
    center: true,
    width: '100px',
  },
  {
    name: 'Total',
    selector: row => row.total,
    center: true,
    width: '100px',
  },
  {
    name: 'Estado',
    selector: row => row.status,
    center: true,
    width: '110px',
  },
  
  {
    name: 'Fecha Creación',
    selector: row => row.creationDate,
    center: true,
    width: '140px',
  },
  
  {
    name: 'Fecha Aprobación',
    selector: row => row.approvalDate,
    center: true,
    width: '140px',
  },
  {
    name: 'Fecha Ejecución',
    selector: row => row.executionDate,
    center: false,
    width: '140px',
  },

  
  ];

  return(
    <React.Fragment>
      <div className='table__containter'>   
        <DataTable     
        columns={columns}    
        data={data} 
        highlightOnHover={true} 
        pointerOnHover={true} 
        pagination={true}
        paginationPerPage ='5'
        paginationRowsPerPageOptions={[5, 10, 20, 30, 50]}
        noHeader={true}
        customStyles= {customStyles}
        />
      </div>
      <br/>

      <style jsx> {`
        .table__containter {
        box-shadow: -1px 2px 9px -2px rgba(32,60,83,0.67);
        margin: 0px;
        padding: 0;
        width: 100%;
        }
        `}</style>
    </React.Fragment>
  );
}
export default TableBilling;