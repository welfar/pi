import React, {useState} from 'react';
import PriceContainer from './PriceContainer';
import TabNav from '../../lib/util/TabNav/TabNav';
import Tab from '../../lib/util/TabNav/Tab';
import Slider from "react-slick";						/** Carousel */
import TextCards from './TextCards';
import Select from 'react-select';   /** DropDown */
import { COLOR_AZUL_OSCURO, COLOR_CELESTE, COLOR_BLANCO, COLOR_AZUL_CLARO, COLOR_GRIS_CLARO, COLOR_VERDE_CLARO } from '../../lib/util/Colors';
import Container_Section from '../Principal/Container_Section';
import TableProm from './TableProm';
import TableNextPricesMail from './TableNextPricesMail';
import TableNextPricesHosting from './TableNextPricesHosting';
import TableNextPricesDomain from './TableNextPricesDomain';


const dropdownStyles = {
	control: (base) => ({
    ...base,
		background: COLOR_GRIS_CLARO,
		border: '1px solid ${COLOR_CELESTE}',
    boxShadow: 'none',
		width: 150,
    '&:hover': {
        border: '1px solid  ${COLOR_CELESTE}',
    }
}),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? COLOR_BLANCO : COLOR_AZUL_OSCURO,
    padding: 5,
  }),
	menu: (base) => ({
    ...base,
		width: 150,
		backgroundColor: COLOR_GRIS_CLARO,
		borderRadius: 10,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 500ms';

    return { ...provided, opacity, transition };
	},
	dropdownIndicator: (provided) => ({
    ...provided,
		color: COLOR_AZUL_OSCURO,
		'&:hover':{color: COLOR_AZUL_CLARO}
  }),
}

const optionsTime = [
	{value: 'monthly',  	label: 'Mensual'  },
	{value: 'quarterly',  label: 'Trimestral' },
	{value: 'biannual', 	label: 'Semestral' },
	{value: 'annual',  			label: 'Anual'    },
]

const btnSetPricesMail = () => alert("Modal Ajustar Precios de correo");
const btnSetPricesHosting = () =>  alert("Modal Ajustar Precios de Hosting");
const btnSetProm = () =>alert("Modal Agregar Promoción");
const btnPricesDomain = () => alert("Tabla de precios de Dominios");
const btnSetPricesDomain = () => alert("Modal Ajustar Precios de Dominios");



