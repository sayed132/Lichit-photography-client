import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServicesDetail = () => {
    const serviceDetail = useLoaderData();
    const { _id, img, price, title, description } = serviceDetail;
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
        </PhotoProvider>
    );
};

export default ServicesDetail;