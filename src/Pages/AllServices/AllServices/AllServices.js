import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../../Home/Services/ServiceCard/ServiceCard';

const AllServices = () => {
    useTitle('Services');
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://e-trainer.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-center text-3xl text-red-600 font-bold mb-5'>Services</h1>
            <div className=''>
                <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                    {
                        allServices.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
            <div className='text-center mt-12'>
                <Link to='/services'>
                    <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-900 text-gray-900">Border</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default AllServices;