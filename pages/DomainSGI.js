import Head from "next/head";
import DomainSGILayout from "../Components/DomainSGI/DomainSGILayout";
import LayoutCompleted from "../Components/Principal/LayoutComplete";

export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Administración de Dominios SGI</title>
      </Head>

      <LayoutCompleted view="Administración SGI 2.0">
        <DomainSGILayout />
      </LayoutCompleted>
    </>
  );
}
