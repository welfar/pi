import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { COLOR_VERDE_BRILLANTE } from "../../lib/util/Colors";
import Container_Section from "../Principal/Container_Section";
import SimpleSearchDomain from "./SimpleSearchDomain";
import CustomerDataDomain from "./CustomerDataDomain";
import { BsCircleFill } from "react-icons/bs";
import DomainData from "./DomainData";
import DomainContactDetails from "./DomainContactDetails";
import ContainerSectionPersonalize from "./ContainerSectionPersonalize";
import DNSRegister from "./DNSRegister";
import NameServers from "./nameServers";
import { useRecoilValue } from "recoil";
import { domainState } from "../../recoil/atoms";

const DomainSGILayout = () => {
  const domain = useRecoilValue(domainState);

  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("token") === undefined || cookies.get("token") === "") {
      window.location.href = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/`;
    }
  }, []);

  return (
    <>
      <SimpleSearchDomain />

      <Container_Section title="Datos del Cliente Asociado al Dominio">
        <div></div>
        <div>
          <CustomerDataDomain />
        </div>
      </Container_Section>
      <ContainerSectionPersonalize
        title={`Administración de dominio: ${domain}`}
      >
        <div className="costumerData__header--circle">
          <BsCircleFill />
        </div>
        <div>
          <DomainData />

          <NameServers />

          <DNSRegister />

          <DomainContactDetails />
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
