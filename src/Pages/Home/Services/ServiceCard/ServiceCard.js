import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title, description } = service;

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                        <p className="">{description.slice(0, 90) + '...'}</p>
                    </div>
                    <Link to={`/servicedetails/${_id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Read more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;