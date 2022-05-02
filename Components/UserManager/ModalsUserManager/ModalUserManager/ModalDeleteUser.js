import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { GoAlert } from "react-icons/go";
import { useRecoilState } from "recoil";
import { usersState } from "../../../../recoil/atoms";

const ModalDeleteUser = ({ user, changeStatus }) => {
  const [users, setUsers] = useRecoilState(usersState);

  const cookies = new Cookies();

  const handleDelete = (employee) => {
    const filteredUsers = users.filter((user) => user.email !== employee.email);

    axios
      .delete(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/v1/auth/delete`, {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
        data: {
          email: employee.email,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("esta es la respuesta", res);
          setUsers(filteredUsers);
        } else {
          console.log(error);
          alert("Error en la peticion");
        }
      });
  };

  return (
    <div className="container__userpermits">
      <div className="container">
        <GoAlert size={100} />
        <p>
          Se va a eliminar el ususario {user.name} , está segur@ de realizar
          esta acción?
        </p>
      </div>
      <div className="container__button">
        <input
          className="container__button container__button--cancel"
          type="button"
          value="Cancelar"
          onClick={(e) => {
            e.preventDefault();
            changeStatus(false);
          }}
        />
        <input
          className="container__button container__button--save"
          type="submit"
          value="Confirmar"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(user);
            changeStatus(false);
          }}
        />
      </div>
      <style jsx>{`
        .container__userpermits {
          display: flex;
          flex-direction: column;
        }

        .container {
          height: 230px;
          width: 510px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
          color: #25233c;
        }

        .container p {
          padding-top: 10px;
          font-size: 22px;
        }

        .container__button {
          padding: 0 6% 0 6%;
          display: flex;
          justify-content: space-evenly;
        }

        .container__button--cancel {
          background: #dd1144;
          border: none;
          border-radius: 10px;
          width: 125px;
          height: 40px;
          color: #ffffff;
        }

        .container__button--save {
          background: #0096ff;
          border: none;
          border-radius: 10px;
          width: 125px;
          height: 40px;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default ModalDeleteUser;
