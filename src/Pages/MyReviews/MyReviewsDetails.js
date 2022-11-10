import React, { useEffect, useState } from 'react';
import { GrUpdate } from 'react-icons/gr';

const MyReviewsDetails = ({ rev , handleDelete}) => {
    const { name, photo, review, time, _id, email, serviceName, servicePrice, service } = rev;
    const [ownReviews, setownReviews] = useState({})
    useEffect(() => {
        fetch(`https://assignment-11-server-site-blush.vercel.app/services/${service}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setownReviews(data));
    }, [service])
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {
                                ownReviews?.img &&
                                <img src={ownReviews.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${servicePrice}</span>
            </td>

            <td className='flex'><GrUpdate className='text-2xl mr-5' />{review}</td>
           
        </tr>
    );
};

export default MyReviewsDetails;