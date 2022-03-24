import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { dataTableRegAAAAState } from "../../../recoil/atoms";
import { COLOR_CELESTE } from "../../../lib/util/Colors";
import { FaPlus, FaRegSave } from "react-icons/fa";
import RegAAAATable from "../RenderTable/RegAAAATable";

const RegisterAAAA = () => {
  const [data, setData] = useRecoilState(dataTableRegAAAAState);
  const [item, setItem] = useState({ domain: "pepito.com.co" });
  const [editItem, setEditItem] = useState(false);
  const [id, setId] = useState("");
  const [errors, setErrors] = useState({});

  const ipv6Validation = () => {
    let errors = {};
    let regexIPv6 =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;

    if (!item.ippurpose) {
      errors.ippurpose = "El campo 'IPv6 Destino' es requerido";
    } else if (!regexIPv6.test(item.ippurpose.trim())) {
      errors.ippurpose = "Este campo sólo acepta números";
    }
    return errors;
  };

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
    setErrors(ipv6Validation());
  };

  return (
    <>
      <div className="container__registerA-AAAA">
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
            // onChange={handleChange}
            // value={item.domain}
            value="pepito.com.co"
            disabled
          />
        </div>

        <div className="container__label-input">
          <strong>
            <label htmlFor="ippurpose">IPv6 DESTINO:</label>
          </strong>
          <input
            className="input-config"
            id="ippurpose"
            type="text"
            name="ippurpose"
            placeholder="0:0:0:0:0:ffff:c000:aa"
            onChange={(e) => handleChange(e)}
            value={item.ippurpose !== undefined ? item.ippurpose : ""}
            required
          />
          {errors.ippurpose && <p className="msg">{errors.ippurpose}</p>}
        </div>

        <button
          className={
            editItem
              ? "itemContainerBotton__buttons--save"
              : "itemContainerBotton__buttons--plus"
          }
          onClick={(e) => {
            editItem ? updateItem(e) : sendData(e);
          }}
          disabled={item.subdomain === "" || item.ippurpose === ""}
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
        .container__registerA-AAAA {
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
          height: 25px;
          padding-left: 15px;
          border-radius: 10px;
        }

        input::placeholder {
          color: #e5dddd;
        }

        .msg {
          fontweight: bold;
          color: #f66060;
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

      <RegAAAATable setItem={setItem} setEditItem={setEditItem} setId={setId} />
    </>
  );
};

export default RegisterAAAA;
