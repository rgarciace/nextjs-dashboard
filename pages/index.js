import Head from 'next/head'
import { Sora } from '@next/font/google'
import Footer from '/components/Footer'

const sora = Sora()

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
      <div className={sora.className}>
        
        <Footer />
      </div>
    </>
  )
}
