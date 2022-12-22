import Head from 'next/head'
import Ask_Ques from '../components/Ask_Ques'


const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Ask_Ques />
      </main>
    </div>
  )
}

export default Home
