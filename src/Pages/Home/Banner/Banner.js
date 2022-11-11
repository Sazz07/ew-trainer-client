import React from 'react';
import Lottie from 'lottie-react'
import trainer from '../../../assets/trainer.json'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
                <div className='flex flex-col items-center justify-between lg:flex-row'>
                    <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                        <div className='max-w-xl mb-6 lg:mt-8'>
                            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                Take Your Fitness<br className='hidden md:block' /> To The{' '}
                                <span className='inline-block text-red-400'>Next Level</span>
                            </h2>
                            <p className='text-base text-gray-700 md:text-lg'>
                                Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.
                            </p>
                        </div>
                        <Link to='/services'>
                            <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-900 text-gray-900 hover:bg-red-400">Get Started</button>
                        </Link>
                    </div>
                    <div className='relative lg:w-1/2 '>
                        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                            <Lottie animationData={trainer} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;