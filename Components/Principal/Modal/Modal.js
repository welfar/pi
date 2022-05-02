import React, { Children } from 'react'
import {COLOR_GRIS_CLARO, COLOR_AZUL_OSCURO, COLOR_AZUL_CLARO, COLOR_BLANCO} from '../../../lib/util/Colors';
import {FaCompressArrowsAlt} from 'react-icons/fa';

const Modal = (
  {
    status,
    changeStatus,
    modalTitle,
    modalDetail,
    children
  }
  ) => {
  return (
    <React.Fragment>

      { status && 

        <div className="modal__background">
            <div className="modal__container">
              <div className="modal__containter--header">
                <div className="modal__containter--headerone">
                <p className="header__title"> {modalTitle}</p> 
                </div> 
                <div className="modal__containter--headertwo">
                <p className="header__detailService">{modalDetail}</p> 
                </div> 
              </div>

                <div className="modal__container--content">
                  {children}
                </div>

                <button 
                onClick={() => changeStatus (false)}
                className="modal__containter--closeButton">
                  <FaCompressArrowsAlt/>
                  </button>
            </div>
          </div>
      }



    <style jsx>{`
        .modal__background {
          width: 100vw;
          height: 100vh;
          position: fixed;
          z-index:999;
          top:   0;
          left: 0;
          background: rgba(0,0,0,.5);
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal__container {
          min-width: 40vw;
          min-height: 50vh;
          background: ${COLOR_GRIS_CLARO};
          position: relative;
          border-radius: 15px;
          box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
        }

        .modal__containter--header {
          width: 100%;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          background-color: ${COLOR_AZUL_OSCURO};
          padding-bottom: 0px;
          display: flex;
          flex-direction: column;
          margin: 0px;
        }

        .modal__containter--headertwo {
          width: 100%;
          margin: 0px;
          padding-bottom: 10px;
        }
        .modal__containter--headerone {
          width: 100%;
          margin: 0px;
        }

        .header__title {
          font-size: 1.9rem;
          text-align: center;
          padding-top: 1rem;
          font-weight: bold;
          color: ${COLOR_BLANCO};
          margin: 0px;
        }

        .header__detailService {
          text-align: right;
          margin-right: 25px;
          font-weight: bold;
          color: ${COLOR_BLANCO};
          padding-right: 30px; 
          margin: 0px;
        }

        .modal__container--content {
          padding: 20px;
        }

        .modal__containter--closeButton {
          position: absolute;
          top: -10px;
          right: -10px;
          border-radius: 50%;
          border-color: ${COLOR_BLANCO};
          outline: none;
          width: 32px;
          height: 30px;
          background: ${COLOR_BLANCO};
          color: ${COLOR_AZUL_OSCURO};
          font-size: 15px;
        }

        .modal__containter--closeButton:hover {
          color: ${COLOR_AZUL_CLARO};
        }


    `} </style>
      
    </React.Fragment>
  )
}

export default Modal;
