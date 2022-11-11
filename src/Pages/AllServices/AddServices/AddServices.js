import React, { useState } from 'react';
import toast from 'react-hot-toast'
import useTitle from '../../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add Services')
    const [services, setServices] = useState({});
    const current = new Date().toLocaleString();
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newServices = { ...services, current };
        newServices[field] = value;
        setServices(newServices);
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('https://e-trainer.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged)
                    toast('Service Added')
                event.target.reset()
            })

            .catch(error => console.error(error))
    }
    return (
        <div className='m-20'>
        <h1 className='text-center text-4xl font-bold mb-12 text-red-600'>Add your desire workout.</h1>
            <div className='my-20 bg-gray-300 lg:px-48 mt-8 pt-6 rounded-xl shadow-xl'>
                <form onSubmit={handleSubmit} className="mt-7">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3'>
                        <input onBlur={handleOnBlur} name="img" type="text" placeholder="image" className="input input-bordered w-full py-2 px-2 text-gray-600" required />
                        <input onBlur={handleOnBlur} name="title" type="text" placeholder="title" className="input input-bordered w-full py-2 px-2 text-gray-600" required />
                        <input onBlur={handleOnBlur} name="description" type="text" placeholder="add description" className="input input-bordered w-full py-2 px-2 text-gray-600" required />
                        <input onBlur={handleOnBlur} name="price" type="text" placeholder="price" className="input input-bordered w-full py-2 px-2 text-gray-600" required />
                    </div>
                    <button className="group relative my-5 inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-red-600">
                        <span className="absolute inset-0 border border-current"></span>
                        <span className="block border border-current bg-violet-500 px-12 py-3">
                            Submit
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;