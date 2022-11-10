import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../../../../Reviews/Reviews/Reviews';

const ServiceDetails = () => {
    const { _id, title, price, img, description } = useLoaderData();
    return (
        <div>
            <div className="my-8 mx-auto max-w-xl p-4 shadow-lg bg-gray-200 text-violet-700 rounded-md">
                <div className="pb-4 border-bottom bg-gray-300 p-4 rounded-md">
                    <div className="">
                        <p className="mb-0 capitalize text-violet-700 font-semibold text-xl">{title}</p>
                    </div>
                </div>
                <div className="space-y-4 py-3">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="space-y-2">
                        <p className="leading-snug text-gray-700 font-bold text-2xl">Description: <span className='text-gray-600 text-lg font-normal'>{description}</span></p>
                        <p className="leading-snug text-gray-700 font-bold text-2xl">Cost: <span className='text-yellow-500 text-xl font-semibold'>${price}</span></p>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default ServiceDetails;