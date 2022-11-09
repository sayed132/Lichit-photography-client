import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PublicReviewDetails from './PublicReviewDetails';

const PublicReviews = () => {
    const {serviceDetail, service} = useLoaderData();
    const [publicReviews, setPublicReviews] = useState([])
    useEffect( () =>{
        fetch(`http://localhost:5000/reviews/${serviceDetail._id}?service=${service}`)
        .then(res =>res.json())
        .then(data => setPublicReviews(data))
    }, [serviceDetail._id])
    return (
        <div>
            <h2 className="text-5xl">You have {publicReviews.length} Review</h2>
            {
                publicReviews.map(allReviews => <PublicReviewDetails
                    key={allReviews._id}
                    allReviews={allReviews}
                ></PublicReviewDetails>)
            }
        </div>
    );
};

export default PublicReviews;