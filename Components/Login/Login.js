import React from 'react';
import Head from 'next/head';


const Login = ({
    children
}) => {
    return (
        <>
        <Head>
        <meta
          charSet="utf-8"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
         <link
          rel="stylesheet"
          href="/css/styles.css"
        />
        {/* FUENTE */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link href="/fontawesome/css/all.css" rel="stylesheet" />
        </Head>

       <div className="background__login centrar">
           {
               children
               
           }
       </div>


       <style jsx>{`

        .background__login{
          
          position: absolute;
          width: 100vw;
          height: 100vh;
          background-color:silver;
          background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
        }
       `}</style>

       </>

    )
}


export default Login;

