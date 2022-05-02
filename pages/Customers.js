import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import CustomersLayout from '../Components/Customers/CustomersLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Clientes</title>
      </Head>

      <LayoutCompleted view="Clientes">
        <CustomersLayout/>
      </LayoutCompleted>

    </>
  )
}