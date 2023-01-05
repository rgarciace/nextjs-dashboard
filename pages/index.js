import Head from 'next/head'
import Footer from '/components/Footer'
import styles from '/styles/Home.module.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>RG Inicio</title>
        <meta name="description" content="Dashboard para uso personal" />
        <meta name="author" content="Renzo García" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="main">
          <Header />
        </main>
        <Footer />
      </div>
    </>
  )
}
