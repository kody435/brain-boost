import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 bg-black text-white py-2 text-2xl place-items-center items-center '>
            <div className='flex text-3xl '>Brain Boost</div>

            <div className='flex flex-row space-x-10'>
                <Link href="/" ><div className=''>Home</div></Link>
                <Link href="/Ask_Ques"><div className=''>Ask Question</div></Link>
                <div className='hidden lg:inline'>AI</div>
            </div>

            <div className='flex-row space-x-3 hidden lg:inline '>
                <div><ConnectWallet colorMode='dark' /></div>
            </div>
        </div>
    )
}

export default Navbar