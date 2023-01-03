import Head from 'next/head'
import Footer from '/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>RG Dashboard</title>
        <meta name="description" content="Dashboard para uso personal" />
        <meta name="author" content="Renzo García" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer />
    </>
  )
}
