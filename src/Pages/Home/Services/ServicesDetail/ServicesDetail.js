import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetail = () => {
    const serviceDetail = useLoaderData();
    const {_id, img, price, title, description} = serviceDetail;
    return (
        <div  className=" mx-auto card-compact w-100 md:w-3/5 my-20 rounded-lg bg-base-100 shadow-xl">
            <figure className='rounded-lg'><img src={img} alt="" /></figure>
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
    );
};

export default ServicesDetail;