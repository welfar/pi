import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import CustomersLayout from '../Components/Customers/CustomersLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Clientes</title>
      </Head>

      <LayoutComplete2 view="Clientes">
        <CustomersLayout/>
      </LayoutComplete2>

    </>
  )
}