import React ,{useState} from 'react';
import { COLOR_BLANCO, COLOR_CELESTE, COLOR_AZUL_OSCURO, COLOR_GRIS_CLARO,COLOR_AZUL_CLARO} from '../../lib/util/Colors';
import Select from 'react-select';   /** DropDown */

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
    fontSize: 14,
    padding: 4,
   
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

const optionsSearch = [
    {value: 'domain',  	     label: 'Dominio'},
    {value: 'idClient',        label: ' ID. Cliente'},
    {value: 'idPurchase', 	label: 'ID. Compra' },
    {value: 'RefPayment',  label: 'Ref. de Pago' },
]

const BillingFilter_Search = ({
  Query,
  Typequery,
}) =>{

    const [filterSelected,setFilterSelected] = useState({value:'idPurchase', label:'ID. Compra'});
    const changeFilter = filterSelected => setFilterSelected ( filterSelected);

    
  return(
    <React.Fragment>
<div className="container__search">
                <div className="container__search--header">
                    <div className="header--text">
                    <span>{Query}</span>
                    </div>
                </div>

                <div className="container__section--search">
                  <div className="Search--filter">
                  <div className='actualPrices__Dropdown'>
						<Select options={optionsSearch} styles={dropdownStyles}   onChange={changeFilter} value={filterSelected}  isSearchable={false}
                        isRtl={false}/>
				</div>

                  </div>

                      <div className="search--bar">
                      <input className="form-control" type="search" placeholder={Typequery} />
                    </div>
                    <div className="search--button">
                        <button className='button--title'>Buscar</button>
                    </div>
                </div>
                </div>
                  
            
        <style jsx>{`

  
            .container__search{
               display: flex;
               flex-direction: column;
               background: ${COLOR_BLANCO};
               border-radius: 10px;
               margin-top: 10px;
               height: 160px;
            }


            .container__search--header{
                width: 100%;
                height: 40%;
                text-align: left;
                justify-content: flex-end;
                margin-bottom:25px;
            }


            .container__section--search{
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 60%;
                text-align: right;
            }

            .search--bar{
                width: 45%;
                height: 50%;
                margin-left: 15px;
                text-align: right;
            }

            .header--text {
                height: 40%;
                margin-top: 30px;
                margin-left: 15px;
            }

            .Search--filter {
                padding-left: 15px;
            }



            .search--button{
                width: 105px;
                height: 40%;
                margin-left:20px; 
                text-align: right;
            }

            .button--title {
				background-color: ${COLOR_CELESTE};
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-color: ${COLOR_CELESTE};
				border-radius: 10px;
				color: ${COLOR_AZUL_OSCURO};
				font-size: 17px;
				font-weight: bold;
				width: 100%;
				height: 100%;
                padding: 0 15px;
				outline:none;
				text-transform: capitalize;
		    }

            .button--title:hover {
			  color: $(COLOR_GRIS_CLARO);
              box-shadow: 0px 0px 5px 4px rgba(49,141,255,0.28);
              transition: all 0.2s ease;
			}



        `}</style>





    </React.Fragment>)
}

export default BillingFilter_Search;