import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Head>

      <main className="">
        <Navbar />
      </main>
    </div>
  )
}

export default Home
