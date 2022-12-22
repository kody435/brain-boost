import React from 'react'
import styles from "./common.module.css"

const Ask_Ques = () => {
    return (
        <div className={styles.quest}>
            <div className='bg-gradient-to-bl from-sky-500 to-indigo-500 w-full h-full'>
                <div className='flex flex-col items-center justify-center h-screen '>
                    <form>
                        <div>
                            <label>Subject</label>
                            <input textarea />
                        </div>
                        <div>
                            <label>Question</label>
                            <input textarea />
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default Ask_Ques