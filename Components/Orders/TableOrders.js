import React from "react";
import DataTable from "react-data-table-component";
import {
  COLOR_AZUL_CLARO,
  COLOR_AZUL_OSCURO,
  COLOR_BLANCO,
  COLOR_CELESTE,
  COLOR_GRIS,
  COLOR_GRIS_CLARO,
  COLOR_GRIS_OSCURO,
  COLOR_NEGRO,
  COLOR_ROJO,
} from "../../lib/util/Colors";

/** Estilos  */
const customStyles = {
  rows: {
    style: {
      minHeight: "50px",
    },
  },
  headCells: {
    style: {
      backgroundColor: COLOR_AZUL_OSCURO,
      color: COLOR_BLANCO,
      fontSize: "13px",
      textAlign: "Left",
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "0.5px",
        borderRightColor: COLOR_GRIS_OSCURO,
      },
    },
    activeSortStyle: {
      color: COLOR_AZUL_CLARO,
      "&:focus": {
        outline: "none",
      },
    },
    inactiveSortStyle: {
      "&:focus": {
        outline: "none",
        color: COLOR_BLANCO,
      },
      "&:hover": {
        color: COLOR_AZUL_CLARO,
      },
    },
  },
  cells: {
    style: {
      paddingLeft: "5px",
      paddingRight: "5px",
      backgroundColor: COLOR_GRIS_CLARO,

      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "0.5px",
        borderRightColor: COLOR_GRIS,
      },
    },
  },

  pagination: {
    style: {
      color: COLOR_AZUL_OSCURO,
      fontSize: "12px",
      minHeight: "40px",
      backgroundColor: COLOR_GRIS_CLARO,
    },
    pageButtonsStyle: {
      borderRadius: "50%",
      height: "33px",
      width: "33px",
      padding: "5px",
      cursor: "pointer",
      transition: "0.4s",
      color: COLOR_AZUL_CLARO,
      fill: COLOR_AZUL_CLARO,
      backgroundColor: COLOR_GRIS_CLARO,
      "&:disabled": {
        cursor: "unset",
        color: COLOR_GRIS_OSCURO,
        fill: COLOR_GRIS_OSCURO,
      },
      "&:hover:not(:disabled)": {
        backgroundColor: COLOR_CELESTE,
      },
      "&:focus": {
        outline: "none",
        backgroundColor: COLOR_CELESTE,
      },
    },
  },
};

const data = [
  {
    status: "Rechazado",
    idService: "192950",
    idPursache: "192950",
    domain: "pepitoperez.com.co",
    operation: "Renovación",
    typeService: "Dominio",
    capacity: " ",
    quantity: "1",
    activationDate: "01/09/2021",
    extra1: "109091644",
    isPayment: "si",
    amount: "29990",
    idClient: "6593913",
    refPayment: "CCI PAY:1631571927",
  },
  {
    status: "Activo",
    idService: "192950",
    idPursache: "192950",
    domain: "transportadoresdenortedesantander.com.co",
    operation: "Transferencia",
    typeService: "Dominio",
    capacity: " ",
    quantity: "1",
    activationDate: "01/09/2021",
    extra1: "109091644",
    isPayment: "si",
    amount: "29990",
    idClient: "6593913",
    refPayment: "CCI PAY:1631571927",
  },
  {
    status: "Pendiente",
    idService: "192950",
    idPursache: "192950",
    domain: "xn--fundacinvivanlosnios-l7b6a.com.co",
    operation: "Renovación",
    typeService: "Weebly",
    capacity: " ",
    quantity: "1",
    activationDate: "01/09/2021",
    extra1: "109091644",
    isPayment: "si",
    amount: "29990",
    idClient: "6593913",
    refPayment: "CCI PAY:1631571927",
  },
  {
    status: "Cancelado",
    idService: "192950",
    idPursache: "192950",
    domain: "xdipromocatalogopremiums.com.co",
    operation: "Activación",
    typeService: "Correo",
    capacity: " ",
    quantity: "15",
    activationDate: "01/09/2021",
    extra1: "109091644",
    isPayment: "si",
    amount: "29990",
    idClient: "6593913",
    refPayment: "CCI PAY:1631571927",
  },
  {
    status: "Activo",
    idService: "192950",
    idPursache: "192950",
    domain: "luiscarlosorioclinicaveterinaria.com.co",
    operation: "Ampliación",
    typeService: "Correo",
    capacity: "5GB ",
    quantity: "15",
    activationDate: "01/09/2021",
    extra1: "109091644",
    isPayment: "si",
    amount: "29990",
    idClient: "6593913",
    refPayment: "CCI PAY:1631571927",
  },
  {
    status: "Activo",
    idService: "192950",
    idPursache: "192950",
    domain: "luiscarlosorioclinicaveterinaria.com.co",
    operation: "Stuffing",
    typeService: "Correo",
    capacity: "5GB ",
    quantity: "15",
    activationDate: "01/09/2021",
    extra1: "109091644",
    isPayment: "si",
    amount: "29990",
    idClient: "6593913",
    refPayment: "CCI PAY:1631571927",
  },
  {
    status: "Activo",
    idService: "192950",
    idPursache: "192950",
    domain: "luiscarlosorioclinicaveterinaria.com.co",
    operation: "Protección",
    typeService: "Correo",
    capacity: "5GB ",
    quantity: "15",
    activationDate: "01/09/2021",
    extra1: "109091644",
    isPayment: "si",
    amount: "29990",
    idClient: "6593913",
    refPayment: "CCI PAY:1631571927",
  },
];

