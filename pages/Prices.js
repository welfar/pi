import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import Prices from '../Components/Prices/PricesLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Precios</title>
      </Head>

      <LayoutCompleted view="Precios">
        <Prices/>
      </LayoutCompleted>

    </>
  )
}