import React from 'react'


const Navbar = () => {
    return (
        <div className='grid grid-cols-3 bg-black text-white py-6 text-2xl place-items-center '>
            <div className='flex content-start '>Brain Boost</div>

            <div className='flex flex-row space-x-6'>
                <div className=''>Home</div>
                <div className=''>Rewards</div>
            </div>

            <div className='flex flex-row flex-end space-x-2'>
                <div className=''>Connect</div>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-9"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar