import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-site-blush.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mx-5 my-6'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid  gap-6 justify-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                {/* <Link to={'/addService'}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add Service</button></Link> */}
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://securecdn.pymnts.com/wp-content/uploads/2019/12/merchant-service-providers-Endava-value-added-services.jpg" alt="service" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Add a new service!</h2>
                        <p>Click the button to add new service.</p>
                        <div className="card-actions justify-end">
                        <Link to={'/addService'}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add Service</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;