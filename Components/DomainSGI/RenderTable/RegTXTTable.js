import React from "react";
import { useRecoilValue } from "recoil";
import { dataTableRegTXTState } from "../../../recoil/atoms";

const RegTXTTable = () => {
  const data = useRecoilValue(dataTableRegTXTState);

  return (
    <>
      <div className="table__containter">
        <div
          className="first_row-titles"
          style={{ display: "flex", width: "100%" }}
        >
          <div className="names_colums" style={{ width: "33.3%" }}>
            SUBDOMINIO
          </div>
          <div className="names_colums" style={{ width: "33.3%" }}>
            DOMINIO
          </div>
          <div className="names_colums" style={{ width: "33.3%" }}>
            DESTINO
          </div>
        </div>
        <hr />
        <div className="render_rows">
          {data !== undefined &&
            data.map((item, index) => {
              return (
                <>
                  <div className="row">
                    <div key={index} style={{ display: "flex", width: "100%" }}>
                      <div className="row__content" style={{ width: "33.3%" }}>
                        {item.subdomain}
                      </div>
                      <div className="row__content" style={{ width: "33.3%" }}>
                        {item.domain}
                      </div>
                      <div className="row__content" style={{ width: "33.3%" }}>
                        {item.purpose}
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
        </div>
      </div>

      <style jsx>{`
        .table__containter {
          margin: 0 20px 10px 20px;
          padding: 0;
        }

        hr {
          margin-top: 0;
          margin-bottom: 0;
        }

        .names_colums {
          margin: 10px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-weight: bold;
        }

        .row:hover {
          background-color: #d6eaf8;
          cursor: pointer;
        }

        .row__content {
          margin: 10px;
          display: flex;
          justify-content: space-evenly;
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default RegTXTTable;
