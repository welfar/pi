import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import Commercial from '../Components/Commercial/Commercial';

export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Comercial</title>
      </Head>

      <LayoutComplete2 view="Comercial">
         <Commercial/>
      </LayoutComplete2>

    </>
  )
}