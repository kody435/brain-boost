import styles from './common.module.css'
import { useEffect, useRef, useState } from "react"
import SDK from "weavedb-sdk"
import { Buffer } from "buffer"
import { map } from "ramda"

let db
const contractTxId = "sPyXyPDKw9uKFs43y7HFvsnKUE7bht3DkBNKA5UcV_o";

const Home = () => {
    const [Questions, setQuestions] = useState([])
    const [Users, setUsers] = useState([])
    const [initDB, setInitDB] = useState(false)
    let questions = useRef()

    const setupWeaveDB = async () => {
        window.Buffer = Buffer
        db = new SDK({
            contractTxId
        })
        await db.initializeWithoutWallet()
        setInitDB(true)
    }

    useEffect(() => {
        setupWeaveDB()
    }, [])

    const getQuestions = async () => {
        setQuestions(await db.cget("Questions", ["title"]))
    }

    const getUsers = async () => {
        setUsers(await db.cget("Questions", ["user_address"]))
    }

    useEffect(() => {
        if (initDB) {
            getQuestions()
            getUsers()
        }
    }, [initDB])

    return (
        <div className='lg:grid flex flex-col lg:grid-cols-7 mt-10 '>

            <div className={styles.grid1}>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600 text-3xl flex justify-center mb-5'>Questions</h2>
                <div className='text-white mb-5 '>
                    {map(question => (
                        <div className="text-white mx-8 my-2 space-y-4 flex flex-row justify-start items-center space-x-4 p-5 text-xl font-medium bg-gradient-to-l from-sky-600 to-indigo-600 rounded-xl drop-shadow-xl">
                            <div className='bg-transparent'>{question.data.title}</div>
                        </div>
                    ))(Questions)}
                </div>
            </div>

            
            <div className={styles.grid2}>
                <h2 className='text-3xl bg-zinc-900 flex justify-center p-screen bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-violet-600'>Leaderboard</h2>
                <div className='mb-5 '>
                    {map(v => (
                    <div className="bg-white flex justify-center flex-row m-4 space-x-4 px-4 py-2 text-xl font-medium rounded-xl drop-shadow-xl bg-gradient-to-r from-violet-700 to-fuchsia-800">
                        <h2 className='bg-transparent text-white rounded-xl'>{v.data.user_address.substring(0,5)}...{v.data.user_address.substring(v.data.user_address.length-5)}</h2>
                    </div>
                    ))(Users)}
                </div>
            </div>

        </div>
    )
}

export default Home
