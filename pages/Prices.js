import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import Prices from '../Components/Prices/PricesLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Precios</title>
      </Head>

      <LayoutComplete2 view="Precios">
        <Prices/>
      </LayoutComplete2>

    </>
  )
}