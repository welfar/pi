import React from 'react';
import { COLOR_AZUL_OSCURO, COLOR_GRIS_CLARO, COLOR_AZUL_CLARO, COLOR_GRIS} from '../../lib/util/Colors';
import {FaUserAstronaut, FaLock} from "react-icons/fa";
import mitt from 'next/dist/next-server/lib/mitt';


const btnLogin = () =>{
    const user= 'andrea@mi.com.co';
    const pass= '1234';
    alert("hola");
}

const LoginForm = ()=>{

    return(  
        
        <React.Fragment>
            
            <div className= 'loginContainer'> 

                <div className= 'loginContainer__image'>
                    <h1 className='loginContainer__image--tittle'>Panel interno</h1>
                    <img className='sesion__img' src='https://mi.com.co/img/Login-panelinterno-2.png'/>
                    <img className='micomco__logo' src='https://hostingvictory.com/wp-content/uploads/2020/02/mi.com_.co-hosting-logo.png'/>
                </div>
                
                
                <div className='loginContainer__sesion--ellipse'>               </div>
                <div className='loginContainer__sesion'>

                    
                        <h2 className='loginContainer__sesion--tittle'>Bienvenido</h2>
                        <p className='loginContainer__sesion--subtittle'> Inicia sesión en tu cuenta</p>

                        <div className='loginContainer__sesion--item'>
                    
                            <div className='icon'> <FaUserAstronaut/>  </div>

                            <div className='inf'>
                                <p className='inf__tittle'>Usuario</p>
                                <input className='input-text' type='text' ></input>
                            </div>  
                        </div>

                        <div className='loginContainer__sesion--item'>

                            <div className='icon'>  <FaLock/>                        </div>

                            <div className='inf'>
                                <p className='inf__tittle'>Contraseña</p>
                                <input className='input-text' type='password'></input>
                            </div>
                        </div>

                        <div className='btn__container'>
                            <button className="loginContainer__sesion--button" onClick={btnLogin}> Ingresar </button> 
                        </div>                 
                    
                    </div>
                </div>

        <style jsx> {`
        @media (min-width: 1000px) {

        .loginContainer {
            border-radius: 30px 30px 30px 30px;
            box-shadow: -3px 6px 13px 3px ${COLOR_AZUL_OSCURO};
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0px;
            min-height: 580px;
            max-height: 650px;
            min-width: 850px;
            max-width: 1000px;
            padding: 0px;
            height: 70%;
            width:  50%;
        }

        .loginContainer__image {
            align-items: center;
            background-color: ${COLOR_GRIS_CLARO};
            border-radius: 30px 0px 0px 30px;
            display: flex;
            flex-direction: column;
            padding-top: 6%;
            width:50%;
            height: 100%;
        }

        .sesion__img {
            width: 50%;
            height: 70%;
            padding: 0;
        } 

        .micomco__logo {
            width: 40%;
            height: 18%;
            padding: 0;
            margin: 0;
        }

        .loginContainer__image--tittle {
            color: ${COLOR_AZUL_OSCURO};
            font-family: Roboto;
            font-size: 38px;
            font-style: normal;
            font-weight: bold;
            letter-spacing: 1.2px;
            line-height: 64px;
            text-transform: uppercase;
        }
        
        .loginContainer__sesion--ellipse {
            display: none;
        }

        .loginContainer__sesion {
            align-items: center;
            background-color: ${COLOR_AZUL_OSCURO};
            border-radius: 0px 30px 30px 0px;
            color: #fff;
            display: flex;
            flex-direction: column;
            padding-top: 6%;
            height: 100%;
            width: 50%;
        }

        .loginContainer__sesion--tittle {
            font-size: 38px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            letter-spacing: 2px;
            line-height: 64px;
        }
        
        .loginContainer__sesion--subtittle {
            margin-top: 2%;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 25px;
            line-height: 30px;
        }

       
        .loginContainer__sesion--item {
            align-items: center;
            display: flex;
            flex-direction: row;
            max-width: 350px;
            padding-top: 5%;
            padding-bottom: 20px;
            width: 70%;
        }

        .icon {
            font-size: 33px;
            width: 50px;
            height: 100%;
            margin-right: 15px;
            justify-content: center;
            display: flex;
            align-items: flex-end;
        }

        .inf {
            align-self: rigth;
            height:100%;
        }
        .inf__tittle{
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.5px;
        }

        .input-text {
            background-clip: padding-box;
            background-color: #fff;
            border: 1px solid ${COLOR_GRIS_CLARO};
            border-radius: 10px;
            color: ${COLOR_AZUL_OSCURO};
            font-size: 18px;
            font-weight: 400;
            line-height: 1.5;
            outline: none;
            opacity: 0.8;
            padding: 2px 4px 4px 10px;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            width: 250px;
            
        }

        .input-text:focus {
            background-color: #fff;
            opacity:0.8;
            border:${COLOR_AZUL_CLARO};
            outline: 0;
            box-shadow: 0 0 0 0.1rem ${COLOR_AZUL_CLARO};
          }

        .btn__container{
            display: flex;
            width: 45%;
            max-width: 155px;
            height: 7%;
            margin-top: 10%;
            flex-direction: row;
            align-items: center;
        
        }

        .loginContainer__sesion--button {
            background-color: ${COLOR_AZUL_CLARO};
            border-radius: 10px;
            width: 200Px;
            height: 100%;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 35px;
            color: #fff;
            text-transform: uppercase;
            border-color: ${COLOR_AZUL_CLARO};
            outline:none;
        }

        .loginContainer__sesion--button:hover {
            color: $(COLOR_GRIS_CLARO);
            box-shadow: 0px 0px 6px 5px rgba(49,141,255,0.28);
            transition: all 0.2s ease;
        }
        }

        @media (max-width: 999px) {

            .loginContainer {
                display: flex;
                flex-direction: column;
                width: 100vw;
                height: 100vh;
                min-width: 350px;
                min-height: 750px;
                background-color: ${COLOR_GRIS_CLARO};
            }

           
            .loginContainer__image {
                align-items: center;
                background-color: ${COLOR_GRIS_CLARO};
                display: flex;
                flex-direction: column;
                max-height: 40vh;
                padding-top: 3%;
                max-width: 100vw;  
            }

            .sesion__img {
                width: 30%;
                height: 60%;                
            } 

            .micomco__logo {

                width: 32%;;
                height: 20%;
                max-width: 125px;
                max-height: 120px;    
            }

            .loginContainer__image--tittle {

                text-transform: uppercase;
                letter-spacing: 1.5px;
                margin-top: 10px;
                color: ${COLOR_AZUL_OSCURO};
                font-weight: bold;
                font-size: calc(20px + 1.5vw);
            }

            .loginContainer__sesion--ellipse {
                display: block;
                position: relative;
                top: 1.2px;
                height: 8vh;
                min-height: 15px;
                width: 100%;
                border-radius: 50% / 100% 100% 0 0;
                background-color: ${COLOR_AZUL_OSCURO};  
                border: 0px solid ${COLOR_AZUL_OSCURO};
            }


            .loginContainer__sesion {

                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: ${COLOR_AZUL_OSCURO};
                height: 100%;
                padding-top: 2.5 px;
                padding-bottom: 3%;
                color: #fff;
            }
    
            .loginContainer__sesion h2 {
                font-size: 2.2rem;
                letter-spacing: 1.5px;
            }
            
            .loginContainer__sesion p {
                letter-spacing: 0.8px;
                padding-top: 1%;
                padding-bottom: 1%;
                font-size: 1.5rem;
            }
           
            .loginContainer__sesion--item {
                display: flex;
                flex-direction: row;
                width: 70%;
                max-width: 380px;
                justify-content: space-between;
                align-items: center;
                padding-top: 2%;
                padding-bottom: 40px;
                align-items: self-end;
    
            }
    
            .icon {
                font-size: 33px;
                width: 25%;
                max-width: 70px;
                height: 100%;
                justify-content: center;
                display: flex;
                align-items: flex-end;
            }
    
            .inf {
                align-self: rigth;
                width: 100%;
                max-width: 300px;
                height: 100%;
            }
            .inf > p {
                margin: 0;
                padding-bottom: 1%;
                padding-top: 5px;
                font-size: 23px;
                letter-spacing: 1.3px;
            }
    
            .inf > input {
                width: 100%;
                height: 45%;
            }
    
            .input-text {
    
                font-size: 18px;
                font-weight: 400;
                line-height: 1.5;
                color: ${COLOR_AZUL_OSCURO};
                background-color: #fff;
                opacity: 0.7;
                background-clip: padding-box;
                border: 1px solid ${COLOR_GRIS_CLARO};
                border-radius: 10px;
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                outline: none;
                padding: 2px 4px 4px 10px;
            }
    
            .input-text:focus {
                background-color: #fff;
                border:${COLOR_AZUL_CLARO};
                outline: 0;
                box-shadow: 0 0 0 0.1rem ${COLOR_AZUL_CLARO};
              }
    
            .btn__container{
    
                display: flex;
                width: 45%;
                max-width: 155px;
                height: 15%;
                flex-direction: row;
                align-items: center;
                
            }
    
            .loginContainer__sesion--button{
                background-color: ${COLOR_AZUL_CLARO};
                text-transform: uppercase;
                font-size: 20px;
                color: white;
                border-radius: 10px;
                width: 200Px;
                height: 85%;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 35px;
                color: #fff;
                text-transform: uppercase;
                border-color: ${COLOR_AZUL_CLARO};
                outline:none;
                }

            .loginContainer__sesion--button:hover {
                color: $(COLOR_GRIS_CLARO);
                box-shadow: 0px 0px 6px 5px rgba(49,141,255,0.28);
                transition: all 0.2s ease;
        }
        }
       
   
        `}</style>


            
        </React.Fragment>
        
   
             
        )
}

export default LoginForm;