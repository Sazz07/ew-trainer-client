import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Login = () => {

    // Checking state for toggle
    const [check, setCheck] = useState(false);
    const handleCheck = event => {
        setCheck(event.target.checked);
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='flex flex-col justify-center'>
                <form className='shadow-lg max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8'>
                    <h2 className='text-4xl text-gray-900 font-bold text-center'>Log In</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input className='rounded-lg bg-rose-200 mt-2 p-2 focus:border-blue-500 focus:bg-sky-200 focus:outline-none' type="email" placeholder='Enter Your Email' required/>
                    </div>
                    <div className='flex flex-col text-gray-500 py-2'>
                        <label>Password</label>
                        <input className='p-2 rounded-lg bg-rose-200 mt-2 focus:border-blue-500 focus:bg-sky-200 focus:outline-none' type={!check ? "password" : "text"} placeholder="Your Secret Password" required/>
                    </div>
                    <div className='text-gray-600 py-2'>
                        <p className=''><input onClick={handleCheck} className='mr-2' type="checkbox" />Show Password</p>
                    </div>
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <button className='w-full my-5 py-2 bg-rose-500 hover:bg-rose-700 focus:ring-2 focus:ring-offset-1 focus:ring-violet-400 text-white font-semibold rounded-lg' type='submit'>Log In</button>
                    <p className='text-red-500 font-medium text-center'>adssd</p>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                        <Link to='/signup' className="underline text-purple-700 font-semibold"> Sign up</Link>
                    </p>

                </form>
            </div>
            <div className='hidden sm:block'>
                <img className='w-5/6 h-full object-cover' src="https://cdn0.weddingwire.com/vendor/400971/3_2/960/jpg/thifault710_51_179004-164158080548866.jpeg" alt="" />
            </div>


        </div>
    )
}

export default Login;