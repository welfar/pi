import React from "react";
import {
  COLOR_AZUL_CLARO,
  COLOR_AZUL_OSCURO,
  COLOR_BLANCO,
  COLOR_GRIS_CLARO,
  COLOR_PURPURA,
  COLOR_ROJO,
  COLOR_VERDE_BRILLANTE,
  COLOR_VERDE_CLARO,
} from "../../lib/util/Colors";
import { FaUserAstronaut, FaEdit, FaPeopleCarry } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { domainDataState } from "../../recoil/atoms";
/* import Modal from "../Principal/Modal/Modal.js";
import ModalFormEditData from "../DomainSGI/ModalDomainSGI/ModalEditData/ModalFormEditData";
import ModalMoveDomain from "../DomainSGI/ModalDomainSGI/ModalMoveDomain/ModalMoveDomain"; */

const CustomerDataDomain = () => {
  const domainData = useRecoilValue(domainDataState);
  /* console.log("domianData", domainData); */

  /* const btnMoveDomain = () => {
    alert("Mover dominio");
  };
  const btnEdit = () => {
    alert("editar");
  };
  const [modalEditData, setModalEditData] = useState(false);
  const [modalMoveDomain, setModalMoveDomain] = useState(false); */
  return (
    <>
      <div className="data__container">
        <div className="costumerData__header">
          <div className="costumerData__header--left">
            <div className="costumerData__header--icon">
              <FaUserAstronaut />
            </div>
            <div>
              <p className="costumerData__header--name">
                {/* {domainData.body[0].DataContact[0].NameClient} */}
              </p>
            </div>
            <div className="costumerData__header--circle">
              <BsCircleFill />
            </div>
          </div>

          <p className="costumerData__header--id">
            Id. Cliente # {/* {domainData.body[0].Contacts} */}
          </p>
        </div>

        <div className="costumerData__content">
          <div className="costumerData__content--left">
            <div className="costumerData__content--titles">
              <p>Identificación:</p>
              <p>Correo:</p>
            </div>
            <div className="costumerData__content--data">
              {/* <p>{domainData.body[0].DataContact[0].Identification}</p>
              <p>{domainData.body[0].DataContact[0].Email}</p> */}
            </div>
          </div>
          <div className="costumerData__content--right">
            <div className="costumerData__content--buttons">
              <div className="button__container">
                {/* <button onClick={() => setModalEditData(!modalEditData)} className="button__coupons">
                  <FaEdit />
                </button>
                <Modal
                  status={modalEditData}
                  changeStatus={setModalEditData}
                  modalTitle="Cambio de Datos de Cliente"
                  modalDetail="Id. Servicio 85229"
                >
                <ModalFormEditData/>
                </Modal> */}
              </div>

              <div className="button__container">
                <p className="textCoupons">Mover dominio</p>
                {/* <button
                  onClick={() => setModalMoveDomain(!modalMoveDomain)}
                  className="button__addFunds"
                >
                  <FaPeopleCarry />
                </button>
                <Modal
                  status={modalMoveDomain}
                  changeStatus={setModalMoveDomain}
                  modalTitle="Mover Dominio entre Clientes"
                  modalDetail="Id. Servicio 85229"
                >
                  <ModalMoveDomain />
                </Modal> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .data__container {
          background-color: ${COLOR_GRIS_CLARO};
          border-radius: 15px;
          color: ${COLOR_AZUL_OSCURO};
          display: flex;
          flex-direction: column;
          margin: 25px;
          padding: 0px 15px 10px;
        }

        .costumerData__header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .costumerData__header--left {
          display: flex;
          flex-direction: row;
        }

        .costumerData__header--icon {
          font-size: 2.68rem;
          margin: 5px 3px 2px 10px;
        }

        .costumerData__header--name {
          font-weight: bold;
          font-size: 20px;
          margin: 15px 5px 2px 15px;
        }

        .costumerData__header--circle {
          color: ${COLOR_VERDE_BRILLANTE};
          font-size: 15px;
          margin-top: 15px;
        }

        .costumerData__header--id {
          color: ${COLOR_AZUL_OSCURO};
          font-size: 20px;
          font-weight: bold;
          margin: 15px 15px 0px;
        }

        .costumerData__amounts {
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          font-size: 18px;
          font-weight: bold;
          margin-right: 15px;
        }

        .costumerData__amounts--spend {
          color: ${COLOR_ROJO};
          margin-bottom: 0px;
        }

        .costumerData__amounts--available {
          color: ${COLOR_AZUL_CLARO};
          margin-bottom: 2px;
        }

        .costumerData__content {
          margin-left: 62px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .costumerData__content--left {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 18px;
        }

        .costumerData__content--titles {
          margin: 0px 20px 0px 10px;
          font-size: 20px;
          font-weight: bold;
          color: ${COLOR_AZUL_OSCURO};
        }

        .costumerData__content--titles p {
          margin-bottom: 5px;
        }
        .costumerData__content--data p {
          margin-bottom: 5px;
        }

        .costumerData__content--right {
          display: flex;
          flex-direction: row;
          margin-bottom: 5px;
        }

        .costumerData__content--text {
          border: 1px solid red;
          color: ${COLOR_AZUL_OSCURO};
          display: flex;
          flex-direction: row;
          font-weight: bold;
          justify-content: flex-end;
        }

        .costumerData__content--buttons {
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          margin-right: 15px;
        }

        .button__container {
          align-self: flex-end;
          display: flex;
          flex-direction: row;
        }

        .button__container p {
          margin: 10px 10px auto;
          font-size: 15px;
          font-weight: bold;
          visibility: hidden;
        }

        .button__container:hover p {
          visibility: visible;
        }

        .button__container button {
          align-items: center;
          border-radius: 50%;
          font-size: 20px;
          font-weight: bold;
          height: 40px;
          line-height: 0.5;
          width: 40px;
        }

        .button__key {
          background-color: ${COLOR_AZUL_CLARO};
          border-color: ${COLOR_AZUL_CLARO};
          color: ${COLOR_BLANCO};
          margin-bottom: 10px;
        }
        .button__key:hover {
          transform: scale(1.1);
        }

        .button__container:hover p {
          visibility: visible;
        }

        .button__coupons {
          background-color: ${COLOR_PURPURA};
          border-color: ${COLOR_PURPURA};
          color: ${COLOR_BLANCO};
          margin-bottom: 10px;
        }

        .button__coupons:hover {
          transform: scale(1.1);
        }

        .button__addFunds {
          background-color: ${COLOR_VERDE_CLARO};
          border-color: ${COLOR_VERDE_CLARO};
          color: ${COLOR_AZUL_CLARO};
          margin-bottom: 0px;
        }

        .button__addFunds:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default CustomerDataDomain;
