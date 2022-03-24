import React from "react";

const DomainContactDetails = () => {
  return (
    <div className="container__domaincontactdetails">
      <div className="container__domaincontactdetails--tittle">
        <p>Datos contacto de dominio</p>
      </div>
      <hr />
      <div className="container__columns">
        <div>
          <strong>
            <label>Registrante</label>
          </strong>
          <div className="container__inputs">
            <input
              type="text"
              className="container__columns--disabled"
              value="empresa"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="correo"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="nit"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="dirección"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="ciudad"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="departamento"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="pais"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="telefono"
              disabled
            />
          </div>
          <strong>
            <label>Técnico</label>
          </strong>
          <div className="container__inputs">
            <input
              type="text"
              className="container__columns--disabled"
              value="empresa"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="correo"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="nit"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="dirección"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="ciudad"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="departamento"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="pais"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="telefono"
              disabled
            />
          </div>
        </div>
        <div>
          <strong>
            <label>Administrativo</label>
          </strong>
          <div className="container__inputs">
            <input
              type="text"
              className="container__columns--disabled"
              value="empresa"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="correo"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="nit"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="dirección"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="ciudad"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="departamento"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="pais"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="telefono"
              disabled
            />
          </div>
          <strong>
            <label>Facturación</label>
          </strong>
          <div className="container__inputs">
            <input
              type="text"
              className="container__columns--disabled"
              value="empresa"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="correo"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="nit"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="dirección"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="ciudad"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="departamento"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="pais"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="telefono"
              disabled
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container__domaincontactdetails {
          background: #eaedf7;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          margin: 25px;
          padding: 0px 15px 10px;
          color: #25233c;
        }

        p {
          margin-bottom: 0;
        }

        .container__domaincontactdetails--tittle {
          display: flex;
          align-items: center;
          margin: 15px 0 0 20px;
          font-size: 25px;
          font-weight: bold;
        }

        hr {
          background: #b0b0b0;
          width: 97%;
          height: 1px;
          margin: 17px;
        }

        .container__columns {
          display: flex;
          font-size: 20px;
          margin: 0 0 10px 20px;
        }

        .container__columns > div {
          width: 50%;
          padding: 10px;
        }

        .container__inputs {
          margin-bottom: 30px;
          font-size: 18px;
        }

        .container__columns--disabled {
          display: flex;
          flex-direction: column;
          color: #000;
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default DomainContactDetails;
