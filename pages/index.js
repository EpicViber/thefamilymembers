import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Family</title>
      </Head>

      <main>
        <Header title="THE FAMILY" />
        <p className="description">
          <code>A group owned by a few idiots on discord</code>
        </p>

        
      </main>
      <img src="https://cdn.discordapp.com/avatars/500649100316901376/a_e1097fd6d54d0b697e5f5838f3ec3f8c.gif?size=4096" alt="Epic Vibe"></img>
      <Footer />
    </div>
  )
}