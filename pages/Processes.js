import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import ProcessLayout from '../Components/Processes/ProcessesLayout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Procesos</title>
      </Head>

      <LayoutComplete2 view="Procesos">
        <ProcessLayout/>
      </LayoutComplete2>

    </>
  )
}