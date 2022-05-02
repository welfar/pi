import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import BillingLayout from '../Components/Billing/BillingLayout';

export default function Home() {
  return (
     <>
      <Head>
        <title>Panel de Facturación</title>
      </Head>
      <LayoutCompleted view="Facturación Eletrónica">
        <BillingLayout/>
      </LayoutCompleted> 
    </>
  )
}