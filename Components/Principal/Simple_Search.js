import React from "react";
import {
  COLOR_AZUL_OSCURO,
  COLOR_BLANCO,
  COLOR_CELESTE,
} from "../../lib/util/Colors";

const Simple_Search = ({ Query, Typequery, TitleButton }) => {
  return (
    <React.Fragment>
      <div className="container__search">
        <div className="container__search--header">
          <div className="header--text">
            <span>{Query}</span>
          </div>
        </div>
        <div className="container__section--search">
          <div className="search--bar">
            <input
              className="form-control"
              type="search"
              placeholder={Typequery}
            />
          </div>
          <div className="search--button">
            <button className="button--title">{TitleButton}</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container__search {
          display: flex;
          flex-direction: column;
          background: ${COLOR_BLANCO};
          border-radius: 10px;
          margin-top: 10px;
          height: 160px;
        }

        .container__search--header {
          width: 100%;
          height: 40%;
          text-align: left;
          justify-content: flex-end;
        }

        .container__section--search {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 60%;
          text-align: right;
        }

        .search--bar {
          width: 45%;
          height: 50%;
          margin-left: 15px;
          text-align: right;
        }

        .header--text {
          height: 40%;
          margin-top: 30px;
          margin-left: 15px;
        }

        .search--button {
          width: 10%;
          height: 40%;
          margin-left: 20px;
          text-align: right;
        }

        .button--title {
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

        .button--title:hover {
          color: $(COLOR_GRIS_CLARO);
          box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
          transition: all 0.2s ease;
        }

        @media only screen and (max-width: 765px) and (min-width: 440px) {
          .container__search {
            display: flex;
            flex-direction: column;
            background: ${COLOR_BLANCO};
            border-radius: 10px;
            margin-top: 10px;
            height: 140px;
          }

          .container__section--search {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 60%;
            text-align: right;
          }

          .search--bar {
            min-width: 65%;
            height: 50%;
            margin-left: 5px;
            text-align: right;
          }

          .header--text {
            height: 40%;
            margin-top: 30px;
            margin-left: 5px;
          }

          .search--button {
            min-width: 22%;
            height: 40%;
            margin-left: 10px;
            text-align: right;
          }

          .button--title {
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

          .button--title:hover {
            color: $(COLOR_GRIS_CLARO);
            box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
            transition: all 0.2s ease;
          }
        }

        @media only screen and (max-width: 440px) and (min-width: 250px) {
          .container__search {
            display: flex;
            flex-direction: column;
            background: ${COLOR_BLANCO};
            border-radius: 10px;
            margin-top: 10px;
            height: 110px;
          }

          .container__section--search {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 60%;
            text-align: right;
          }

          .search--bar {
            min-width: 65%;
            height: 50%;
            margin-left: 15px;
            text-align: right;
          }

          .header--text {
            height: 40%;
            margin-top: 20px;
            margin-left: 15px;
          }

          .header--text span {
            font-size: 12px;
          }

          .search--button {
            min-width: 22%;
            height: 50%;
            margin-top: 2px;
            margin-left: 10px;
            text-align: right;
          }

          .button--title {
            background-color: ${COLOR_CELESTE};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-color: ${COLOR_CELESTE};
            border-radius: 10px;
            color: ${COLOR_AZUL_OSCURO};
            font-size: 13px;
            font-weight: bold;
            width: 100%;
            height: 100%;
            outline: none;
            text-transform: capitalize;
          }

          .button--title:hover {
            color: $(COLOR_GRIS_CLARO);
            box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
            transition: all 0.2s ease;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Simple_Search;
