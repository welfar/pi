import Head from 'next/head';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import DashboardLayout from '../Components/Dashboard/DashboardLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Servicios</title>
      </Head>

      <LayoutComplete2 view="Servicios">
        <DashboardLayout />
      </LayoutComplete2>

    </>
  )
}