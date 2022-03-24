import Head from 'next/head';
import DashboardLayout from '../Components/Dashboard/DashboardLayout';
import LayoutCompleted from '../Components/Principal/LayoutComplete';

export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Servicios</title>
      </Head>

      <LayoutCompleted view="Servicios">
        <DashboardLayout />
      </LayoutCompleted>

    </>
  )
}