import React from 'react'
import styles from './common.module.css'

const Home = () => {

    const questions = [{question: "What is the capital of France?",answers: "Paris",},{question: "What is the capital of Germany?",answers: "Berlin",},{question: "What is the capital of Italy?",answers: "Rome",},{question: "What is the capital of Spain?",answers: "Madrid",},{question: "What is the capital of Portugal?",answers: "Lisbon",},{question: "What is the capital of Greece?",answers: "Athens"},{question: "What is the capital of Turkey?",answers: "Ankara",},{question: "What is the capital of Poland?",answers: "Warsaw",},{question: "What is the capital of Russia?",answers: "Moscow",},{question: "What is the capital of France?",answers: "Paris",},{question: "What is the capital of Germany?",answers: "Berlin",},{question: "What is the capital of France?",answers: "Paris",},{question: "What is the capital of Germany?",answers: "Berlin",}]
    var users = [{ name: "John", score: 10 }, { name: "Jane", score: 20 }, { name: "Jack", score: 30 }, { name: "Jillfwryvcife", score: 40 }, { name: "Jenny", score: 50 }, { name: "Jenny", score: 60 }, { name: "Jenny", score: 70 }, { name: "Jenny", score: 80 }, { name: "Jenny", score: 90 }, { name: "Jenny", score: 100 }];
    users.reverse()
   

    return (
        <div className='lg:grid flex flex-col lg:grid-cols-5 mt-10 '>

            <div className={styles.grid1}>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600 text-3xl flex justify-center mb-5'>Questions</h2>
                <div className='text-white mb-5 '>
                    {questions.map((question, index) => (
                        <div key={index} className="mx-8 my-2 space-y-4 flex flex-row justify-start items-center space-x-4 p-5 text-xl font-medium bg-gradient-to-l from-sky-600 to-indigo-600 rounded-xl drop-shadow-xl">
                            <div className='bg-transparent'>Question : {question.question.substring(0,75)}</div>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className={styles.grid2}>
                <h2 className='text-3xl bg-zinc-900 flex justify-center p-screen bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-violet-600'>Leaderboard</h2>
                <div className='mb-5 '>
                    {users.map((user, index) => (
                        <div key={index} className="bg-white flex justify-center flex-row m-4 space-x-4 p-4 text-xl font-medium rounded-xl drop-shadow-xl bg-gradient-to-r from-violet-700 to-fuchsia-800">
                            <div className='bg-transparent text-white'>{user.name.substring(0,15)}</div>
                            <h2 className='bg-transparent text-white rounded-xl'>Score : {user.score}</h2>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home