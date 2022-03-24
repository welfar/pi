import React from 'react';
import { COLOR_BLANCO, COLOR_AZUL_OSCURO, COLOR_GRIS_OSCURO } from '../../lib/util/Colors';

const DashboardHeader = () => {
  return(
    <React.Fragment>
    <div className="dashboard__container--head">
    <img src="https://mi.com.co/img/mrweb.png" className="img-fluid img__mrWeb" />

    <div className="container__goals">

      <div className="goals__left">
        <p  className="goals__left--title">Vamos Camino a </p>
        <p  className="goals__left--content"> 40K Cuentas Activas</p>
        <p  className="goals__left--content"> 75k Dominios</p>
      </div>
      <div className="goals__line"></div>

      <div className="goals__right">
        <div>
        <p  className="goals__right--subtitle"> Activas </p>
        <p  className="goals__right--subtitle"> Contratadas  </p>
        <p  className="goals__right--subtitle">  Dominios </p>
        </div>

        <div>
        <p  className="goals__right--subtitle"> 34.200  </p>
        <p  className="goals__right--subtitle"> 45.200  </p>
        <p  className="goals__right--subtitle"> 55.000</p>
        </div>
        
      </div>

    </div>
  </div>

  <style jsx>{`


.dashboard__container--head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${COLOR_BLANCO};
}
.dashboard__container--head img {
  width: 10%;
  min-width: 100px;
  margin-left: 18%;
}

.container__goals {
  width: 70%;
  border-radius: 15px;
  background-color: ${COLOR_AZUL_OSCURO};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 2%;
}

.goals__left {
  width: 50%;
  text-align: right;
}

.goals__left--title {
  font-size: 1.5rem;
  margin-top: 0px;
  
}
.goals__left--content {
  font-size: 1.2rem;
}

.goals__line {
  height: 90%;
  width: 1px;
  background: ${COLOR_GRIS_OSCURO}; 
  
}

.goals__right {
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  margin-top: 15px;
}
.goals__right--subtitle {
  padding-right: 15px;
  margin: 5px;
}

`}</style>

  </React.Fragment>
  );
}

export default DashboardHeader;