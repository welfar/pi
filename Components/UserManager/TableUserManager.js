import React, { useState } from "react";
import { COLOR_GRIS_CLARO, COLOR_CELESTE } from "../../lib/util/Colors";
import Modal from "../Principal/Modal/Modal";
import ModalFormEditData from "./ModalsUserManager/ModalUserManager/ModalFormEditData";
import ModalDeleteUser from "./ModalsUserManager/ModalUserManager/ModalDeleteUser";
import { FaUserMinus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { initialFormState } from "../../recoil/atoms";
import { userState } from "../../recoil/selectors";

/* {user;} */
const TableUserManager = () => {
  const user = useRecoilValue(userState);
  console.log("haber que hay user", user);
  const userData = useRecoilValue(initialFormState);
  console.log("haber que hay userData", userData);

  const [modalEditData, setModalEditData] = useState(false);
  const [modalDeleteUser, setModalDeleteUser] = useState(false);

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
          {/* <p>{user.name}</p> */}
          <p>{user.name}</p>
        </div>
        <div className="itemContainerCard__buttons">
          <button
            className="itemContainerCard__buttons--permissions"
            onClick={() => setModalDeleteUser(!modalDeleteUser)}
          >
            <div className="itemContainerCard__buttons--permissionsIcon">
              <FaUserMinus />
            </div>
          </button>
          <Modal
            status={modalDeleteUser}
            changeStatus={setModalDeleteUser}
            modalTitle="Eliminar Usuario"
          >
            <ModalDeleteUser
              /* user={user} */ changeStatus={setModalDeleteUser}
            />
          </Modal>
          <button
            title={user.area}
            /* title={user.area[0].toUpperCase() + user.area.slice(1)} */
            className="itemContainerCard__buttons--permissions"
            disabled
          >
            <div className="itemContainerCard__buttons--permissionsIcon">
              <p>{user.area}</p>
              {/* <p>{user.area[0].toUpperCase()}</p> */}
            </div>
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
            modalTitle="Cambio de Datos"
          >
            <ModalFormEditData
              /* user={user} */ changeStatus={setModalEditData}
            />
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
          }
          .itemContainerCard__buttons--permissionsIcon p {
            margin: 4px 0 0 0;
            font-weight: bold;
            font-size: 1.4rem;
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
