import Head from "next/head"
import Header from "./Header"
import Footer from './Footer'

const MainLayout = ({ title, titleHeader, options, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Dashboard para uso personal" />
        <meta name="author" content="Renzo García" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="main">
          <Header title={titleHeader} options={options} />
          <div className="body">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout