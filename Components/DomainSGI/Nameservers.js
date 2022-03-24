import React from "react";

const Nameservers = () => {
  return (
    <div className="container__nameserver">
      <div className="container__nameserver--tittle">
        <p>Nameservers</p>
      </div>
      <hr />
      <div className="">
        <div>
          <p className="container__nameserver--text">
            A continuación se listan los servidores de nombre configurados para
            el dominio <strong>"pepito.com.co"</strong>
          </p>
          <div className="container__nameserver--input">
            <input
              type="text"
              className="container__columns--disabled"
              value="nameserver01.mi.com.co"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="nameserver02.mi.com.co"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="nameserver03.mi.com.co"
              disabled
            />
            <input
              type="text"
              className="container__columns--disabled"
              value="nameserver04.mi.com.co"
              disabled
            />
          </div>
        </div>
        <div className="container__btn">
          <input
            className="container__btn--config"
            type="submit"
            value="Cambiar nameservers"
          />
        </div>
      </div>
      <style jsx>{`
        .container__nameserver {
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

        .container__nameserver--tittle {
          display: flex;
          align-items: center;
          margin: 15px 0 0 20px;
          font-size: 25px;
          font-weight: bold;
        }

        .container__nameserver--text {
          font-size: 20px;
          margin: 0 0 10px 20px;
        }

        .container__nameserver--input {
          margin-left: 20px;
        }

        hr {
          background: #b0b0b0;
          width: 97%;
          height: 1px;
          margin: 17px;
        }

        .container__columns--disabled {
          display: flex;
          flex-direction: column;
          background-color: transparent;
          color: #000;
          border: none;
        }

        .container__btn {
          display: flex;
          justify-content: flex-end;
          margin: 15px;
        }

        .container__btn--config {
          font-size: 17px;
          font-weight: bold;
          height: 46px;
          width: 243px;
          background-color: #8ed1ff;
          color: #25233c;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: none;
          border-radius: 10px;
        }

        .container__btn--config:hover {
          box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default Nameservers;
