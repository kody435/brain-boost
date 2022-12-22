import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 bg-black text-white py-4 text-2xl place-items-center items-center '>
            <div className='flex text-3xl '>Brain Boost</div>

            <div className='flex flex-row space-x-6'>
                <div className=''>Home</div>
                <div className=''>Questions</div>
                <div className=''>Rewards</div>
            </div>

            <div className='flex flex-row flex-end space-x-2 '>
                <ConnectWallet colorMode='dark' />
            </div>
        </div>
    )
}

export default Navbar