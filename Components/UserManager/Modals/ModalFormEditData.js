import React from "react";
import { useForm } from "../ValidationsFormModalEditData";
import { GoTrashcan } from "react-icons/go";

const initialForm = {
  name: "",
  email: "",
  cellphone: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexCellPhone = /^(\d{3})[- ]?(\d{7})$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Este campo sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Correo' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Este campo es incorrecto";
  }

  if (!form.cellphone.trim()) {
    errors.cellphone = "El campo 'Celular' es requerido";
  } else if (!regexCellPhone.test(form.cellphone.trim())) {
    errors.cellphone = "Este campo solo acepta números";
  }
  return errors;
};

const ModalFormEditData = () => {
  const {
    form,
    errors,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useForm(initialForm, validationsForm);

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
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required
            />
            {errors.name && <p className="msg">{errors.name}</p>}
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
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          {errors.email && <p className="msg">{errors.email}</p>}

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
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.cellphone}
              required
            />
          </div>
          {errors.cellphone && <p className="msg">{errors.cellphone}</p>}

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
              value={form.area}
            >
              <option value="rol">Roles</option>
              <option value="super">Super User</option>
              <option value="leader">Líder</option>
              <option value="commercial">Comercial</option>
              <option value="admin">Administrativo</option>
              <option value="development">Desarrollo</option>
              <option value="operational">Desarrollo Operacional</option>
              <option value="maia">MAIA</option>
              <option value="marketing">Marketing</option>
              <option value="hdr">HDR</option>
              <option value="multimedia">Multimedia</option>
            </select>
          </div>
          <div className="form__container-label-check">
            <input type="checkbox" name="isLeader" id="isLeader" />
            <strong>
              <label
                htmlFor="isLeader"
                className="form__container-label-input form__container-label-input--label-config"
              >
                Es Líder?
              </label>
            </strong>
          </div>
          <div className="form__container-buttons">
            <input
              className="form__container-inputs--save"
              type="submit"
              id="save"
              value="Guardar"
            />
            <div className="form__container-inputs--delete">
              <GoTrashcan />
              <p id="delete-text">Eliminar</p>
              <input
                type="reset"
                id="btn__delete"
                onClick={(e) => handleReset(e)}
              />
            </div>
          </div>
          {/* {errors.name && <p className="msg">{errors.name}</p>}
          {errors.email && <p className="msg">{errors.email}</p>}
          {errors.cellphone && <p className="msg">{errors.cellphone}</p>} */}
        </form>
      </div>

      <style jsx>{`
        input::placeholder {
          color: #e5dddd;
        }

        .container__dataeditform {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 20px;
        }

        .container__image {
          margin: 20px 60px 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container__image-img {
          width: 183px;
          height: 183px;
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
          margin-right: 10px;
          display: flex;
        }

        .form {
          width: 380px;
          height: 440px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .form__container-label-input {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .form__container-label-check {
          width: 150px;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
        }

        input[type="checkbox"] {
          height: 25px;
          width: 25px;
        }

        .form__container-label-input--label-config {
          color: #000;
          font-size: 19px;
        }

        .form__container-label-input--input-config {
          background: #ffffff;
          border-radius: 0px 10px;
          width: 250px;
          height: 25px;
          border: none;
          padding-left: 12px;
          outline: none;
        }
        .form__container-password2 {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .msg {
          fontweight: bold;
          color: #f66060;
        }

        .alert {
          background: #f66060;
          padding: 0 15px;
          border-radius: 3px;
          fontweight: bold;
          color: white;
          display: none;
        }

        .success {
          background: #198754;
          padding: 0 15px;
          border-radius: 3px;
          fontweight: bold;
          color: white;
          display: none;
        }

        .message__Active {
          display: block;
        }

        .form__container-buttons {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }

        .form__container-inputs--save {
          background: #0096ff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: none;
          border-radius: 10px;
          width: 140px;
          height: 38px;
          color: #ffffff;
        }

        .form__container-inputs--delete {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #dd1144;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: none;
          border-radius: 10px;
          width: 140px;
          height: 38px;
          color: #ffffff;
        }

        p#delete-text {
          margin: 0 0 0 15px;
        }

        input#btn__delete {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        @media only screen and (max-width: 768px) {
          .container__dataeditform {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .container__image {
            margin: 0 0 20px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ModalFormEditData;
