import React, { useState } from "react";

const ModalUserPermits = () => {
  const [inputs, setInputs] = useState({});

  const handleChecked = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.checked,
    });
  };
  return (
    <div className="container__userpermits">
      <div className="container">
        <div className="container__config">
          <div className="container__tittle">
            <strong>
              <p className="">VISTAS:</p>
            </strong>
          </div>
          <div className="container__tittle-inputs">
            <input
              className="container__tittle-inputs container__tittle-inputs--input-config"
              type="text"
              value="Servicios"
              disabled
            />
            <br />
            <input
              className="container__tittle-inputs container__tittle-inputs--input-config"
              type="text"
              value="Órdenes"
              disabled
            />
            <br />
            <input
              className="container__tittle-inputs container__tittle-inputs--input-config"
              type="text"
              value="Facturación"
              disabled
            />
            <br />
            <input
              className="container__tittle-inputs container__tittle-inputs--input-config"
              type="text"
              value="Soporte"
              disabled
            />
            <br />
            <input
              className="container__tittle-inputs container__tittle-inputs--input-config"
              type="text"
              value="Clientes"
              disabled
            />
            <br />
            <input
              className="container__tittle-inputs container__tittle-inputs--input-config"
              type="text"
              value="Productos"
              disabled
            />
          </div>
        </div>
        <div className="container__config">
          <div className="container__tittle">
            <strong>
              <p>PERMISOS:</p>
            </strong>
          </div>
          <div className="container__check-permit">
            <div className="checkbox__group">
              <input
                type="checkbox"
                id="services"
                name="services"
                onChange={handleChecked}
              />
              <label className="checkbox__label" htmlFor="services" />

              {/* <input type="checkbox" id="no" />
            <label className="checkbox__label" htmlFor="no" /> */}
            </div>

            <div className="checkbox__group">
              <input
                type="checkbox"
                id="orders"
                name="orders"
                onChange={handleChecked}
              />
              <label className="checkbox__label" htmlFor="orders" />

              {/* <input type="checkbox" id="no" />
            <label className="checkbox__label" htmlFor="no" /> */}
            </div>

            <div className="checkbox__group">
              <input
                type="checkbox"
                id="bills"
                name="bills"
                onChange={handleChecked}
              />
              <label className="checkbox__label" htmlFor="bills" />

              {/* <input type="checkbox" id="no" />
            <label className="checkbox__label" htmlFor="no" /> */}
            </div>

            <div className="checkbox__group">
              <input
                type="checkbox"
                id="support"
                name="support"
                onChange={handleChecked}
              />
              <label className="checkbox__label" htmlFor="support" />

              {/* <input type="checkbox" id="no" />
            <label className="checkbox__label" htmlFor="no" /> */}
            </div>

            <div className="checkbox__group">
              <input
                type="checkbox"
                id="customers"
                name="customers"
                onChange={handleChecked}
              />
              <label className="checkbox__label" htmlFor="customers" />

              {/* <input type="checkbox" id="no" />
            <label className="checkbox__label" htmlFor="no" /> */}
            </div>

            <div className="checkbox__group">
              <input
                type="checkbox"
                id="products"
                name="products"
                onChange={handleChecked}
              />
              <label className="checkbox__label" htmlFor="products" />

              {/* <input type="checkbox" id="no" />
            <label className="checkbox__label" htmlFor="no" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container__button">
        <input
          className="container__button container__button--save"
          type="submit"
          value="Guardar"
        />
      </div>
      <style jsx>{`
        .container__userpermits {
          display: flex;
          flex-direction: column;
        }

        .container {
          display: flex;
          justify-content: center;
        }

        .container__config {
          display: flex;
          flex-direction: column;
          padding: 8px 16px;
        }

        .container__tittle {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #000;
          font-size: 19px;
        }

        .container__tittle-inputs {
          display: flex;
          flex-direction: column;
        }

        .container__tittle-inputs--input-config {
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 0px 10px;
          height: 43px;
          border: none;
          font-size: 19px;
          font-weight: bold;
          color: #25233c;
        }

        .container__check-permit {
          display: flex;
          flex-direction: column;
          width: 50px;
        }

        .checkbox__group {
          display: flex;
          height: 66px;
          justify-content: center;
          align-items: center;
        }

        input[type="checkbox"] {
          display: none;
        }

        input[type="checkbox"] + .checkbox__label {
          cursor: pointer;
        }
        .checkbox__label:before {
          content: "";
          background: #fff;
          border: none;
          border-radius: 10px;
          display: inline-block;
          text-align: center;
          height: 45px;
          width: 45px;
        }

        input[type="checkbox"]:checked + .checkbox__label:before {
          content: "✓";
          font-size: 37px;
          color: #6afca8;
        }

        .container__button {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .container__button--save {
          background: #0096ff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: none;
          border-radius: 10px;
          width: 125px;
          height: 40px;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default ModalUserPermits;
