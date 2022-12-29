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
      <div className="members">
      <img src="https://cdn.discordapp.com/avatars/500649100316901376/a_e1097fd6d54d0b697e5f5838f3ec3f8c.gif?size=4096" width ="350" height="350" alt="Epic Vibe"></img>
            <img src="https://cdn.discordapp.com/avatars/526090380471697440/d598b819c98757d54bb803718a0abb03.png?size=4096" width ="350" height="350" alt="Phuyeso"></img>
            <img src="https://cdn.discordapp.com/avatars/758695634567430154/8c7b467486efd1964c213bad5a53c179.png?size=4096" width ="350" height="350" alt="Itamis"></img>
            <img src="https://cdn.discordapp.com/avatars/897152552422998026/4a35bd089a6709dea97373107f4badb5.png?size=4096" width ="350" height="350" alt="Emexure"></img>
            <img src="https://cdn.discordapp.com/avatars/736196841095299102/373e77cf873c7ce8d2d92f7d1ac28fd7.png?size=4096" width ="350" height="350" alt="Jess"></img>
</div>
      <Footer />
      </div>
  )
}