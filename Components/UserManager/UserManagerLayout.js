import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { usersState } from "../../recoil/atoms";
import Cookies from "universal-cookie";
import Simple_Search from "../Principal/Simple_Search";
import Container_Section from "../Principal/Container_Section";
import TableUserManager from "./TableUserManager";
import { COLOR_AZUL_OSCURO, COLOR_CELESTE } from "../../lib/util/Colors";
import Modal from "../Principal/Modal/Modal";
import ModalCreateNewUser from "./ModalsUserManager/ModalCreateUser/ModalCreateNewUser";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

const UserManagerLayout = () => {
  const [users, setUsers] = useRecoilState(usersState);

  const [modalCreateUser, setModalCreateUser] = useState(false);

  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("token") === undefined || cookies.get("token") === "") {
      window.location.href = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/`;
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/v1/auth/users`, {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then((res) => {
        setUsers(res.data.body);
        /* console.log("respuesta res.data.body", res); */
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [setUsers]);

  return (
    <>
      <Simple_Search
        Query="Consulta aquí la información de cada usuario de panel interno"
        Typequery="Ingresa un nombre"
        TitleButton="Buscar"
      />
      <Container_Section title="Registro de Usuarios">
        <div></div>
        <div className="general">
          <div className="itemContainer">
            {/* user, */}
            {users.length > 0 &&
              users.map((index) => {
                return <TableUserManager /* user={user} */ key={index} />;
              })}
          </div>
          <div className="itemContainerBotton">
            <p className="itemContainerBotton__buttons--plustext">
              Crear nuevo usuario
            </p>
            <button className="itemContainerBotton__buttons--plus">
              <div
                onClick={() => setModalCreateUser(!modalCreateUser)}
                className="itemContainerBotton__buttons--plusIcon"
              >
                <FaPlus />
              </div>
            </button>
            <Modal
              status={modalCreateUser}
              changeStatus={setModalCreateUser}
              modalTitle="Crear Nuevo Usuario"
            >
              <ModalCreateNewUser changeStatus={setModalCreateUser} />
            </Modal>
          </div>
        </div>
      </Container_Section>

      <style jsx>
        {`
          .general {
            display: flex;
            flex-direction: column;
          }

          .itemContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            height: 800px;
            border-radius: 10px;
            margin: 20px 25px;
            overflow-y: scroll;
          }

          .itemContainerBotton {
            display: flex;
            justify-content: flex-end;
            margin: 0px 25px;
            height: 50px;
            widht: 100%;
          }

          .itemContainerBotton__buttons--plus {
            background-color: ${COLOR_CELESTE};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-color: ${COLOR_CELESTE};
            border-radius: 50%;
            font-size: 0.8em;
            width: 50px;
            height: 50px;
            outline: none;
            margin: 5px;
          }

          .itemContainerBotton__buttons--plus:hover {
            color: $(COLOR_GRIS_CLARO);
            box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
            transition: all 0.2s ease;
            transform: scale(1.1);
          }

          .itemContainerBotton__buttons--plusIcon {
            font-size: 25px;
            color: #25233c;
          }

          .itemContainerBotton p {
            color: ${COLOR_AZUL_OSCURO};
            margin: 15px;
            font-size: 15px;
            font-weight: bold;
            visibility: hidden;
          }

          .itemContainerBotton:hover p {
            visibility: visible;
          }
        `}
      </style>
    </>
  );
};

export default UserManagerLayout;
