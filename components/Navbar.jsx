import { useState } from "react";
import { ConnectWallet } from '@thirdweb-dev/react'
import Link from "next/link";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-black shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h2 className="text-2xl font-bold text-white">Brain Boost</h2>
                        </Link>
                        <div className="md:hidden">
                            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg font-bold ">
                            <li className="text-white hover:text-blue-600">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <Link href="/Ask_Ques">Ask Question</Link>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <Link href="javascript:void(0)">AI</Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <Link
                                href="javascript:void(0)"
                                className="inline-block w-full px-4 py-2 text-center text-gray-800 rounded-md shadow hover:"
                            >
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <Link
                        href="javascript:void(0)"
                        className="px-4 py-2 text-gray-800  rounded-md shadow hover:"
                    >
                        <ConnectWallet colorMode='dark' />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
