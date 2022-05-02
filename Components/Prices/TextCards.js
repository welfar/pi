import React from 'react';
import { COLOR_AZUL_OSCURO, COLOR_PURPURA } from '../../lib/util/Colors';


const TextCards = ({
  capacity,
  priceAct,
  priceRen,
	time,
}) =>{

  return(

    <React.Fragment>

    <div className='cardsContent'>
      <div className='cardsContent__title'> 
        {capacity}
      </div>
			<p className='cardsContent__subtittle'> Activación </p>
			<div className='cardsContent__prices'>
					<h3> {priceAct}</h3>
					<p>COP/{time}</p>
			</div>

			<hr/>
			<p className='cardsContent__subtittle'>Renovación</p>
      <div className='cardsContent__prices'>
				<h3> {priceRen}  </h3>
				<p>COP/{time}</p>
			</div>
		</div>

  <style jsx>{`

     .cardsContent{
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0 auto;
      padding-top: 10px;
      width: 70%;
			}
      .cardsContent__title {
				font-style: normal;
				font-weight: bold;
				font-size: 20px;
				color:  ${COLOR_AZUL_OSCURO};
				padding-bottom: 0;
			}
      .cardsContent__subtittle {
				font-weight: 850;
				font-size: 15px;
        letter-spacing: 0.7px;
				color: ${COLOR_AZUL_OSCURO};
			}
      .cardsContent__prices {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: flex-end;
			}
      .cardsContent__prices h3 {
				font-style: normal;
				font-weight: 900;
				font-size: 1.3em;
				line-height: 40px;
				color: ${COLOR_AZUL_OSCURO};
				text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				padding-right: 5px;
			}

			.cardsContent__prices p {
				font-weight: 600;
				font-size: 0.7em;
				color: ${COLOR_PURPURA};
			}

      hr {
            margin: 2% auto 3% auto;
            width: 70%;
            opacity: 40%;
            background-color: gray;
						height: 0.1px;
            }
          
          `}

            </style>
    </React.Fragment>
    
    );



}
export default TextCards;