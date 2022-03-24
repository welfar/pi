import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import OrdersLayout from '../Components/Orders/OrdersLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Órdenes</title>
      </Head>

      <LayoutCompleted view="Órdenes">
        <OrdersLayout/>
      </LayoutCompleted>

    </>
  )
}