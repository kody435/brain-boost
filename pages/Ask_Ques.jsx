import React from 'react'
import styles from "../components/common.module.css"

const Ask_Ques = () => {
    return (
        <div className={styles.quest}>
            <div className='bg-gradient-to-bl from-sky-500 to-indigo-500 w-full h-full'>
                <div className='flex flex-col items-center justify-center h-screen border-white '>
                    <form>
                        <div>
                            <label>Subject</label>
                            <input type="textarea" />
                        </div>
                        <div>
                            <label>Question</label>
                            <input type="textarea" />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default Ask_Ques