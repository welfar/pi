import React, { useState } from "react";
import { COLOR_BLANCO, COLOR_PURPURA } from "../../lib/util/Colors";
import { FaEdit, FaEye, FaEyeSlash } from "react-icons/fa";
/* import Modal from "../Principal/Modal/Modal.js";
import ModalFormEditDataDomain from "../DomainSGI/ModalDomainSGI/ModalEditDataDomain/ModalFormEditDataDomain"; */
import { useRecoilValue } from "recoil";
import { domainDataState } from "../../recoil/atoms";

const DomainData = () => {
  const domainData = useRecoilValue(domainDataState);

  const [inputPassword, setInputPassword] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();

    let tipo = document.getElementById("password");
    if (tipo.type === "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
    inputPassword ? setInputPassword(false) : setInputPassword(true);
  };
  /* const [modalEditDataDomain, setModalEditDataDomain] = useState(false); */

  return (
    <div className="container__domaindata">
      <div className="container__domaindata--tittle">
        <p>Datos de dominio</p>
      </div>
      <div className="container__columns">
        <div className="container__column">
          <div>
            <strong>
              <label>Estado:</label>
            </strong>
            <input
              className="container__columns--config"
              type="text"
              /* value={domainData.body[0].DataContact[0].status}*/
              disabled
            />
          </div>
          <div>
            <strong>
              <label>Fecha de Registro:</label>
            </strong>
            <input
              className="container__columns--config container__columns--inputdate"
              type="text"
              /* value={domainData.body[0].CreationDate} */
              disabled
            />
          </div>
          <div>
            <strong>
              <label>Fecha de Vencimiento:</label>
            </strong>
            <input
              className="container__columns--config"
              type="text"
              /* value={domainData.body[0].ExpirationDate} */
              disabled
            />
          </div>
        </div>
        <hr />
        <div>
          <div className="container__authcode">
            <strong>
              <label>AuthCode:</label>
            </strong>
            <div className="container__inputbtn">
              <input
                className="input__auth--config"
                type="password"
                name="password"
                id="password"
                value="authCode"
                disabled
              />
              <button
                className="bttn"
                type="button"
                onClick={(e) => showPassword(e)}
              >
                {inputPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <strong>
              <label>Protección contra Robo:</label>
            </strong>
            <input
              className="container__columns--config container__columns--inputstealprotect"
              type="text"
              /* value={domainData.body[0].TransferLock} */
              disabled
            />
          </div>
          <div>
            <strong>
              <label>Protección de privacidad:</label>
            </strong>
            <input
              className="container__columns--config"
              type="text"
              /* value={domainData.body[0].WhoisPrivacy} */
              disabled
            />
          </div>
        </div>
      </div>
      <div className="button__container">
        {/* <p>Editar</p>
        <button onClick={() => setModalEditDataDomain(!modalEditDataDomain)} className="button__edit">
          <FaEdit />
        </button>
        <Modal
            status={modalEditDataDomain}
            changeStatus={setModalEditDataDomain}
            modalTitle="Cambio de Datos de Dominio"
            modalDetail="Id. Servicio 85229"
        >
        <ModalFormEditDataDomain/>
        </Modal> */}
      </div>

      <style jsx>{`
        .container__domaindata {
          background: #eaedf7;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          margin: 25px;
          padding: 0px 15px 10px;
          color: #25233c;
        }

        .container__domaindata--tittle {
          margin: 15px 0 0 20px;
          font-size: 25px;
          font-weight: bold;
        }

        .container__columns {
          flex: 5;
          display: flex;
          font-size: 20px;
        }

        .container__columns--config {
          background-color: transparent;
          margin-left: 10px;
          padding-left: 15px;
          color: #000;
          border: none;
          width: 150px;
        }

        .container__columns--inputdate {
          margin-left: 47px;
        }

        .container__columns--inputstealprotect {
          margin-left: 22px;
        }

        .container__column {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        hr {
          height: 100px;
          border: 1px solid #b0b0b0;
          margin: 8px 20px 2px 30px;
        }

        .container__authcode {
          display: flex;
          align-items: baseline;
        }

        .input__auth--config {
          padding-left: 15px;
          width: 110px;
          border: none;
          border-radius: 10px;
          outline: none;
        }

        .container__inputbtn {
          margin-left: 10px;
          background-color: #fff;
          border-radius: 10px;
        }

        .bttn {
          background-color: transparent;
          border: none;
          outline: none;
        }

        .button__container {
          margin-top: 10px;
          margin-right: 15px;
          align-self: flex-end;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
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

        .button__edit {
          background-color: ${COLOR_PURPURA};
          border-color: ${COLOR_PURPURA};
          color: ${COLOR_BLANCO};
          margin-bottom: 10px;
        }

        .button__edit:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default DomainData;
