import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Reviews from '../../../Share/Reviews/Reviews';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';


const ServicesDetail = () => {
    const serviceDetail = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, img, price, title, description, } = serviceDetail;

    const [publicReviews, setPublicReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${serviceDetail._id}`)
            .then(res => res.json())
            .then(data => setPublicReviews(data))
    }, [serviceDetail._id])
    return (
        <PhotoProvider>
            <div className=" mx-auto card-compact w-100 md:w-3/5 my-20 rounded-lg bg-base-100 shadow-xl">
                <PhotoView src={img}>
                    <figure><img className='w-100 mx-auto' src={img} alt="" /></figure>
                </PhotoView>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        <p>{description}</p>

                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                            </div>
                            <div className="card-actions ">
                                <Link to={'/services'}>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Previous</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Reviews></Reviews>
            </div>

            {/* all review herre */}

            {
                publicReviews.map(allReviews => <div key={allReviews._id} allReviews={allReviews}>
                    <div className="container shadow-lg flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <>
                                        {
                                            allReviews.photo ?
                                                <> <img src={allReviews.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" /> </>
                                                :
                                                <> <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" /> </>
                                        }
                                    </>
                                </div>
                                <div>
                                    <h4 className="font-bold">{allReviews.name}</h4>
                                    <span className="text-xs dark:text-gray-400">{allReviews.time}</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                            {allReviews.review}
                        </div>
                    </div>
                </div>)
            }
        </PhotoProvider>
    );
};

export default ServicesDetail;