import React, { useState } from "react";
import {
  COLOR_AZUL_CLARO,
  COLOR_AZUL_OSCURO,
  COLOR_BLANCO,
  COLOR_ROJO,
  COLOR_GRIS_CLARO,
  COLOR_CELESTE,
  COLOR_GRIS_OSCURO,
  COLOR_NEGRO,
  COLOR_PURPURA,
  COLOR_VERDE_CLARO,
} from "../../lib/util/Colors";
import Modal from "../Principal/Modal/Modal";
import ModalFormEditData from "./Modals/ModalFormEditData";
import ModalUserPermits from "./Modals/ModalUserPermits";
import { FaUserCog } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const TableUserManager = ({ User, Area }) => {
  const [modalEditData, setModalEditData] = useState(false);
  const [modalUserPermits, setModalUserPermits] = useState(false);

  return (
    <>
      <div className="itemContainerCard">
        <div className="itemContainerCard__img">
          <img
            alt="Imagen de Usuario"
            src="https://placeimg.com/400/400/animals"
            className="itemContainerCard__img--size"
          />
        </div>
        <div className="itemContainerCard__nameUser">
          <p>{User}</p>
        </div>
        <div className="itemContainerCard__buttons">
          <button
            className="itemContainerCard__buttons--permissions"
            onClick={() => setModalUserPermits(!modalUserPermits)}
          >
            <div className="itemContainerCard__buttons--permissionsIcon">
              <FaUserCog />
            </div>
          </button>
          <Modal
            status={modalUserPermits}
            changeStatus={setModalUserPermits}
            modalTitle="PERMISOS DE USUARIO"
          >
            <ModalUserPermits />
          </Modal>
          <button className="itemContainerCard__buttons--permissions">
            <div className="itemContainerCard__buttons--permissionsIcon"></div>
          </button>
          <button
            onClick={() => setModalEditData(!modalEditData)}
            className="itemContainerCard__buttons--permissions"
          >
            <div className="itemContainerCard__buttons--permissionsIcon">
              <FaUserEdit />
            </div>
          </button>
          <Modal
            status={modalEditData}
            changeStatus={setModalEditData}
            modalTitle="CAMBIO DE DATOS"
          >
            <ModalFormEditData />
          </Modal>
        </div>
      </div>

      <style jsx>
        {`
          .itemContainerCard {
            display: flex;
            flex-direction: column;
            height: 280px;
            width: 230px;
            background-color: ${COLOR_GRIS_CLARO};
            border-radius: 10px;
            margin: 15px 15px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 25);
          }

          .itemContainerCard__img {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
            margin-bottom: 10px;
          }

          .itemContainerCard__nameUser {
            height: 15%;
            font-size: 15px;
            color: #25233c;
            text-align: center;
            font-weight: 600;
            padding-top: 7px;
          }

          .itemContainerCard__buttons {
            display: flex;
            height: 25%;
            item: center;
            margin-left: 25px;
          }

          .itemContainerCard__buttons--permissions {
            background-color: ${COLOR_CELESTE};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-color: ${COLOR_CELESTE};
            border-radius: 50%;
            font-size: 0.8em;
            width: 50px;
            height: 50px;

            margin: 5px;
          }

          .itemContainerCard__buttons--permissions:hover {
            color: $(COLOR_GRIS_CLARO);
            box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
            transition: all 0.2s ease;
          }

          .itemContainerCard__buttons--permissionsIcon {
            font-size: 25px;
            color: #25233c;
            margin-left: 5px;
          }

          .itemContainerCard__img--size {
            width: 132px;
            height: 129px;
            border-radius: 100%;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default TableUserManager;
