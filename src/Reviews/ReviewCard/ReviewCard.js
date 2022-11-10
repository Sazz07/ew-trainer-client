import React from 'react';

const ReviewCard = ({ review }) => {
    const { image, message, name } = review;

    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-200">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={image} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold pt-2">{name}</h4>
                        </div>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm text-gray-500">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;