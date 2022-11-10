import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AddReview from '../AddReview/AddReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-20'>
                <h1 className='text-center text-3xl text-red-600 font-bold mb-5'>Reviews</h1>
                <div className=''>
                    <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
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
                                    <AddReview></AddReview>
                                </div>
                            </>
                            :
                            <>
                                <h2 className='text-2xl text-violet-600 font-semibold mb-5 text-center'>Please <Link to='/login' className="underline text-rose-700 font-semibold"> Log in</Link> to add a review.</h2>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;