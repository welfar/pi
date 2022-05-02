import React from "react";
import { Accordion } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { domainDataState } from "../../recoil/atoms";
import styles from "./Btn.module.css";

const DomainContactDetails = () => {
  const domainData = useRecoilValue(domainDataState);

  return (
    <div className="container__domaincontactdetails">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={styles.accordion__header}>
            <div className="container__domaincontactdetails--tittle">
              Datos contacto de dominio
            </div>
          </Accordion.Header>
          <hr />
          <Accordion.Body>
            <div className="container__columns">
              <div>
                <strong>
                  <label>Registrante</label>
                </strong>
                <div className="container__inputs">
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="empresa"
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="correo"
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="nit"
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="dirección"
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="ciudad"
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="departamento"
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="pais"
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    value="telefono"
                    disabled
                  />
                </div>

                <strong>
                  <label>Técnico</label>
                </strong>
                <div className="container__inputs">
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].CompanyName} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].Email} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].ContactId} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].StreetAddress} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].City} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].Providence}*/
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].CountryCode} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[1].Phone1} */
                    disabled
                  />
                </div>
              </div>

              <div>
                <strong>
                  <label>Administrativo</label>
                </strong>
                <div className="container__inputs">
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].CompanyName} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].Email} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].ContactId} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].StreetAddress} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].City} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].Providence}*/
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].CountryCode} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[0].Phone1} */
                    disabled
                  />
                </div>

                <strong>
                  <label>Facturación</label>
                </strong>
                <div className="container__inputs">
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].CompanyName} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].Email} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].ContactId} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].StreetAddress} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].City} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].Providence}*/
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].CountryCode} */
                    disabled
                  />
                  <input
                    type="text"
                    className="container__columns--disabled"
                    /* value={domainData.body[0].Contacts[2].Phone1} */
                    disabled
                  />
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <style jsx>{`
        .container__domaincontactdetails {
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

        .container__domaincontactdetails--tittle {
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

        .container__columns {
          display: flex;
          font-size: 20px;
          margin: 0 0 10px 20px;
        }

        .container__columns > div {
          width: 50%;
          padding: 10px;
        }

        .container__inputs {
          margin-bottom: 30px;
          font-size: 18px;
        }

        .container__columns--disabled {
          display: flex;
          flex-direction: column;
          color: #000;
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default DomainContactDetails;
