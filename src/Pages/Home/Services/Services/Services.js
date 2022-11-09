import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <h1 className='text-center text-3xl text-red-600 font-bold mb-5'>Services</h1>
            <div className=''>
                <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                    <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard>
                    <ServiceCard></ServiceCard>
                </div>
            </div>
            <div className='text-center mt-12'>
                <Link to='/services'>
                    <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-900 text-gray-900">Border</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;