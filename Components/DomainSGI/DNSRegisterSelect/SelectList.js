import React from "react";
import { useRecoilState } from "recoil";
import { registerSelectState } from "../../../recoil/atoms";

const SelectList = () => {
  const [optionSelect, setOptionSelect] = useRecoilState(registerSelectState);

  const handleChange = (e) => {
    e.preventDefault();
    setOptionSelect(e.target.value);
  };

  return (
    <div className="select">
      <select
        className="select--config"
        name="register"
        id="register"
        onChange={(e) => handleChange(e)}
      >
        <option value="">Tipo</option>
        <option value="A">Registros A</option>
        <option value="AAAA">Registros AAAA</option>
        <option value="MX">Registros MX</option>
        <option value="CNAME">Registros CNAME</option>
        <option value="TXT">Registros TXT</option>
      </select>

      <style jsx>{`
        .select {
          margin: 0 0 20px 20px;
        }

        .select--config {
          padding-left: 10px;
          margin: 10px 0 0 0;
          height: 50px;
          width: 170px;
          border: none;
          outline: none;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default SelectList;
