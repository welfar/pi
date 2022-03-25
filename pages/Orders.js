import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';;
import OrdersLayout from '../Components/Orders/OrdersLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Órdenes</title>
      </Head>

      <LayoutComplete2 view="Órdenes">
        <OrdersLayout/>
      </LayoutComplete2>

    </>
  )
}