import React from "react";
import { useRecoilState } from "recoil";
import { COLOR_CELESTE } from "../../lib/util/Colors";
import SelectList from "./DNSRegisterSelect/SelectList";
import RegisterAAAA from "./RegisterType/RegisterAAAA";
import RegisterA from "./RegisterType/RegisterA";
import RegisterCNAME from "./RegisterType/RegisterCNAME";
import RegisterMX from "./RegisterType/RegisterMX";
import RegisterTXT from "./RegisterType/RegisterTXT";
import { registerSelectState } from "../../recoil/atoms";

const DNSRegister = () => {
  const [register, setRegister] = useRecoilState(registerSelectState);

  return (
    <div className="container__dnsregister">
      <div className="container__dnsregister--tittle">
        <p>Registros DNS</p>
      </div>
      <hr />
      <div>
        <p className="container__dnsregister--text">
          A continuación se listan los registros DNS configurados para el
          dominio <strong>"pepito.com.co"</strong>
        </p>
        <SelectList />
        {register === "A" ? (
          <RegisterA />
        ) : register === "AAAA" ? (
          <RegisterAAAA />
        ) : register === "MX" ? (
          <RegisterMX />
        ) : register === "CNAME" ? (
          <RegisterCNAME />
        ) : register === "TXT" ? (
          <RegisterTXT />
        ) : null}
      </div>
      <style jsx>{`
        .container__dnsregister {
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

        hr {
          background: #b0b0b0;
          width: 97%;
          height: 1px;
          margin: 17px;
        }

        .container__dnsregister--tittle {
          display: flex;
          align-items: center;
          margin: 15px 0 0 20px;
          font-size: 25px;
          font-weight: bold;
        }

        .container__dnsregister--text {
          font-size: 20px;
          margin: 0 0 10px 20px;
        }

        .itemContainerBotton {
          display: flex;
          justify-content: flex-end;
          margin: 0px 25px;
          height: 50px;
          widht: 100%;
        }

        .itemContainerBotton__buttons--plus {
          background-color: ${COLOR_CELESTE};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-color: ${COLOR_CELESTE};
          border-radius: 50%;
          font-size: 0.8em;
          width: 50px;
          height: 50px;
          outline: none;
          margin: 5px;
        }

        .itemContainerBotton__buttons--plus:hover {
          box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
          transition: all 0.2s ease;
          transform: scale(1.1);
        }

        .itemContainerBotton__buttons--plusIcon {
          font-size: 25px;
          color: #25233c;
        }
      `}</style>
    </div>
  );
};

export default DNSRegister;
