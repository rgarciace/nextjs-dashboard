import Head from 'next/head'
import Footer from '/components/Footer'
import Header from '../../components/Header'

const options = [
  { text: "Velocidad CAN", path: "/load-speed/can" },
  { text: "Velocidad USA", path: "/load-speed/usa" },
  { text: "Reportes", path: "/load-speed/reports" },
]

const LoadSpeedUsa = () => {
  return (
    <>
      <Head>
        <title>RG Velocidad USA</title>
        <meta name="description" content="Dashboard para uso personal" />
        <meta name="author" content="Renzo García" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="main">
          <Header title="Velocidad de Carga" options={options} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LoadSpeedUsa