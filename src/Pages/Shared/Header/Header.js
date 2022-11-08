import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assets/Icon/icon.svg';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItem = <>
        <li className='py-2 rounded-lg hover:bg-gray-200 hover:px-2'>
            <Link
                to="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-500"
            >
                Home
            </Link>
        </li>
        <li className='py-2 rounded-lg hover:bg-gray-200 hover:px-2'>
            <Link
                to="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
            >
                Services
            </Link>
        </li>
        <li className='py-2 rounded-lg hover:bg-gray-200 hover:px-2'>
            <Link
                to="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
            >
                Pricing
            </Link>
        </li>
        <li className='py-2 rounded-lg hover:bg-gray-200 hover:px-2'>
            <Link
                to="/"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
            >
                About us
            </Link>
        </li>
    </>

    const menuItem2 = <>
        <li className='py-2 rounded-lg hover:bg-gray-200 hover:px-2'>
            <Link
                to="/login"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-rose-400"
            >
                Log In
            </Link>
        </li>
        
        <li className='py-2 rounded-lg hover:bg-gray-200 hover:px-2'>
            <Link
                to="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
            >
                Sign up
            </Link>
        </li>
    </>

    return (
        <div className="shadow-md px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        to="/"
                        aria-label="GadgetLand"
                        title="GadgetLand"
                        className="inline-flex items-center mr-8"
                    >
                        <img className='h-8' src={icon} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase hover:text-rose-500">
                            Gadget-Land
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {menuItem}
                    </ul>
                </div>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    {menuItem2}
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="GadgetLand"
                                            title="GadgetLand"
                                            className="inline-flex items-center"
                                        >
                                            <img className='h-8' src={icon} alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                GadgetLand
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {menuItem}
                                        <ul>
                                            {menuItem2}
                                        </ul>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;