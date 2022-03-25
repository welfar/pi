import Head from "next/head";
import DomainSGILayout from "../Components/DomainSGI/DomainSGILayout";
// import LayoutCompleted from "../Components/Principal/LayoutComplete";
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';

export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Administración de Dominios SGI</title>
      </Head>

      <LayoutComplete2 view="Administración SGI 2.0">
        <DomainSGILayout />
      </LayoutComplete2>
    </>
  );
}
