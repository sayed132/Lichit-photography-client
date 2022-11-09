import React, { useEffect, useState } from 'react';

const MyReviewsDetails = ({ rev , handleDelete}) => {
    const { name, photo, review, time, _id, email, serviceName, servicePrice, service } = rev;
    const [ownReviews, setownReviews] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
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

            <td>{review}
           
            </td>
           
        </tr>
    );
};

export default MyReviewsDetails;