const TableNextPricesHosting = () => {
  const columns = [
    {
      name: "Acción",
      selector: (row) => row.action,
      width: "70px",
      center: false,
    },
    {
      name: "Estado",
      selector: (row) => row.status,
      width: "100px",
      center: false,
    },
    {
      name: "ID.",
      selector: (row) => row.idService,
      width: "90px",
      center: true,
    },
    {
      name: "ID. Compra",
      selector: (row) => row.idPursache,
      width: "100px",
      center: true,
    },
    {
      name: "Dominio",
      selector: (row) => row.domain,
      width: "22%",
      center: false,
    },
    {
      name: "Operación",
      selector: (row) => row.operation,
      center: false,
      width: "126px",
    },
    {
      name: "Tipo de Servicio",
      selector: (row) => row.typeService,
      center: true,
      width: "126px",
    },
    {
      name: "Capacidad",
      selector: (row) => row.capacity,
      center: true,
      width: "90px",
    },
    {
      name: "Cant.",
      selector: (row) => row.quantity,
      center: true,
      width: "70px",
    },
    {
      name: "Fecha Activación",
      selector: (row) => row.activationDate,
      center: false,
      width: "110px",
    },
    {
      name: "Extra 1",
      selector: (row) => row.extra1,
      center: false,
      width: "110px",
    },

    {
      name: "Pago",
      selector: (row) => row.isPayment,
      center: true,
      width: "60px",
    },

    {
      name: "Monto",
      selector: (row) => row.amount,
      center: false,
      width: "70px",
    },
    {
      name: "Id. Cliente",
      selector: (row) => row.idClient,
      center: false,
      width: "100px",
    },
    {
      name: "Ref. Pago",
      selector: (row) => row.refPayment,
      center: false,
      width: "155px",
    },
  ];

  return (
    <React.Fragment>
      <div className="table__containter">
        <DataTable
          columns={columns}
          data={data}
          highlightOnHover={true}
          pointerOnHover={true}
          pagination={true}
          paginationPerPage="5"
          paginationRowsPerPageOptions={[5, 10, 20, 30, 50]}
          noHeader={true}
          customStyles={customStyles}
        />
      </div>
      <br />

      <style jsx>{`
        .table__containter {
          box-shadow: -1px 2px 9px -2px rgba(32, 60, 83, 0.67);
          margin: 0px;
          padding: 0;
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};
export default TableNextPricesHosting;
