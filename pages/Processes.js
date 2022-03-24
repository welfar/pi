import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import ProcessLayout from '../Components/Processes/ProcessesLayout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Procesos</title>
      </Head>

      <LayoutCompleted view="Procesos">
        <ProcessLayout/>
      </LayoutCompleted>

    </>
  )
}