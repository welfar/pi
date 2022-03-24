import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_GRIS } from '../../lib/util/Colors';
import { FaAngleDown } from "react-icons/fa";

const Header = ({
  view
}) => {
  return(
    <React.Fragment>
      <div className="header__background">
        <Row>
          <Col md={9} sm={6}>
            <span className="header__title header__title--hiden">Bienvenido al panel de {view}</span>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div className="buttom__container cursor__pointer" onClick={()=>alert('Me despliego')}>
              <Row className="w-100 m-0">
                <Col md={3} xs={4} className="centrar pr-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                    alt="Dominios Hosting Correos Corporativos Certificados Digitales Colombia"
                    className="img_user img-fluid"
                  />
                </Col>
                <Col md={9} xs={8} className="align-middle centrar mb-1">
                  <h3 className="user__name">Adriana</h3>
                  <FaAngleDown size={16} className="icon__buttomHeader__down"/>
                </Col>
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
                      background-color 0.25s ease-in-out,
                      border-color 0.25s ease-in-out,
                      box-shadow 0.25s ease-in-out;
        }

        .buttom__container:hover {
          background: #CDCDCD;
        }

        .header__title {
          font-weight: bold;
          font-size: 25px;
          color: ${COLOR_AZUL_OSCURO};
        }

        .header__background {
          width:100%;
          padding:16px;
          height: 80px;
          border-radius: 10px;
          background: ${COLOR_BLANCO};
        }

        @media (max-width: 767px) {

          .header__title {
            font-size: 28px;
          }

          .buttom__container {
            width: 70%;
          }

        }

        @media (max-width: 748px) {

          .header__title {
            font-size: 25px;
          }

        }

        @media (max-width: 575px) {

          .buttom__container {
            justify-content: center;
            margin: 0;
          }

        }

      `}</style>
    </React.Fragment>
  );
}

export default Header;