const settingsCarousel = {
  dots: true,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const PricesLayout = ()=>{

	const [timeSelected,setTimeSelected] = useState({value:'annual', label:'Anual'});
	const [selected, setSelected] = useState('Correo');
	const [selectedHist, setSelectedHist] = useState('Correo');

	const changeTime = timeSelected => setTimeSelected ( timeSelected);



		return(
			<React.Fragment>

				{/** Primera Sección Precios Actuales  */}
				<Container_Section title='Precios Actuales'>

					<div className='actualPrices__Dropdown'>
						<Select options={optionsTime} styles={dropdownStyles}   onChange={changeTime} value={timeSelected} />
						</div>

						{/** Precios Actuales valor Anual  */}
					{timeSelected.value === 'annual' 
						?  	<div className='actualPrices__Content'>
							<PriceContainer tittle="Correo">
							<br/>
						<TextCards  priceAct="$15.000" priceRen="$75.000"  time="AÑO"/>
						<div className='button__container'>   
							<button className='button' onClick={btnSetPricesMail}>      Ajustar     </button> 	
						</div>			
						</PriceContainer>

						<PriceContainer tittle="Hosting">
		
							<Slider {...settingsCarousel}>
								<TextCards capacity='500MB' priceAct="$24.990" 		priceRen="$49.990" time="AÑO"/>
								<TextCards capacity='1 GB'		 priceAct="$44.990"		 priceRen="$89.990"  time="AÑO"/>
								<TextCards capacity='5 GB'		 priceAct="$164.990" 	priceRen="$329.990"  time="AÑO"/>
							</Slider>
							<div className='button__container'> 
								<button className='button' onClick={btnSetPricesHosting}>    Ajustar     </button> 		
							</div>
						</PriceContainer>

						<PriceContainer tittle="Dominios">

							<img className="cardContent__img" src="https://mi.com.co/img/Bebe_Precios.png"/>
							<div className='domain__buttons'>
								<div className='button__container'>  <button className='button' onClick={btnPricesDomain}>Precios</button>  </div>
								<div className='button__container'>	 <button className='button' onClick={btnSetPricesDomain}>Ajustar</button>	</div>
						</div>
						</PriceContainer>
						</div>

					/** Precios Actuales valor Mensual  */
						:  timeSelected.value === 'monthly'
						? <div className='actualPrices__Content'>
							
						<PriceContainer tittle="Correo">
						<br/>
					<TextCards  priceAct="$1.000" priceRen="$5.000" time="MES"/>
					<div className='button__container'>   
						<button className='button'>      Ajustar     </button> 	
					</div>			
					</PriceContainer>

					<PriceContainer tittle="Hosting">
	
						<Slider {...settingsCarousel}>
							<TextCards capacity='500MB' priceAct="$2.500" 		priceRen="$4.990" time="MES"/>
							<TextCards capacity='1 GB'		 priceAct="$4.990"		 priceRen="$8.990" time="MES"/>
							<TextCards capacity='5 GB'		 priceAct="$15.000" 	priceRen="$27.500" time="MES"/>
						</Slider>
						<div className='button__container'> 
							<button className='button'>    Ajustar     </button> 		
						</div>
					</PriceContainer>


					{/** Card Precios Actuales Dominios */}

					<PriceContainer tittle="Dominios">

						<img className="cardContent__img" src="https://mi.com.co/img/Bebe_Precios.png"/>
						<div className='domain__buttons'>
							<div className='button__container'>  <button className='button' onClick={btnPricesDomain}>Precios</button>  </div>
							<div className='button__container'>	 <button className='button'>Ajustar</button>	</div>
					</div>
					</PriceContainer>
					</div>

					/** Precios Actuales valor Trimestral */
					: timeSelected.value === 'quarterly'
					? <div className='actualPrices__Content'>
						
					<PriceContainer tittle="Correo">
					<br/>
				<TextCards  priceAct="$3.000" priceRen="$15.000" time="TRIM"/>
				<div className='button__container'>   
					<button className='button'>      Ajustar     </button> 	
				</div>			
				</PriceContainer>

				<PriceContainer tittle="Hosting">

					<Slider {...settingsCarousel}>
						<TextCards capacity='500MB' priceAct="$10.000" 		priceRen="$20.000" time="TRIM."/>
						<TextCards capacity='1 GB'		 priceAct="$20.000"		 priceRen="$25.000" time="TRIM."/>
						<TextCards capacity='5 GB'		 priceAct="$60.000" 	priceRen="$80.000" time="TRIM."/>
					</Slider>
					<div className='button__container'> 
						<button className='button'>    Ajustar     </button> 		
					</div>
				</PriceContainer>

				<PriceContainer tittle="Dominios">

					<img className="cardContent__img" src="https://mi.com.co/img/Bebe_Precios.png"/>
					<div className='domain__buttons'>
						<div className='button__container'>  <button className='button'>Precios</button>  </div>
						<div className='button__container'>	 <button className='button'>Ajustar</button>	</div>
				</div>
				</PriceContainer>
				</div>

					/** Precios Actuales valor Semestral */
				: timeSelected.value === 'biannual'
				? <div className='actualPrices__Content'>
					
				<PriceContainer tittle="Correo">
				<br/>
			<TextCards  priceAct="$7.500" priceRen="$40.000" time="SEM."/>
			<div className='button__container'>   
				<button className='button'>      Ajustar     </button> 	
			</div>			
			</PriceContainer>

			<PriceContainer tittle="Hosting">

				<Slider {...settingsCarousel}>
					<TextCards capacity='500MB' priceAct="$30.000" 		priceRen="$40.000" time="SEM."/>
					<TextCards capacity='1 GB'		 priceAct="$60.000"		 priceRen="$50.000" time="SEM."/>
					<TextCards capacity='5 GB'		 priceAct="$120.000" 	priceRen="$160.000" time="SEM."/>
				</Slider>
				<div className='button__container'> 
					<button className='button'>    Ajustar     </button> 		
				</div>
			</PriceContainer>

			<PriceContainer tittle="Dominios">

				<img className="cardContent__img" src="https://mi.com.co/img/Bebe_Precios.png"/>
				<div className='domain__buttons'>
					<div className='button__container'>  <button className='button'>Precios</button>  </div>
					<div className='button__container'>	 <button className='button'>Ajustar</button>	</div>
			</div>
			</PriceContainer>
			</div>:  null
					}
											
				</Container_Section>

				{/** Segunda Sección Códigos promocionales  */}

				<Container_Section title='Códigos de Promoción'> 
				<div></div>
				<div>
					 <TableProm/> 

					 <div className='promoCode__add--container'>  
						 <p className='promoCode__add--text'>Agregar Promoción </p>
						<button className='promoCode__add--button' onClick={btnSetProm}>+</button> 
						</div>
				</div>
				
				
				</Container_Section>

					{/** Tercera Sección Próximos precios  */}
				<Container_Section title='Próximos Precios'>
					<div></div> 
					<div className='nextPrices__container'>
					<TabNav  	tabs={['Correo', 'Hosting', 'Dominios']} 	selected={ selected } 	setSelected={setSelected} >

						<Tab isSelected={ selected === 'Correo'} > 
							<TableNextPricesMail/>
						</Tab>

						<Tab isSelected={ selected === 'Hosting'} >
						 <TableNextPricesHosting/>
						</Tab>

						<Tab isSelected={ selected === 'Dominios'} >
						<TableNextPricesDomain/>
						 </Tab>

						</TabNav>
					</div>
				</Container_Section>

					{/** Cuarta Sección Hitórico de  precios  */}

				<Container_Section title='Histórico de Precios'>
					<div></div>
					<div className='nextPrices__container'>
					<TabNav  tabs={['Correo', 'Hosting', 'Dominios']} selected={ selectedHist }  	setSelected={setSelectedHist}	>

						<Tab isSelected={ selectedHist === 'Correo'} >
						<TableNextPricesMail/>
						</Tab>

						<Tab isSelected={ selectedHist === 'Hosting'} >
						<TableNextPricesHosting/>
						</Tab>
						<Tab isSelected={ selectedHist === 'Dominios'} >
						<TableNextPricesDomain/>
						 </Tab>
						</TabNav>
					</div>


				</Container_Section>

				<style jsx>{`

					.nextPrices__container {
						padding: 0  16px 10px 16px;
					}

					.actualPrices__Dropdown {
						padding-top: 12px;
					}

				  .actualPrices__Content {
						padding: 20px 0 20px 0;
						display: flex;
						flex-direction: row;
					}


					.button {
						background-color: ${COLOR_CELESTE};
						box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
						border-color: ${COLOR_CELESTE};
						border-radius: 10px;
						color: ${COLOR_AZUL_OSCURO};
						font-size: 0.8em;
						font-weight: bold;
						outline:none;
						text-transform: capitalize;
						}

						.button:hover {
							color: $(COLOR_GRIS_CLARO);
              box-shadow: 0px 0px 5px 4px rgba(49,141,255,0.28);
              transition: all 0.2s ease;
						}

					.button__container {
						display: flex;
						flex-direction: column;
						height: 35px;
						width: 80px;
						margin: auto auto 0 auto;
						line-height: 28px;
					}
					.container__actualprices--cards {
						display:flex;
						justify-content: center;
					}

					.promoCode__add--container {
						display: flex;
						padding: 0  16px 10px 16px;
						flex-direction: row;
						justify-content: right;
					}

					.promoCode__add--text {
						padding-top: 5px;
						margin-right: 10px;
						font-weight: bold;
						color: ${COLOR_AZUL_OSCURO};
						font-size: 14px;
						line-height: 25px;
					}

					.promoCode__add--button {
						margin-right: 10px;
						width: 35px;
						height: 35px;
						border-radius: 50%;
						background-color: ${COLOR_VERDE_CLARO};
						border-color: ${COLOR_VERDE_CLARO};
						font-weight: bold;
						outline: none;
						font-size: 30px;
						line-height: 30px;
						color: ${COLOR_AZUL_OSCURO};
					}
					.promoCode__add--button:hover {
						transform: scale(1.05);
						box-shadow: 0 6px 4px darkgray;
						font-size: 31px;
						line-height: 31px;
						background-color: ${COLOR_AZUL_OSCURO};
						border-color: ${COLOR_AZUL_OSCURO};
						color: ${COLOR_VERDE_CLARO};
					}
					.promoCode__add--button:active {
						transform: scale(0.95);
						font-size: 29px;
						line-height: 29px;
						box-shadow: 0 5px 3px darkgray;
					}
				

					.cardContent__img {
						min-width: 25%;
						min-height: 82%;
						padding-top: 15%;
						padding-bottom: 10%;
						margin: 0 20% 4% 20%;
					}

					.domain__buttons {
						display: flex;
						flex-direction: row;
						justify-content: center;
						padding: 0 10%;
					}
				`} </style>

			</React.Fragment>

		)}

		export default PricesLayout;
