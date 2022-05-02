import React from 'react';
import DataTable from 'react-data-table-component';
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_CELESTE, COLOR_GRIS_CLARO } from '../../lib/util/Colors';

/** Tabla de códigos de promoción */

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

const TableProm = () =>{

  
  const columns = [
    {
        name: 'Estado',
        selector: row => row.status,
        width: '10%',
        sortable: true,
        center: true,

    },
    {
        name: 'Código',
        selector: row => row.code,
        sortable: true,
        width: '10%',
        center: true,
    },
    {
      name: 'Descripción',
      selector: row => row.description,
      grow: 4,
      center: true,
  },
  {
    name: 'Responsable',
    selector: row => row.admin,
    sortable: true,
    width: '14%',
    center: true,
},
{
  name: 'Fecha de Inicio',
  selector: row => row.dateStart,
  sortable: true,
  width: '10%',
  center: true,
},
{
  name: 'Fecha de Fin',
  selector: row => row.dateEnd,
  sortable: true,
  width: '10%',
  center: true,
},
];

/** Data de prueba */
const data = [
  {
      status: 'Active',
      code: 'PROMO1',
      description: 'Promoción por el dia de la madre 15 % de descuento en correo',
      admin: 'Comercial - Desarrollo',
      dateStart: '15 May 2021',
      dateEnd: '25 Jun 2021'
  },
  {
    status: 'Cancelado',
    code: 'PROMO1',
    description: 'Promoción por el dia de la madre 15 % de descuento en correo',
    admin: 'micomco - Desarrollo',
    dateStart: '15 May 2021',
    dateEnd: '26 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO1',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'pedro - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '25 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO21',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'pepe - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '25 Jun 2021'
},

{
  status: 'Pendiente',
  code: 'PROMO13',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Gustavo - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '25 Jun 2021'
},

{
  status: 'Cancelado',
  code: 'PROMO14',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Andrea - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '25 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO1',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Duvan - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '24 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO1',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Camila - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '25 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO1',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Nina - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '25 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO1',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Gustavo - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '22 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO1',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Administrativo - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '25 Jun 2021'
},

{
  status: 'Active',
  code: 'PROMO1',
  description: 'Promoción por el dia de la madre 15 % de descuento en correo',
  admin: 'Gustavo - Desarrollo',
  dateStart: '15 May 2021',
  dateEnd: '15 Jun 2021'
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

          margin: 10px auto;
          width: 95%;
        }
        
        
        
        `}</style>
     



    </React.Fragment>

    




  );
}
export default TableProm;