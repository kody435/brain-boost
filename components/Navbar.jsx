import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 bg-black text-white py-2 text-2xl place-items-center items-center '>
            <div className='flex text-3xl '>Brain Boost</div>

            <div className='flex flex-row space-x-10'>
                <Link href="/" ><div className=''>Home</div></Link>
                <Link href="/Ask_Ques"><div className=''>Ask Question</div></Link>
                <div className=''>AI</div>
            </div>

            <div className='flex flex-row flex-end space-x-3 '>
                <ConnectWallet colorMode='dark' />
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" /></svg></div>
            </div>
        </div>
    )
}

export default Navbar