import React from "react";
import { Accordion } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { domainDataState, domainState } from "../../recoil/atoms";
import styles from "./Btn.module.css";

const NameServers = () => {
  const domainData = useRecoilValue(domainDataState);
  const domain = useRecoilValue(domainState);

  return (
    <div className="container__nameserver">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={styles.accordion__header}>
            <div className="container__nameserver--tittle">Nameservers</div>
          </Accordion.Header>
          <hr />
          <Accordion.Body>
            <p className="container__nameserver--text">
              A continuación se listan los servidores de nombre configurados
              para el dominio
              <strong>
                {/* pepito.com.co */} {domain}
              </strong>
            </p>
            <div className="container__nameserver--input">
              <div className="container__nameserver--column">
                <strong>
                  <label
                    className="form__container-label-input form__container-label-input--label-config"
                    htmlFor="name"
                  >
                    Nameserver
                  </label>
                </strong>
                <input
                  type="text"
                  className="container__columns--disabled"
                  /* value={domainData.body[0].Dns[0]} */
                  disabled
                />

                <strong>
                  <label
                    className="form__container-label-input form__container-label-input--label-config"
                    htmlFor="name"
                  >
                    Nameserver
                  </label>
                </strong>
                <input
                  type="text"
                  className="container__columns--disabled"
                  /* value={domainData.body[0].Dns[2]} */
                  disabled
                />
              </div>

              <div className="container__nameserver--column container__nameserver--column2">
                <strong>
                  <label
                    className="form__container-label-input form__container-label-input--label-config"
                    htmlFor="name"
                  >
                    Nameserver
                  </label>
                </strong>
                <input
                  type="text"
                  className="container__columns--disabled"
                  /* value={domainData.body[0].Dns[1]} */
                  disabled
                />

                <strong>
                  <label
                    className="form__container-label-input form__container-label-input--label-config"
                    htmlFor="name"
                  >
                    Nameserver
                  </label>
                </strong>
                <input
                  type="text"
                  className="container__columns--disabled"
                  /* value={domainData.body[0].Dns[3]} */
                  disabled
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

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

        .container__nameserver--tittle {
          display: flex;
          align-items: center;
          margin: 15px 0 0 20px;
          font-size: 25px;
          font-weight: bold;
          color: #25233c;
        }

        hr {
          background: #b0b0b0;
          width: 97%;
          height: 1px;
          margin: 17px;
        }

        .container__nameserver--text {
          font-size: 20px;
          margin: 0 0 0 20px;
        }

        .container__nameserver--input {
          padding: 0 0 1% 4%;
          width: 100%;
          display: flex;
          margin-left: 20px;
          justify-content: flex-start;
        }

        .form__container-label-input {
          padding-top: 20px;
        }

        .container__nameserver--column {
          height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        .container__nameserver--column2 {
          margin-left: 20%;
        }

        .form__container-label-input--label-config {
          font-size: 20px;
        }

        .container__columns--disabled {
          height: 43px;
          padding: 0 0 0 15px;
          display: flex;
          flex-direction: column;
          color: #000;
          border: none;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 0px 10px;
        }
      `}</style>
    </div>
  );
};

export default NameServers;
