import React, { useEffect, useState } from 'react';

const PublicReviewDetails = ({allReviews}) => {
    const { name, photo, review, time, _id, email, serviceName, servicePrice, service } = allReviews;
    console.log(allReviews);
    const [publicRv, setPublicRv] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setPublicRv(data));
    }, [service])
    return (
        <div>
             {publicRv.length}
        </div>
    );
};

export default PublicReviewDetails;