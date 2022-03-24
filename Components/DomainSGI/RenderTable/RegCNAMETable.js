import React from "react";
import { useRecoilState } from "recoil";
import { dataTableRegCNAMEState } from "../../../recoil/atoms";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const RegCNAMETable = ({ setItem, setEditItem, setId }) => {
  const [data, setData] = useRecoilState(dataTableRegCNAMEState);

  const handleEdit = (item) => {
    setItem(item);
    setEditItem(true);
    setId(item.subdomain);
  };

  const handleDelete = (item) => {
    const deleteItem = data.filter((elem) => elem.subdomain !== item.subdomain);
    setData(deleteItem);
  };

  return (
    <>
      <div className="table__containter">
        <div
          className="first_row-titles"
          style={{ display: "flex", width: "100%" }}
        >
          <div className="names_colums" style={{ width: "25%" }}>
            SUBDOMINIO
          </div>
          <div className="names_colums" style={{ width: "25%" }}>
            DOMINIO
          </div>
          <div className="names_colums" style={{ width: "25%" }}>
            DESTINO
          </div>
          <div className="names_colums" style={{ width: "25%" }}></div>
        </div>
        <hr />
        <div className="render_rows">
          {data !== undefined &&
            data.map((item, index) => {
              return (
                <>
                  <div key={index} style={{ display: "flex", width: "100%" }}>
                    <div className="row__content" style={{ width: "20%" }}>
                      {item.subdomain}
                    </div>
                    <div className="row__content" style={{ width: "20%" }}>
                      {item.domain}
                    </div>
                    <div className="row__content" style={{ width: "20%" }}>
                      {item.purpose}
                    </div>
                    <div className="row__content" style={{ width: "20%" }}>
                      <div className="content--btns">
                        <button
                          className="btn--edit"
                          onClick={() => {
                            handleEdit(item);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn--delete"
                          onClick={() => {
                            handleDelete(item);
                          }}
                        >
                          <FaTrashAlt />
                        </button>
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
          margin: 0 15px 10px 0;
          padding: 0;
          width: 100%;
        }
        hr {
          margin-top: 0;
          margin-bottom: 0;
        }

        .names_colums {
          margin: 10px;
          display: flex;
          align-items: center;
          font-weight: bold;
        }

        .row__content {
          margin: 10px;
          padding-left: 10px;
          display: flex;
          font-size: 18px;
        }

        .content--btns {
          margin-right: 12px;
        }

        .btn--edit {
          color: #000;
          border: none;
          outline: none;
          background: transparent;
        }

        .btn--delete {
          color: #dd1144;
          border: none;
          outline: none;
          background: transparent;
        }
      `}</style>
    </>
  );
};

export default RegCNAMETable;
