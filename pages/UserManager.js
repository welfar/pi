import Head from 'next/head';
// import LayoutCompleted from '../Components/Principal/LayoutComplete';
import LayoutComplete2 from '../Components/Principal/LayaoutCompleteNew';
import UserManagerLayout   from '../Components/UserManager/UserManagerLayout';



export default function Home() {
  return (
    <>
      <Head>
        <title>Panel de Administración de Usuarios</title>
      </Head>

      <LayoutComplete2 view=" Administración de Usuarios">
        <UserManagerLayout />
      </LayoutComplete2>

    </>
  )
}