import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar';
//any css files in'_app.js' will be applied to the whole app
import '../styles/globals.css';

//'_app.js' isn't a page; predefined component from next
//used to render elements that will apply to all page components in 'pages' directory
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/icons/favicon.ico'/>
      </Head>
      <header>
        <Navbar/>
      </header>
      <Component {...pageProps}/>
    </>
  ) 
}

export default MyApp;