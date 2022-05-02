import React from 'react';
import DataTable from 'react-data-table-component';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_CELESTE, COLOR_GRIS_CLARO } from '../../lib/util/Colors';

/** Tabla de proximos precios para Hosting */

/** Estilos  */
const customStyles = {
  rows: {    
    style: {    minHeight: '50px',  } 
  },
  headCells: { 
        style: {
          backgroundColor: COLOR_AZUL_OSCURO,
          color: COLOR_BLANCO,
          fontSize: '14px',
          textAlign: 'center',
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
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
      backgroundColor: COLOR_GRIS_CLARO,
    },
    },  

    pagination: {
      style: {
        color: COLOR_AZUL_CLARO,
        fontSize: '13px',
        minHeight: '50px',
        backgroundColor: COLOR_GRIS_CLARO,
      },
      pageButtonsStyle: {
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        padding: '8px',
        cursor: 'pointer',
        transition: '0.4s',
        color: COLOR_AZUL_CLARO,
        fill: COLOR_AZUL_CLARO,
        backgroundColor: COLOR_GRIS_CLARO,
        '&:disabled': {
          cursor: 'unset',
          color: COLOR_AZUL_OSCURO,
          fill: COLOR_AZUL_OSCURO,
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

const TableNextPricesHosting = () =>{

  
  const columns = [
    {
        name: 'Tipo de Servicio',
        selector: row => row.service,
        sortable: true,
        width: '20%',
        center: true,

    },
    {
        name: 'Precio',
        selector: row => row.price,
        sortable: true,
        width: '20%',
        center: true,
    },
    {
      name: 'Vigencia',
      selector: row => row.duration,
      center: true,
  },
  {
    name: 'Descripción',
    selector: row => row.description,
    width: '30%',
    center: true,
},

];

/** Data de prueba */
const data = [
  {
      service: 'Activación',
      price: '$1500',
      duration: '31 de agosto de 2021 - 2 de Septiempre de 2021',
      description: 'Subir métricas',
  },
  {
    service: 'Renovación',
    price: '$1500',
    duration: '31 de agosto de 2021 - 2 de Septiempre de 2021',
    description: 'Subir métricas',
},
{
  service: 'Activación',
  price: '$50000',
  duration: '31 de agosto de 2021 - 2 de Septiempre de 2021',
  description: 'Subir métricas',
},
{
  service: 'Ampliación',
  price: '$15.000',
  duration: '31 de agosto de 2021 - 2 de Septiempre de 2021',
  description: 'Subir métricas',
},
]

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
        customStyles= {customStyles}/>
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
export default TableNextPricesHosting;