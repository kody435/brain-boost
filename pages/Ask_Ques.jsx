import React from 'react'
import styles from "../components/common.module.css"

const Ask_Ques = () => {
    return (
        <div className={styles.quest}>
            <title>Brain Boost</title>
            <div className='bg-gradient-to-bl from-sky-500 to-indigo-600 w-screen h-screen'>
                <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-center items-center text-3xl text-white  '>Submit question here</h1>
                    <form className='h-96 w-96 items-center justify-center rounded-3xl ' action='/' onSubmit="/" >
                        <div className='flex flex-col justify-center items-center '>
                            <table className='flex flex-col items-center justify-center h-72'>
                                <tr className='flex flex-row w-full items-center justify-center text-center '>
                                        <td className='text-xl mr-6 text-white '>Subject</td>
                                        <td className='rounded-2xl'><input type="text" className='text-xl w-56 lg:w-80 rounded-3xl px-4 py-2' /></td>
                                    </tr>
                                    <br></br>
                                <tr className='flex flex-row w-full items-center justify-center'>
                                    <td className='text-xl mr-3 text-white '>Question</td>
                                    <td className='rounded-3xl text-xl'><textarea type="text" className='w-full lg:w-80 rounded-2xl px-4 py-2' /></td>
                                </tr>
                            </table>
                            <div className='w-fit flex items-center justify-center py-3 text-center px-12 rounded-full border-2 border-black bg-black hover:bg-white text-white hover:text-black '>
                                <button type='submit' className='py-2 text-center font-bold '>SUBMIT</button>
                            </div>
                        </div>
                        
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default Ask_Ques
