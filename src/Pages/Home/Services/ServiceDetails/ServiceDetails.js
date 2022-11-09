import React from 'react';
import Reviews from '../../../../Reviews/Reviews/Reviews';

const ServiceDetails = () => {
    return (
        <div>
            <div className="my-8 mx-auto max-w-xl p-4 shadow-lg bg-gray-200 text-violet-700 rounded-md">
                <div className="pb-4 border-bottom bg-gray-300 p-4 rounded-md">
                    <div className="">
                        <p className="mb-0 capitalize text-violet-700 font-semibold text-xl">asdadas jlaskjdlkasjdal</p>
                    </div>
                </div>
                <div className="space-y-4 py-3">
                    <div className="space-y-2">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <p className="leading-snug text-gray-500"><span className='font-medium text-gray-600'>Description:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eaque similique, maiores veritatis nostrum doloremque soluta, reiciendis in laboriosam quod cum ullam error non totam veniam? Esse nulla maxime amet!</p>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default ServiceDetails;