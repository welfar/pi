import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import SupportLayout from '../Components/Support/SupportLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Soporte</title>
      </Head>

      <LayoutComplete2 view="Soporte">
        <SupportLayout/>
      </LayoutComplete2>

    </>
  )
}