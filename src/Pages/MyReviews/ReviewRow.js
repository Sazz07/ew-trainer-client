import React from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    console.log(review);
    const { name, message, image, } = review;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(review)} className="btn btn-circle btn-outline">
                        X
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-full w-20 h-20">
                            <img src={image} className="" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>

            <td><p>{message}</p></td>
            <th>
                <button

                    className="btn btn-ghost btn-xs">{'Edit'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;