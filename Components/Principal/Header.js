import React, { useState } from "react";
import Cookies from "universal-cookie";
import { Col, Row } from "react-bootstrap";
import {
  COLOR_AZUL_OSCURO,
  COLOR_BLANCO,
  COLOR_GRIS,
} from "../../lib/util/Colors";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/atoms";

const Header = ({ view }) => {
  if (typeof window !== "undefined") {
    /* const [user, setUser] = useRecoilState(userInfoState); */
    /* console.log("You are on the browser"); */
    let info = JSON.parse(sessionStorage.getItem("user"));
    console.log("sesionstorage", info);
    /* setUser(info); */
  }

  const userInfo = useRecoilValue(userInfoState);
  console.log("informacionususario", userInfo);
  const [session, setSession] = useState("");

  const cookies = new Cookies();

  const handleChange = (e) => {
    setSession(e.target.value);
    /* if (e.target.value === "account") {
      window.location.href = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/urldelperfil`;
    } */
    if (e.target.value === "logout") {
      Logout();
      /* sessionStorage.remove("user"); */
    }
  };

  const Logout = () => {
    cookies.remove("token", {
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    });
    window.location.href = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/`;
  };

  return (
    <>
      <div className="header__background">
        <Row>
          <Col md={9} sm={6}>
            <span className="header__title header__title--hiden">
              Bienvenido al panel de {view}
            </span>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div className="buttom__container cursor__pointer">
              <Row className="w-100 m-0">
                <Col md={3} xs={4} className="centrar pr-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                    alt="Dominios Hosting Correos Corporativos Certificados Digitales Colombia"
                    className="img_user img-fluid"
                  />
                </Col>
                <select
                  className="select--config"
                  name="profile"
                  id="profile"
                  onChange={(e) => {
                    e.preventDefault();
                    handleChange(e);
                  }}
                >
                  <option value={userInfo.nombre}>{userInfo.nombre}</option>
                  <option value="account">Mi cuenta</option>
                  {cookies.get("token") !== undefined && (
                    <option value="logout">Cerrar sesión</option>
                  )}
                </select>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .user__name {
          font-size: 16px;
          display: inline;
          margin: 0;
        }

        .img_user {
          width: 30px;
        }

        .buttom__container {
          display: flex;
          justify-content: center;
          position: relative;
          outline: none;
          border: 0 solid transparent;
          text-align: right;
          height: 48px;
          width: 100%;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          background: ${COLOR_GRIS};
          color: ${COLOR_AZUL_OSCURO};
          transition: color 0.25s ease-in-out,
            background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
            box-shadow 0.25s ease-in-out;
        }

        .buttom__container:hover {
          background: #cdcdcd;
        }

        .header__title {
          font-weight: bold;
          font-size: 25px;
          color: ${COLOR_AZUL_OSCURO};
        }

        .header__background {
          width: 100%;
          padding: 16px;
          height: 80px;
          border-radius: 10px;
          background: ${COLOR_BLANCO};
        }

        .select--config {
          margin: 0 10px 0 10px;
          width: 60%;
          border: none;
          outline: none;
          background: none;
          cursor: pointer;
        }

        @media (max-width: 767px) {
          .header__title {
            font-size: 28px;
          }

          .buttom__container {
            width: 80%;
          }

          .select--config {
            margin: 0;
          }
        }

        @media (max-width: 748px) {
          .header__title {
            font-size: 25px;
          }

          .select--config {
            margin: 0;
          }
        }

        @media (max-width: 575px) {
          .buttom__container {
            justify-content: center;
            margin: 0;
          }

          .select--config {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
