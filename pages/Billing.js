import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import BillingLayout from '../Components/Billing/BillingLayout';

export default function Home() {
  return (
     <>
      <Head>
        <title>Panel de Facturación</title>
      </Head>
      <LayoutComplete2 view="Facturación Eletrónica">
        <BillingLayout/>
      </LayoutComplete2> 
    </>
  )
}