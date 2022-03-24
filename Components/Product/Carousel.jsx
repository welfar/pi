import React, { Component } from "react";
import {FiPhoneCall} from "react-icons/fi";
import { COLOR_AZUL_CLARO, COLOR_AZUL_OSCURO, COLOR_BLANCO, COLOR_ROJO, COLOR_GRIS_CLARO,COLOR_CELESTE, COLOR_GRIS_OSCURO, COLOR_NEGRO, COLOR_PURPURA, COLOR_VERDE_CLARO } from '../../lib/util/Colors';
import Table_Carousel from ".//Table_Carousel";
import Slider from "react-slick";

const Carousel = ({
    settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "15px",
        slidesToShow: 1.65,
        speed: 500,
        responsive: [
          {
            breakpoint: 1302,
            settings: {
              dots: true,
              className: "center",
              centerMode: true,
              infinite: true,
              centerPadding: "15px",
              slidesToShow: 1.65,
              speed: 500
            }
          },
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              className: "center",
              centerMode: true,
              infinite: true,
              centerPadding: "1px",
              slidesToShow: 0.89,
              speed: 500
            }
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              className: "center",
              centerMode: true,
              infinite: true,
              centerPadding: "15px",
              slidesToShow: 0.97,
              speed: 500
            }
          },
          {
            breakpoint: 425,
            settings: {
              dots: true,
              className: "center",
              centerMode: true,
              infinite: true,
              centerPadding: "1px",
              slidesToShow: 0.97,
              speed: 500
            }
          }
        ]
    }

}) =>{

        return(
            <React.Fragment>
            <div className="container__domainProducts">
                <div className = "container__domainProducts--carousel">
                <Slider {...settings}>
                    <div>
                    <Table_Carousel
                    Product="Correo Mi.com.co"
                    Idservice="id. Servicio 125364"
                    >
                    </Table_Carousel>
                    </div>

                    <div>
                    <Table_Carousel
                    Product="Correo Corporativo"
                    Idservice="id. Servicio 324667"
                    >
                    </Table_Carousel>
                    </div>

                    <div>
                    <Table_Carousel
                    Product="Weebly"
                    Idservice="id. Servicio 859699"
                    >
                    </Table_Carousel>
                    </div>

                    <div>
                    <Table_Carousel
                    Product="Hosting 500MB"
                    Idservice="id. Servicio 129048"
                    >
                    </Table_Carousel>
                    </div>
                    
                    </Slider>
                </div>
            </div>

        <style jsx>{`

            .container__domainProducts{
               background: ${COLOR_BLANCO};
               border-radius: 15px;
               margin-top: 20px;
               height: 570px;
               display: flex;
               flex-direction: column;
               justify-content: center; 
               align-items: center;  
            }

            .container__domainProducts--carousel{
                width: 90%;
                height: 100%;
                padding-top: 3%;
                text-align: center;
                //border: 1px solid blue;
            }

        `}</style>

        </React.Fragment>
        );
}


export default Carousel;