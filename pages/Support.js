import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import SupportLayout from '../Components/Support/SupportLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Soporte</title>
      </Head>

      <LayoutCompleted view="Soporte">
        <SupportLayout/>
      </LayoutCompleted>

    </>
  )
}