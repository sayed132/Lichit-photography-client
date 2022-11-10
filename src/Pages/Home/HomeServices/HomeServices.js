import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
    const [serviceLimit, setServiceLimit] = useState([]);
    useEffect( () =>{
        fetch('https://assignment-11-server-site-blush.vercel.app/servicesHome')
        .then(res =>res.json())
        .then(data => setServiceLimit(data))
    }, [])
    return (
        <div className='mx-5 my-6'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">My Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid  gap-6 justify-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceLimit.map(homeService => <HomeServiceCard
                        key={homeService._id}
                        homeService={homeService}
                    ></HomeServiceCard>)
                }
            </div>
            <div className='text-center my-6'>
            <Link to={'/services'}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">See All</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;