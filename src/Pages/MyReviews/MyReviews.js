import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewsDetails from './MyReviewsDetails';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myOwnReviews, setmyOwnReviews] = useState([]);
    useEffect( () =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setmyOwnReviews(data))
    }, [user?.email,])
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = myOwnReviews.filter(odr => odr._id !== id);
                        setmyOwnReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className="text-5xl">You have {myOwnReviews.length} Review</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOwnReviews.map(rev => <MyReviewsDetails
                                key={rev._id}
                                rev={rev}
                                handleDelete={handleDelete}
                            ></MyReviewsDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;