import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRecoilState } from "recoil";
import { FaPlus } from "react-icons/fa";
import { initialFormState, usersState } from "../../../../recoil/atoms";
import { userState } from "../../../../recoil/selectors";
import { COLOR_BLANCO, COLOR_PURPURA } from "../../../../lib/util/Colors";

/* const initialForm = {
  name: "",
  email: "",
  cel: "",
  area: "",
  isLeader: false,
}; */

const CreateNewUser = ({ changeStatus }) => {
  const [users, setUsers] = useRecoilState(usersState);
  /* const [user, setUser] = useState(initialForm); */
  const [userData, setUserData] = useRecoilState(initialFormState);
  /* const user = useRecoilValue(userState); */

  const cookies = new Cookies();

  const addUser = (e) => {
    e.preventDefault();
    /* if (users.some((elem) => elem.email === user.email)) { */
    if (users.some((elem) => elem.email === userData.email)) {
      alert("El ususario esta repetido");
    } else {
      setUsers([...users, userData]);
      /* setUser(initialForm); */
      setUserData(initialFormState);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    /* setUser({
      ...user,
      [e.target.name]: e.target.value,
    }); */
  };

  const handleRoles = () => {
    if (userData.isLeader) {
      return [
        userData.area.toUpperCase(),
        userData.isLeader === true ? "LIDER" : null,
      ];
    } else {
      return [userData.area.toUpperCase()];
    }
    /* if (user.isLeader) {
      return [user.area.toUpperCase(), user.isLeader === true ? "LIDER" : null];
    } else {
      return [user.area.toUpperCase()];
    } */
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/v1/auth/register`,
        {
          ...userData,
          cel: JSON.parse(userData.cel),
          status: "ACTIVE",
          roles: handleRoles(),
        },
        /* {
          ...user,
          cel: JSON.parse(user.cel),
          status: "ACTIVE",
          roles: handleRoles(),
        }, */
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        /* const Datos = setUserData(res.data);
        console.log("datosssss", Datos);
        console.log("aqui va userinfo", res); */
        /* window.location.reload(); */
      })
      .catch((err) => {
        console.log(err);
        /* window.location.reload(); */
      });
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
            handleSubmit(e);
            addUser(e);
            setUsers([...users, user]);
            setUserData(initialFormState);
            /* setUsers([...users, user]);
            setUser(initialForm); */
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
              value={userData.name}
              /* value={user.name} */
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
              value={userData.email}
              /* value={user.email} */
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
              id="cel"
              type="text"
              name="cel"
              placeholder="Escribe tu celular"
              onChange={(e) => handleChange(e)}
              value={userData.cel}
              /* value={user.cel} */
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
              value={userData.area}
              /* value={user.area} */
              required
            >
              <option value="">Selecciona un Rol</option>
              <option value="Superuser">Super User</option>
              <option value="Comercial">Comercial</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Desarrollo">Desarrollo</option>
              <option value="Desarrollo_op">Desarrollo Operacional</option>
              <option value="Maia">MAIA</option>
              <option value="Marketing">Marketing</option>
              <option value="Soportehdr">HDR</option>
              <option value="Multimedia">Multimedia</option>
            </select>
          </div>

          {/* {user.area !== "Superuser" ? ( */}
          {userData.area !== "Superuser" ? (
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
                  /* user.isLeader */
                  /* ? setUser({ ...user, isLeader: false })
                  : setUser({ ...user, isLeader: true }); */
                  userData.isLeader
                    ? setUserData({ ...userData, isLeader: false })
                    : setUserData({ ...userData, isLeader: true });
                }}
                checked={userData.isLeader}
                /* checked={user.isLeader} */
              />
            </div>
          ) : null}
          <div className="form__container-buttons">
            <div className="button__container">
              <FaPlus />
              <input
                className="form__container-inputs--save"
                type="submit"
                id="new"
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

        input#new {
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

export default CreateNewUser;
