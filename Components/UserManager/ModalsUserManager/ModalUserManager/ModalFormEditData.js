import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { COLOR_BLANCO, COLOR_PURPURA } from "../../../../lib/util/Colors";
import { FaEdit } from "react-icons/fa";
import { usersState } from "../../../../recoil/atoms";

const ModalFormEditData = ({ user, changeStatus }) => {
  const [users, setUsers] = useRecoilState(usersState);
  const [userConfig, setUserConfig] = useState({ ...user });
  const [editCard, setEditCard] = useState(false);
  const [id, setId] = useState("");

  const updateCard = (e) => {
    e.preventDefault();
    const editedCard = users.map((elem) =>
      elem.email === id ? userConfig : elem
    );
    setUsers(editedCard);
    console.log("aquiii", editedCard);
    setEditCard(false);
    setUserConfig({ ...user });
    setId("");
  };

  const handleChange = (e) => {
    setUserConfig({
      ...userConfig,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (theUser) => {
    setUserConfig(theUser);
    setEditCard(true);
    setId(theUser.email);
  };

  return (
    <div className="container__dataeditform">
      <div className="container__image">
        <img
          className="container__image-img"
          src="https://placeimg.com/400/400/animals"
          alt="Imagen perfil"
        />
        <div id="div__file">
          <p id="text">CAMBIAR</p>
          <input type="file" id="btn__enviar" accept="image/*" />
        </div>
      </div>
      <div className="container__form">
        <form
          className="form"
          id="editForm"
          onSubmit={(e) => {
            updateCard(e);
            handleEdit(theUser);
            changeStatus(false);
          }}
        >
          <div className="form__container-label-input">
            <strong>
              <label
                className="form__container-label-input form__container-label-input--label-config"
                htmlFor="name"
              >
                Nombre
              </label>
            </strong>
            <input
              className="form__container-label-input form__container-label-input--input-config"
              id="name"
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              onChange={(e) => handleChange(e)}
              value={userConfig.name}
              required
            />
          </div>

          <div className="form__container-label-input">
            <strong>
              <label
                className="form__container-label-input form__container-label-input--label-config"
                htmlFor="email"
              >
                Correo
              </label>
            </strong>
            <input
              className="form__container-label-input form__container-label-input--input-config"
              id="email"
              type="email"
              name="email"
              placeholder="correo@email.com"
              onChange={(e) => handleChange(e)}
              value={userConfig.email}
              required
            />
          </div>

          <div className="form__container-label-input">
            <strong>
              <label
                className="form__container-label-input form__container-label-input--label-config"
                htmlFor="cellphone"
              >
                Celular
              </label>
            </strong>
            <input
              className="form__container-label-input form__container-label-input--input-config"
              id="cellphone"
              type="text"
              name="cellphone"
              placeholder="Escribe tu celular"
              onChange={(e) => handleChange(e)}
              value={userConfig.cellphone}
              required
            />
          </div>

          <div className="form__container-label-input">
            <strong>
              <label
                className="form__container-label-input form__container-label-input--label-config"
                htmlFor="area"
              >
                Área
              </label>
            </strong>
            <select
              className="form__container-label-input form__container-label-input--input-config"
              id="area"
              type="text"
              name="area"
              onChange={(e) => handleChange(e)}
              value={userConfig.area}
              required
            >
              <option value="">Selecciona un Rol</option>
              <option value="S">Super User</option>
              <option value="L">Líder</option>
              <option value="C">Comercial</option>
              <option value="A">Administrativo</option>
              <option value="D">Desarrollo</option>
              <option value="O">Desarrollo Operacional</option>
              <option value="MA">MAIA</option>
              <option value="MK">Marketing</option>
              <option value="H">HDR</option>
              <option value="MM">Multimedia</option>
            </select>
          </div>

          <div className="form__container-label-check">
            <strong>
              <label
                htmlFor="isLeader"
                className="form__container-label-input form__container-label-input--label-config"
              >
                Es Líder?
              </label>
            </strong>
            <input
              type="checkbox"
              name="isLeader"
              id="isLeader"
              onChange={() => {
                userConfig.isLeader
                  ? setUserConfig({ ...userConfig, isLeader: false })
                  : setUserConfig({ ...userConfig, isLeader: true });
              }}
              checked={userConfig.isLeader}
            />
          </div>

          <div className="form__container-buttons">
            <div className="button__container">
              <FaEdit />
              <input
                className="form__container-inputs--save"
                type="submit"
                id="save"
              />
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        input::placeholder {
          color: #e5dddd;
        }

        .container__dataeditform {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 10px 20px 0 20px;
        }

        .container__image {
          margin: 20px 47px 0 12px;
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container__image-img {
          width: 15rem;
          height: 15rem;
          border-radius: 100%;
        }

        p#text {
          text-align: center;
          color: #0096ff;
          font-weight: bold;
        }

        div#div__file {
          position: relative;
          margin: 15px;
          padding: 5px;
          width: 120px;
          height: 35px;
          background-color: #ffffff;
          border: 1px solid #0096ff;
          box-sizing: border-box;
          border-radius: 10px;
        }

        input#btn__enviar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        .container__form {
          width: 70%;
          height: 440px;
          margin-right: 10px;
          display: flex;
        }

        .form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .form__container-label-input {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .form__container-label-check {
          width: 100%;
          display: flex;
          align-items: flex-start;
        }

        input[type="checkbox"] {
          height: 25px;
          width: 25px;
          margin: 7px 0 0 4%;
        }

        .form__container-label-input--label-config {
          padding-top: 7px;
          height: 40px;
          color: #25233c;
          font-size: 19px;
        }

        .form__container-label-input--input-config {
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 0px 10px;
          width: 340px;
          height: 37px;
          border: none;
          padding-left: 12px;
          outline: none;
        }

        .form__container-buttons {
          background-color: ${COLOR_PURPURA};
          font-size: 20px;
          align-items: center;
          align-self: flex-end;
          display: flex;
          position: relative;
          justify-content: center;
          border-color: ${COLOR_PURPURA};
          border-radius: 50%;
          width: 40px;
          height: 40px;
          color: ${COLOR_BLANCO};
          line-height: 0.5;
        }

        .form__container-buttons:hover {
          transform: scale(1.1);
        }

        input#save {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        @media only screen and (max-width: 900px) {
          .container__dataeditform {
            font-size: 0.9rem;
            width: 100%;
            height: 100%;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .container__image {
            width: 100%;
            margin: 0 0 5px 0;
          }

          .container__image-img {
            width: 15rem;
            height: 15rem;
          }

          div#div__file {
            padding: 2px;
            width: 100px;
            height: 27px;
          }

          .container__form {
            width: 100%;
          }

          input[type="checkbox"] {
            height: 22px;
            width: 22px;
            margin: 9px 0 0 2%;
          }

          .form__container-buttons {
            margin-top: 10px;
          }

          .form__container-inputs--save {
            width: 100px;
            height: 27px;
          }
        }
      `}</style>
    </div>
  );
};

export default ModalFormEditData;
