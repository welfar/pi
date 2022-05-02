import React from "react";
import { useRecoilValue } from "recoil";
import { registerSelectState } from "../../recoil/atoms";
import { Accordion } from "react-bootstrap";
import styles from "./Btn.module.css";
import SelectList from "./DNSRegisterSelect/SelectList";
import RegATable from "./RenderTable/RegATable";
import RegAAAATable from "./RenderTable/RegAAAATable";
import RegMXTable from "./RenderTable/RegMXTable";
import RegCNAMETable from "./RenderTable/RegCNAMETable";
import RegTXTTable from "./RenderTable/RegTXTTable";

const DNSRegister = () => {
  const register = useRecoilValue(registerSelectState);

  return (
    <div className="container__dnsregister">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={styles.accordion__header}>
            <div className="container__dnsregister--tittle">
              <p>Registros DNS</p>
            </div>
          </Accordion.Header>
          <hr />
          <Accordion.Body>
            <div>
              <p className="container__dnsregister--text">
                A continuación se listan los registros DNS configurados para el
                dominio <strong>"pepito.com.co"</strong>
              </p>
              <SelectList />
              {register === "A" ? (
                <RegATable />
              ) : register === "AAAA" ? (
                <RegAAAATable />
              ) : register === "MX" ? (
                <RegMXTable />
              ) : register === "CNAME" ? (
                <RegCNAMETable />
              ) : register === "TXT" ? (
                <RegTXTTable />
              ) : null}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

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
          color: #25233c;
        }

        .container__dnsregister--text {
          font-size: 20px;
          margin: 0 0 10px 20px;
        }
      `}</style>
    </div>
  );
};

export default DNSRegister;
