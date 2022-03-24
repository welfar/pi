import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import Commercial from '../Components/Commercial/Commercial';

export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Comercial</title>
      </Head>

      <LayoutCompleted view="Comercial">
         <Commercial/>
      </LayoutCompleted>

    </>
  )
}