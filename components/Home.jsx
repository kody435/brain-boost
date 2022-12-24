import React from 'react'

const Home = () => {

    const questions = [{question: "What is the capital of France?",answers: "Paris",},{question: "What is the capital of Germany?",answers: "Berlin",},{question: "What is the capital of Italy?",answers: "Rome",},{question: "What is the capital of Spain?",answers: "Madrid",},{question: "What is the capital of Portugal?",answers: "Lisbon",},{question: "What is the capital of Greece?",answers: "Athens"},{question: "What is the capital of Turkey?",answers: "Ankara",},{question: "What is the capital of Poland?",answers: "Warsaw",},{question: "What is the capital of Russia?",answers: "Moscow",},]

    return (
        <div className='flex flex-col'>
            <div className='text-3xl flex justify-center py-10 text-white '><h2>Questions</h2></div>
            <div>
                <div className='xl:mx-96 text-white mb-5 '>
                {questions.map((question, index) => (
                    <div key={index} className="m-4 p-4 text-xl font-medium bg-blue-700 rounded-xl">
                        <div className='bg-transparent'>Question : {question.question}</div>
                        <div className='bg-transparent'>Answer : {question.answers}</div>
                    </div>
                    ))}
                </div>
                </div>
        </div>
    )
}

export default Home