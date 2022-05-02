import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import Admin from '../Components/Mail/MailLayout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Correo</title>
      </Head>

      <LayoutCompleted view="Correo">
        <Admin/>
      </LayoutCompleted>

    </>
  )
}