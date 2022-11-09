import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const [error, setError] = useState();
    const { createUser,updateUserProfile } = useContext(AuthContext);

    // Checking state for toggle
    const [check, setCheck] = useState(false);
    const handleCheck = event => {
        setCheck(event.target.checked);
    };

    // show password
    const [show, setShow] = useState(false);
    const handleShow = event => {
        setShow(event.target.checked);
    };

    // Create User With Email Pass handle

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                handelUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                console.error(error);
                setError(error);
            })

    }

    // Update user profile

    const handelUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error)); 
    };

    return (
        <div className='my-20'>
            <section className="p-6">
                <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
                    <div className='w-full px-6 rounded-md sm:px-12 md:px-16 xl:col-span-2'>
                        <form onSubmit={handleSignUp} className='shadow-lg max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8'>
                            <h2 className='text-4xl text-gray-900 font-bold text-center'>Sign Up</h2>
                            <div className='flex flex-col text-gray-600 py-2'>
                                <label>Full Name</label>
                                <input className='rounded-lg shadow-sm bg-fuchsia-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="text" name='name' placeholder='Enter Your Name' />
                            </div>
                            <div className='flex flex-col text-gray-600 py-2'>
                                <label>Photo URL</label>
                                <input className='rounded-lg shadow-sm bg-fuchsia-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="text" name='photoURL' placeholder='Enter Your Photo URL' />
                            </div>
                            <div className='flex flex-col text-gray-400 py-2'>
                                <label>Email</label>
                                <input className='rounded-lg bg-rose-200 mt-2 p-2 focus:border-blue-500 focus:bg-sky-200 focus:outline-none' type="email" name='email' placeholder='Enter Your Email' required />
                            </div>
                            <div className='flex flex-col text-gray-500 py-2'>
                                <label>Password</label>
                                <input className='p-2 rounded-lg bg-rose-200 mt-2 focus:border-blue-500 focus:bg-sky-200 focus:outline-none' type={!show ? "password" : "text"} name='password' placeholder="Your Secret Password" required />
                            </div>
                            <div className='text-gray-600 py-2'>
                                <p className=''><input onClick={handleShow} className='mr-2' type="checkbox" />Show Password</p>
                            </div>
                            <div className='text-gray-600 py-2'>
                                <p className=''><input onClick={handleCheck} className='mr-2' type="checkbox" />Accept Terms & Conditions.</p>
                            </div>
                            <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>
                            <button className='w-full my-5 py-2 bg-rose-500 focus:ring-2 focus:ring-offset-1 focus:ring-violet-400 text-white font-semibold rounded-lg' type='submit' disabled={!check}>Sign Up</button>
                            <p className='text-red-500 font-medium text-center'>{error}</p>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                                <Link to='/login' className="underline text-purple-700 font-semibold"> Log in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;