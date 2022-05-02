import Head from "next/head";
import React from "react";
import { useRecoilState } from "recoil";
import { navleftHideState } from "../../recoil/atoms";
import Navleft from "./Navleft";
import Header from "./Header";
import { COLOR_AZUL_OSCURO, COLOR_GRIS_CLARO } from "../../lib/util/Colors";

const LayoutCompleted = ({ children, view }) => {
  const [navleftHide, setNavleftHide] = useRecoilState(navleftHideState);

  const handleNavleft = () => {
    setNavleftHide((navleftHide) => !navleftHide);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        {/* CSS PROPIO */}
        <link rel="stylesheet" href="/css/styles.css" />
        {/* FUENTE */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        {/* ICONOS */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link href="/fontawesome/css/all.css" rel="stylesheet" />
        {/* CAROUSEL REACT SLICK */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div className="container__body">
        {navleftHide ? (
          <div className="row">
            <div className="navleft__body--hide">
              <Navleft
                navleftHide={navleftHide}
                handleNavleft={handleNavleft}
              />
            </div>
            <div className="body__content--hide">
              <Header view={view} />
              {children}
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="navleft__body">
              <Navleft
                navleftHide={navleftHide}
                handleNavleft={handleNavleft}
              />
            </div>
            <div className="body__content">
              <Header view={view} />
              {children}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .row {
          margin: 0px;
        }

        .body__content {
          width: 85%;
          padding: 16px;
          margin-left: 15%;
          background: ${COLOR_GRIS_CLARO};
        }

        .body__content--hide {
          width: 93%;
          padding: 16px;
          margin-left: 7%;
          background: ${COLOR_GRIS_CLARO};
        }

        .container__body {
          margin: 0px;
          padding: 0px;
          height: 100%;
          width: 100%;
          display: block;
        }

        .navleft__body {
          font-size: 14px;
          min-height: 100%;
          height: 100%;
          color: white;
          width: 15%;
          position: fixed;
          display: block;
          background-color: ${COLOR_AZUL_OSCURO};
        }

        .navleft__body--hide {
          font-size: 14px;
          min-height: 100%;
          height: 100%;
          color: white;
          width: 7%;
          position: fixed;
          display: block;
          background-color: ${COLOR_AZUL_OSCURO};
        }

        @media (max-width: 1000px) {
          .navleft__body {
            width: 10%;
          }

          .body__content {
            width: 90%;
            margin-left: 10%;
          }
        }

        @media (max-width: 575px) {
          .navleft__body {
            width: 20%;
          }

          .body__content {
            width: 80%;
            margin-left: 20%;
          }
        }
      `}</style>
    </>
  );
};

export default LayoutCompleted;
