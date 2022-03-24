import Head from 'next/head';
import Login from '../Components/Login/Login';
import LoginForm from '../Components/Login/LoginForm';


export default function Home() {
  return (
    <>
      <Head>
        <title>Panel Interno - Inicia Sesión</title>
      </Head>
      <Login >
        <LoginForm/>
      </Login>
    
      
    </>

  )
}
