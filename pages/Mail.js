import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import Admin from '../Components/Mail/MailLayout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Correo</title>
      </Head>

      <LayoutComplete2 view="Correo">
        <Admin/>
      </LayoutComplete2>

    </>
  )
}