import React from "react";
import { COLOR_VERDE_BRILLANTE } from "../../lib/util/Colors";
import Container_Section from "../Principal/Container_Section";
import Simple_Search from "../Principal/Simple_Search";
import CustomerDataDomain from "./CustomerDataDomain";
import { BsCircleFill } from "react-icons/bs";
import DomainData from "./DomainData";
import DomainContactDetails from "./DomainContactDetails";
import Nameservers from "./Nameservers";
import ContainerSectionPersonalize from "./ContainerSectionPersonalize";
import DNSRegister from "./DNSRegister";

const DomainSGILayout = () => {
  return (
    <>
      <Simple_Search
        Query="Buscar Dominio:"
        Typequery="Ingrese dominio que desea buscar..."
        TitleButton="Buscar"
      />
      <Container_Section title="Datos del Cliente Asociado al Dominio">
        <div></div>
        <div>
          <CustomerDataDomain />
        </div>
      </Container_Section>
      <ContainerSectionPersonalize title="Administración de dominio: solo-api.co">
        <div className="costumerData__header--circle">
          <BsCircleFill />
        </div>
        <div>
          <DomainData />
          <DomainContactDetails />
          <Nameservers />
          <DNSRegister />
        </div>
      </ContainerSectionPersonalize>

      <style jsx>{`
        .costumerData__header--circle {
          color: ${COLOR_VERDE_BRILLANTE};
          font-size: 15px;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default DomainSGILayout;
