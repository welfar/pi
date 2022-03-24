import React, { Component } from "react";
import {
  COLOR_AZUL_CLARO,
  COLOR_AZUL_OSCURO,
  COLOR_BLANCO,
  COLOR_GRIS_CLARO,
  COLOR_GRIS_OSCURO,
  COLOR_PURPURA,
  COLOR_VERDE_CLARO,
} from "../../lib/util/Colors";
import Link from "next/link";
import { VscCircuitBoard } from "react-icons/vsc";
import { Col, Row } from "react-bootstrap";

class Navleft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: "",
      views: [
        {
          icon: "fa-chart-bar",
          view: "Dashboard",
          label: "Servicios",
        },
        {
          icon: "fa-shopping-basket",
          view: "Orders",
          label: "Órdenes",
        },
        {
          icon: "fa-file-invoice-dollar",
          view: "Billing",
          label: "Facturación",
        },
        {
          icon: "fa-headset",
          view: "Support",
          label: "Soporte",
        },
        {
          icon: "fas fa-users-cog",
          view: "Customers",
          label: "Clientes",
        },
        {
          icon: "fa-tags",
          view: "Products",
          label: "Productos",
        },
        {
          icon: "fa-mail-bulk",
          view: "Mail",
          label: "Correo",
        },
        {
          icon: "fas fa-donate",
          view: "Prices",
          label: "Precios",
        },
        {
          icon: "fa-hands-helping",
          view: "Commercial",
          label: "Comercial",
        },
        {
          icon: "fa-project-diagram",
          view: "Processes",
          label: "Procesos",
        },
        {
          icon: "fas fa-users-cog",
          view: "UserManager",
          label: "Usuarios",
        },
        {
          icon: "fa-network-wired",
          view: "DomainSGI",
          label: "Dominios-SGI",
        },
      ],
    };
  }

  componentDidMount() {
    //traemos la url actual para pintar el navItem actual
    const url = window.location.toString();
    const loc = url.split("#");
    const newurl = loc[0].split("/");
    this.setState({
      currentUrl: newurl[3],
    });
  }

  render() {
    const { currentUrl, views } = this.state;

    const { handleNavleft, navleftHide } = this.props;

    return (
      <React.Fragment>
        <div className="navbar__title--container no-seleccionar">
          {navleftHide ? (
            <Col md={12} xs={12} className="p-0 centrar">
              <a
                onClick={() => handleNavleft()}
                className="container__svg--title"
              >
                <VscCircuitBoard />
              </a>
            </Col>
          ) : (
            <>
              <Col md={9} className="pl-0 mt-1 navbar__title--hide text-right ">
                <span className="navbar__title">Panel Interno</span>
                <br />
                <span className="navbar__subtitle">Mi.com.co</span>
              </Col>
              <Col md={3} className="p-0 centrar">
                <a
                  onClick={() => handleNavleft()}
                  className="container__svg--title"
                >
                  <VscCircuitBoard />
                </a>
              </Col>
            </>
          )}
        </div>

        {navleftHide
          ? views.map((view, index) => {
              return (
                <NavItemHide
                  key={index}
                  icon={`fas ${view.icon}`}
                  view={`/${view.view}`}
                  selected={currentUrl == view.view}
                />
              );
            })
          : views.map((view, index) => {
              return (
                <NavItem
                  key={index}
                  icon={`fas ${view.icon}`}
                  view={`/${view.view}`}
                  label={view.label}
                  selected={currentUrl == view.view}
                />
              );
            })}

        <style jsx>{`
          .navbar__title--container {
            padding: 2rem 0.5rem 2rem 0.5rem;
            display: flex;
            justify-content: left;
            align-items: center;
            border-bottom: 1px solid ${COLOR_GRIS_OSCURO};
            margin-bottom: 3rem;
            background: ${COLOR_AZUL_OSCURO};
          }

          .container__svg--title {
            color: ${COLOR_BLANCO};
            font-size: 40px;
            cursor: pointer;
          }

          .navbar__title {
            color: ${COLOR_AZUL_CLARO};
            font-size: 18px;
            font-weight: bold;
            line-height: 1;
          }

          .navbar__subtitle {
            font-size: 14px;
            font-weight: 500;
            text-align: right;
            color: ${COLOR_BLANCO};
          }

          @media (max-width: 1263px) {
            .navbar__title {
              font-size: 14px;
            }

            .navbar__subtitle {
              font-size: 12px;
            }

            .container__svg--title {
              font-size: 35px;
            }
          }

          @media (max-width: 1062px) {
            .container__svg--title {
              font-size: 30px;
            }
          }

          @media (max-width: 1000px) {
            .container__svg--title {
              font-size: 40px;
            }

            .navbar__title--container {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

class NavItemHide extends Component {
  render() {
    const { icon, view, selected } = this.props;

    return (
      <React.Fragment>
        <div className="navbar__paddingLeft">
          {selected ? (
            <div className="item__navbar--selected">
              <Link href={view}>
                <a className="cursor__pointer label__link--selected centrar">
                  <i className={`${icon} icon__size icon__color--selected`} />
                </a>
              </Link>
            </div>
          ) : (
            <div className="item__navbar--container">
              <Link href={view}>
                <a className="cursor__pointer label__link centrar">
                  <i className={`${icon} icon__size`} />
                </a>
              </Link>
            </div>
          )}
        </div>

        <style jsx>{`
          .title-link {
            font-size: 14px;
          }

          .item__navbar--container {
            padding: 0.7rem 0rem 0.7rem 0rem;
            font-size: 18px;
          }

          .icon__size {
            font-size: 22px;
          }

          .label__link {
            text-decoration: none;
            transition: color 0.25s ease-in-out,
              background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
              box-shadow 0.25s ease-in-out;
          }

          .label__link:hover {
            color: ${COLOR_PURPURA};
          }

          .label__link--selected {
            position: relative;
            text-decoration: none;
            font-weight: bold;
            z-index: 1;
            color: ${COLOR_AZUL_OSCURO};
            transition: color 0.25s ease-in-out,
              background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
              box-shadow 0.25s ease-in-out;
          }

          .icon__color--selected {
            color: ${COLOR_AZUL_CLARO};
          }

          .item__navbar--selected {
            width: 101%;
            outline: none;
            position: relative;
            padding: 0.6rem 0rem 0.6rem 0rem;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            background: ${COLOR_GRIS_CLARO};
          }

          .item__navbar--selected::before,
          .item__navbar--selected::after {
            content: "";
            width: 20px;
            height: 20px;
            right: 0;
            position: absolute;
            outline: none;
          }

          .item__navbar--selected::before {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="%23EAEDF7" stroke="%23EAEDF7" stroke-opacity="0.8" d="M0 0 Q20 0 20 20 L20 0Z" /></svg>');
            bottom: -19px;
          }

          .item__navbar--selected::after {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="%23EAEDF7" d="M0 20 Q20 20 20 0 L20 20Z" /></svg>');
            top: -19px;
          }

          @media (max-width: 1000px) {
            .item__navbar--container {
              padding-left: 0;
            }

            .item__navbar--selected {
              padding-left: 0;
            }

            .navbar__paddingLeft {
              padding-left: 0;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

class NavItem extends Component {
  render() {
    const { icon, view, selected, label } = this.props;

    return (
      <React.Fragment>
        <div className="navbar__paddingLeft">
          {selected ? (
            <div className="item__navbar--selected">
              <Link href={view}>
                <a className="cursor__pointer label__link--selected">
                  {/* <span className="shape__selected" /> */}
                  <Row className="centrar">
                    <Col md={3} xs={12} className="centrar">
                      <i
                        className={`${icon} icon__size icon__color--selected`}
                      />
                    </Col>
                    <Col md={9} className="navbar__title--hide">
                      <span className="title-link no-seleccionar">{label}</span>
                    </Col>
                  </Row>
                </a>
              </Link>
            </div>
          ) : (
            <div className="item__navbar--container">
              <Link href={view}>
                <a className="cursor__pointer label__link">
                  <Row className="centrar">
                    <Col md={3} xs={12} className="centrar">
                      <i className={`${icon} icon__size`} />
                    </Col>
                    <Col md={9} className="navbar__title--hide">
                      <span className="title-link no-seleccionar">{label}</span>
                    </Col>
                  </Row>
                </a>
              </Link>
            </div>
          )}
        </div>

        <style jsx>{`
          .title-link {
            font-size: 14px;
          }

          .item__navbar--container {
            padding: 0.6rem 0rem 0.6rem 1.5rem;
            font-size: 18px;
          }

          .icon__size {
            font-size: 20px;
          }

          .label__link {
            text-decoration: none;
            transition: color 0.25s ease-in-out,
              background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
              box-shadow 0.25s ease-in-out;
          }

          .label__link:hover {
            color: ${COLOR_PURPURA};
          }

          .label__link--selected {
            position: relative;
            text-decoration: none;
            font-weight: bold;
            z-index: 1;
            color: ${COLOR_AZUL_OSCURO};
            transition: color 0.25s ease-in-out,
              background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
              box-shadow 0.25s ease-in-out;
          }

          .icon__color--selected {
            color: ${COLOR_AZUL_CLARO};
          }

          .navbar__paddingLeft {
            padding-left: 1rem;
          }

          .item__navbar--selected {
            width: 101%;
            outline: none;
            position: relative;
            padding: 0.6rem 0rem 0.6rem 1.5rem;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            background: ${COLOR_GRIS_CLARO};
          }

          .item__navbar--selected::before,
          .item__navbar--selected::after {
            content: "";
            width: 20px;
            height: 20px;
            right: 0;
            position: absolute;
            outline: none;
          }

          .item__navbar--selected::before {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="%23EAEDF7" stroke="%23EAEDF7" stroke-opacity="0.8" d="M0 0 Q20 0 20 20 L20 0Z" /></svg>');
            bottom: -19px;
          }

          .item__navbar--selected::after {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="%23EAEDF7" d="M0 20 Q20 20 20 0 L20 20Z" /></svg>');
            top: -19px;
          }

          @media (max-width: 1000px) {
            .item__navbar--container {
              padding-left: 0;
            }

            .item__navbar--selected {
              padding-left: 0;
            }

            .navbar__paddingLeft {
              padding-left: 0;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Navleft;
