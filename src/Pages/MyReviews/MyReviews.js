import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://e-trainer.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    // delete 
    const handleDelete = review => {
        const proceed = window.confirm('Are you sure you want to delete your reviews?');
        if (proceed) {
            fetch(`https://e-trainer.vercel.app/reviews/${review._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully')
                        const remaining = reviews.filter(rew => rew._id !== review._id)
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 text-gray-600">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Profile</th>
                        <th>Review</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></ReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;