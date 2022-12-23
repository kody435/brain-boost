import Head from 'next/head'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Brain Boost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col text-center items-center justify-center w-screen h-screen ">
          <h1 className="text-6xl font-bold">Brain Boost</h1>
          <h2 className='text-3xl' >Home</h2>
        </div>
      </main>
    </div>
  )
}

export default Home
