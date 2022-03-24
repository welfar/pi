import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import Products from '../Components/Product/ProductsLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Productos</title>
      </Head>

      <LayoutCompleted view="Productos">
        <Products/>
      </LayoutCompleted>
    </>
  )
}