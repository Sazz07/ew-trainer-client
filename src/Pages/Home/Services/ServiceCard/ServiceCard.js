import React from 'react';

const ServiceCard = ({ service }) => {

    const {_id , img, price, title, description } = service;

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-xl">
                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                        <p className="">{description.slice(0, 90) + '...'}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;