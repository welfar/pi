import Head from 'next/head';
import LayoutCompleted from '../Components/Principal/LayoutComplete';
import UserManagerLayout   from '../Components/UserManager/UserManagerLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Administración de Usuarios</title>
      </Head>

      <LayoutCompleted view=" Administración de Usuarios">
        <UserManagerLayout />
      </LayoutCompleted>

    </>
  )
}