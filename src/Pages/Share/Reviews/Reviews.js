import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Reviews = () => {


    const { user } = useContext(AuthContext)
    const { _id, title, price } = useLoaderData()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value
        const name = user?.displayName;
        const email = user?.email;
        const UserLogin = user?.uid;
        const photo = user?.photoURL;
        const time = new Date().toLocaleString();

        const CustomerReview = {
            service: _id,
            email,
            name,
            photo,
            review,
            time,
            UserLogin,
            serviceName: title,
            servicePrice: price
        }


        if (!user) {
            return toast.warning('please login first')
        }
        else {
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(CustomerReview)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Review added successfully')
                        form.reset();

                    }
                })
                .catch(er => console.error(er));
        }






    };
    return (
        <div >
            <div className="flex items-center justify-center text-center py-5 dark:bg-gray-900 dark:text-gray-100">
                <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                    <label htmlFor="review">Add Your Review</label>
                    <textarea placeholder='Please share your feedback about the product: Was the product as described? What is the quality like?' id="review" name='review' cols="30" rows="10" className="flex items-center border-2 h-24 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-teal-400 focus:ring-teal-400"></textarea>
                    <>
                        {
                            user?.uid ?
                                <><button className="btn btn-sm mt-8">Submit</button></>
                                :
                                <><Link to={'/login'}><button className="btn btn-sm mt-8">Submit</button></Link></>
                        }
                    </>
                </form>
            </div>
        </div>
    );
};

export default Reviews;