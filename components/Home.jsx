import React from 'react'

const Home = () => {

    const questions = [{question: "What is the capital of France?",answers: "Paris",},{question: "What is the capital of Germany?",answers: "Berlin",},{question: "What is the capital of Italy?",answers: "Rome",},{question: "What is the capital of Spain?",answers: "Madrid",},{question: "What is the capital of Portugal?",answers: "Lisbon",},{question: "What is the capital of Greece?",answers: "Athens"},{question: "What is the capital of Turkey?",answers: "Ankara",},{question: "What is the capital of Poland?",answers: "Warsaw",},{question: "What is the capital of Russia?",answers: "Moscow",},]
    const users = [{ name: "John", score: 10 }, { name: "Jane", score: 20 }, { name: "Jack", score: 30 }, { name: "Jill", score: 40 }, { name: "Jenny", score: 50 }, { name: "Jenny", score: 60 }, { name: "Jenny", score: 70 }, { name: "Jenny", score: 80 }, { name: "Jenny", score: 90 }, { name: "Jenny", score: 100 }].reverse();

    return (
        <div className='grid grid-cols-3'>
            <div className='cols-span-2'>
                <div className=' text-3xl flex justify-center py-10 text-white '><h2>Questions</h2></div>
                <div className='text-white mb-5 '>
                    {questions.map((question, index) => (
                        <div key={index} className="m-4 flex flex-row space-x-4 p-4 text-xl font-medium bg-blue-700 rounded-xl">
                            <div className='bg-transparent'>Question : {question.question}</div>
                            <div className=' rounded-xl text-center bg-white px-3 text-black'>Answer</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='cols-span-1'>
                <div className='text-3xl flex justify-center py-10 text-white '><h2>Leaderboard</h2>
                </div>
                <div className='text-white mb-5 '>
                    {users.map((user, index) => (
                        <div key={index} className="m-4 flex flex-row space-x-4 p-4 text-xl font-medium bg-blue-700 rounded-xl">
                            <div className='bg-transparent'>Name : {user.name}</div>
                            <div className=' rounded-xl text-center bg-white px-3 text-black'>Score : {user.score}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home