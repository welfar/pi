import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import {
  COLOR_AZUL_OSCURO,
  COLOR_CELESTE,
  COLOR_BLANCO,
  COLOR_GRIS_CLARO,
} from "../../lib/util/Colors";
import { FaStethoscope } from "react-icons/fa";


const Domain_Data = ({ Namedomain, Iddomain }) => {
  const [modalEditDataDomain, setModalEditDataDomain] = useState(false);

  return (
    <React.Fragment>
      <div className="container__domaindata">
        <div className="container__domaindata--card">
          <div className="card__header">
            <div className="header__title">
              <div className="header__title--domain">
                <h6 className="header__id--type">{Namedomain}</h6>
                <div className="header-id--icon">
                  <BsCircleFill />
                </div>
              </div>
              <div className="header__title--iddomain">
                <h2>{Iddomain}</h2>
              </div>
            </div>
            <div className="card__section">
              <div className="card__section--flatdata">
                <ul>
                  <li>Id. Cliente:</li>
                  <li>Nombre:</li>
                  <li>Email Cliente:</li>
                  <li>Celular:</li>
                  <li>Fecha de Creación:</li>
                  <li>Fecha de Vencimiento:</li>
                </ul>
              </div>
              <div className="card__section--realdata">
                <ul>
                  <li>7546793</li>
                  <li>PAH BOGADOS</li>
                  <li>pahernandez@etb.net.co</li>
                  <li>6237466</li>
                  <li>19/11/2011</li>
                  <li>18/11/2022</li>
                </ul>
              </div>
            </div>
            <div className="card__botton">
              <button
                className="button--edit"
              >
                Editar
              </button>

            </div>
          </div>
          <div className="container__domaindata--botton">
            <button className="button--diagnosis">
              <p className="button-diagnosis--title">Diagnóstico</p>
              <div className="button-diagnosis--icon">
                <FaStethoscope />{" "}
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container__domaindata {
          background: ${COLOR_BLANCO};
          margin-top: 10px;
          border-radius: 15px;
          height: 400px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          padding: 10px;
          margin-bottom: 10px;
        }

        .container__domaindata--card {
          background: ${COLOR_GRIS_CLARO};
          display: flex;
          padding: 8px;
          flex-flow: row nowrap;
          height: 95%;
          width: 95%;
          align-items: center;
          border-radius: 20px;
        }

        .card__header {
          display: flex;
          flex-direction: column;
          width: 70%;
          height: 95%;
          text-align: center;
          border-right: 1px solid #b0b0b0;
        }

        .container__domaindata--botton {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5px;
          width: 45%;
          height: 95%;
          text-align: center;
        }

        .header__title {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 10%;
        }
        .card__section {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 75%;
        }

        .card__botton {
          display: flex;
          flex-direction: row;
          width: 15%;
          height: 35px;
          margin-left: 80%;
        }

        .header__title--domain {
          flex: 3;
          height: 100%;
          display: flex;
          flex-direction: row;
        }

        .header__id--type {
          font-size: 20px;
          color: #25233c;
          margin: 3px 10px 15px 20px;
          font-weight: 900;
          margin-left: 55px;
        }

        .header-id--icon {
          font-size: 10px;
          color: #1efd42;
        }

        .header__title--iddomain h2 {
          font-size: 15px;
          color: #25233c;
          text-align: right;
          margin: 5px;
          margin-right: 55px;
          font-weight: 900;
        }

        .header__title--iddomain {
          flex: 2;
          height: 100%;
        }

        .card__section--flatdata {
          flex: 2;
          height: 100%;
          text-align: left;
          padding: 2%;
          font-size: 20px;
          font-weight: 500;
          line-height: 34px;
        }

        .card__section--flatdata ul {
          list-style: none;
        }

        .card__section--realdata {
          flex: 2;
          height: 100%;
          padding: 2%;
          text-align: left;
          font-size: 15px;
          font-weight: 400;
          line-height: 34px;
        }

        .card__section--realdata ul {
          list-style: none;
        }

        .button--edit {
          background-color: ${COLOR_CELESTE};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-color: ${COLOR_CELESTE};
          border-radius: 10px;
          color: ${COLOR_AZUL_OSCURO};
          font-size: 17px;
          font-weight: bold;
          width: 100%;
          height: 100%;
          outline: none;
          text-transform: capitalize;
        }

        .button-edit:hover {
          color: $(COLOR_GRIS_CLARO);
          box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
          transition: all 0.2s ease;
        }

        .button--diagnosis {
          display: flex;
          flex-direction: row;
          background-color: ${COLOR_CELESTE};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-color: ${COLOR_CELESTE};
          border-radius: 10px;
          color: ${COLOR_AZUL_OSCURO};
          font-size: 0.8em;
          font-weight: bold;
          width: 40%;
          height: 18%;
          outline: none;
          text-transform: capitalize;
          margin: 25%;
        }

        .button-diagnosis:hover {
          color: $(COLOR_GRIS_CLARO);
          box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
          transition: all 0.2s ease;
        }

        .button-diagnosis--title {
          font-size: 20px;
          color: #25233c;
          font-weight: 900;
          margin-left: 10px;
          margin-top: 10px;
        }

        .button-diagnosis--icon {
          font-size: 30px;
          margin-left: 10px;
          color: #25233c;
        }

        @media only screen and (max-width: 1400px) and (min-width: 1302px) {
          .button--diagnosis {
            display: flex;
            flex-direction: row;
            background-color: ${COLOR_CELESTE};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-color: ${COLOR_CELESTE};
            border-radius: 10px;
            color: ${COLOR_AZUL_OSCURO};
            font-size: 0.8em;
            font-weight: bold;
            width: 45%;
            height: 18%;
            outline: none;
            text-transform: capitalize;
            margin: 25%;
          }
        }

        @media only screen and (max-width: 768px) and (min-width: 440px) {
          .container__domaindata {
            background: ${COLOR_BLANCO};
            margin-top: 10px;
            border-radius: 15px;
            height: 400px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding: 10px;
            margin-bottom: 10px;
          }

          .container__domaindata--card {
            background: ${COLOR_GRIS_CLARO};
            display: flex;
            padding: 8px;
            flex-flow: column nowrap;
            height: 95%;
            width: 95%;
            align-items: center;
            border-radius: 20px;
          }

          .card__header {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 80%;
            text-align: center;
          }

          .container__domaindata--botton {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            height: 20%;
            text-align: center;
            padding: 0px;
          }

          .header__title {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 10%;
          }
          .card__section {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 75%;
          }

          .card__botton {
            display: flex;
            flex-direction: row;
            max-width: 15%;
            height: 35px;
            margin-left: 5%;
          }

          .header__title--domain {
            flex: 3;
            height: 100%;
            display: flex;
            flex-direction: row;
          }

          .header__id--type {
            font-size: 20px;
            color: #25233c;
            margin: 3px 10px 15px 20px;
            font-weight: 900;
            margin-left: 55px;
          }

          .header-id--icon {
            font-size: 10px;
            color: #1efd42;
          }

          .header__title--iddomain h2 {
            font-size: 15px;
            color: #25233c;
            text-align: right;
            margin: 5px;
            margin-right: 55px;
            font-weight: 900;
          }

          .header__title--iddomain {
            flex: 2;
            height: 100%;
          }

          .card__section--flatdata {
            flex: 2;
            height: 100%;
            text-align: left;
            padding: 2%;
            font-size: 13px;
            font-weight: 500;
            line-height: 34px;
          }

          .card__section--flatdata ul {
            list-style: none;
          }

          .card__section--realdata {
            flex: 2;
            height: 100%;
            padding: 2%;
            text-align: left;
            font-size: 13px;
            font-weight: 400;
            line-height: 34px;
          }

          .card__section--realdata ul {
            list-style: none;
          }

          .button--edit {
            background-color: ${COLOR_CELESTE};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-color: ${COLOR_CELESTE};
            border-radius: 10px;
            color: ${COLOR_AZUL_OSCURO};
            font-size: 12px;
            font-weight: bold;
            min-width: 100%;
            height: 100%;
            outline: none;
            text-transform: capitalize;
            margin-top: 55px;
          }

          .button-edit:hover {
            color: $(COLOR_GRIS_CLARO);
            box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
            transition: all 0.2s ease;
          }

          .button--diagnosis {
            display: flex;
            flex-direction: row;
            background-color: ${COLOR_CELESTE};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-color: ${COLOR_CELESTE};
            border-radius: 10px;
            color: ${COLOR_AZUL_OSCURO};
            font-weight: bold;
            min-width: 23%;
            height: 55%;
            outline: none;
            text-transform: capitalize;
            margin-left: 65%;
          }

          .button-diagnosis:hover {
            color: $(COLOR_GRIS_CLARO);
            box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
            transition: all 0.2s ease;
          }

          .button-diagnosis--title {
            font-size: 14px;
            min-width: 25px;
            margin: 5px;
            color: #25233c;
            font-weight: 900;
          }

          .button-diagnosis--icon {
            min-width: 18px;
            font-size: 18px;
            color: #25233c;
            margin-left: 1px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Domain_Data;
