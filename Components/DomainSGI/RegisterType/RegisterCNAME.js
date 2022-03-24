import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { dataTableRegCNAMEState } from "../../../recoil/atoms";
import { COLOR_CELESTE } from "../../../lib/util/Colors";
import RegCNAMETable from "../RenderTable/RegCNAMETable";
import { FaPlus, FaRegSave } from "react-icons/fa";

const RegisterCNAME = () => {
  const [data, setData] = useRecoilState(dataTableRegCNAMEState);

  const [item, setItem] = useState({ domain: "pepito.com.co" });
  const [editItem, setEditItem] = useState(false);
  const [id, setId] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    if (data.some((elem) => elem.subdomain === item.subdomain)) {
      alert("El subdominio esta repetido");
    } else {
      setData([...data, item]);
      setItem({ domain: "pepito.com.co" });
    }
  };

  const updateItem = (e) => {
    e.preventDefault();
    const editedItems = data.map((elem) =>
      elem.subdomain === id ? item : elem
    );
    setData(editedItems);
    setEditItem(false);
    setItem({ domain: "pepito.com.co" });
    setId("");
  };

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="container__registerCNAME">
        <div className="container__label-input">
          <strong>
            <label htmlFor="subdomain">SUBDOMINIO:</label>
          </strong>
          <input
            className="input-config"
            id="subdomain"
            type="text"
            name="subdomain"
            placeholder="www"
            onChange={(e) => handleChange(e)}
            value={item.subdomain !== undefined ? item.subdomain : ""}
            required
          />
        </div>
        <div className="container__label-input">
          <strong>
            <label htmlFor="domain">DOMINIO:</label>
          </strong>
          <input
            className="input-config"
            id="domain"
            type="text"
            name="domain"
            onChange={(e) => handleChange(e)}
            value="pepito.com.co"
            // value={form.name}
            disabled
          />
        </div>
        <div className="container__label-input">
          <strong>
            <label htmlFor="purpose">DESTINO:</label>
          </strong>
          <input
            className="input-config"
            id="purpose"
            type="text"
            name="purpose"
            placeholder="..."
            onChange={(e) => handleChange(e)}
            value={item.purpose !== undefined ? item.purpose : ""}
            required
          />
        </div>
        <button
          onClick={(e) => {
            editItem ? updateItem(e) : sendData(e);
          }}
          className={
            editItem
              ? "itemContainerBotton__buttons--save"
              : "itemContainerBotton__buttons--plus"
          }
        >
          <div
            className={
              editItem
                ? "itemContainerBotton__buttons--saveIcon"
                : "itemContainerBotton__buttons--plusIcon"
            }
          >
            {editItem ? <FaRegSave /> : <FaPlus />}
          </div>
        </button>
      </div>
      <style jsx>{`
        .container__registerCNAME {
          width: 100%;
          margin: 17px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        .container__label-input {
          margin: 0 10px 0 10px;
          display: flex;
          flex-direction: column;
        }

        .input-config {
          border: none;
          outline: none;
          height: 45px;
          padding-left: 15px;
          border-radius: 10px;
        }

        input::placeholder {
          color: #e5dddd;
        }

        .itemContainerBotton__buttons--plus {
          background-color: ${COLOR_CELESTE};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-color: ${COLOR_CELESTE};
          border-radius: 50%;
          font-size: 0.8em;
          width: 45px;
          height: 45px;
          outline: none;
          margin: 5px;
        }

        .itemContainerBotton__buttons--plus:hover {
          box-shadow: 0px 0px 5px 4px rgba(49, 141, 255, 0.28);
          transition: all 0.2s ease;
          transitem: scale(1.1);
        }

        .itemContainerBotton__buttons--plusIcon {
          font-size: 25px;
          color: #25233c;
        }

        .itemContainerBotton__buttons--save {
          background-color: #6afca8;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-color: #6afca8;
          border-radius: 50%;
          font-size: 0.8em;
          width: 45px;
          height: 45px;
          outline: none;
          margin: 5px;
        }

        .itemContainerBotton__buttons--save:hover {
          box-shadow: 0px 0px 5px 4px rgba(125, 206, 160, 0.25);
          transition: all 0.2s ease;
          transitem: scale(1.1);
        }

        .itemContainerBotton__buttons--saveIcon {
          font-size: 25px;
          color: #25233c;
        }
      `}</style>
      <RegCNAMETable
        setItem={setItem}
        setEditItem={setEditItem}
        setId={setId}
      />
    </>
  );
};

export default RegisterCNAME;
