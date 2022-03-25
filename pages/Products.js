import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import Products from '../Components/Product/ProductsLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Productos</title>
      </Head>

      <LayoutComplete2 view="Productos">
        <Products/>
      </LayoutComplete2>
    </>
  )
}