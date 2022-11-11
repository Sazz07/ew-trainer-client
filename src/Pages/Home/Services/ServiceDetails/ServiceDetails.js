import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../../../../Reviews/ReviewCard/ReviewCard';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, price, img, description } = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://e-trainer.vercel.app/review?service_id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        const review = {
            service_id: _id,
            email: user?.email,
            service: title,
            name: user?.displayName,
            image: user?.photoURL,
            service_img: img,
            message
        }

        fetch('https://e-trainer.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review Added. Please refresh');
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='mb-12'>
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
            <div className='text-center mt-12'>
                <h2 className='text-3xl text-violet-600 font-bold mb-5'>Want to add a review?</h2>
            </div>
            <div>
                {
                    user?.email
                        ?
                        <>
                            <div className='flex justify-center'>
                                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-300">
                                    <div className="flex flex-col items-center w-full">
                                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                        <div className="flex flex-col items-center py-6 space-y-3">
                                            <span className="text-center">How was your experience?</span>
                                        </div>
                                        <form onSubmit={handleReview} className="flex flex-col w-full">
                                            <textarea rows="3" name='message' placeholder="Message..." className="p-4 rounded-md resize-none bg-gray-100"></textarea>
                                            <button className='py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400' type='submit'>Leave feedback</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <h2 className='text-2xl text-violet-600 font-semibold mb-5 text-center'>Please <Link to='/login' className="underline text-rose-700 font-semibold"> Log in</Link> to add a review.</h2>
                        </>
                }
            </div>
            <div className='max-w-screen-xl mx-auto my-20'>
                <h1 className='text-center text-3xl text-red-600 font-bold mb-5'>Reviews</h1>
                <div className=''>
                    <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                        {
                            reviews.map(review => <ReviewCard
                                key={review._id}
                                review={review}
                            ></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;