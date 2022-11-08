import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div  className="card extra-style  card-compact w-100 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div>
                    <div style={{margin: '0% 0% 50% 0%'}} className=''>
                        {
                            description.length > 100 ?
                                <>{description.slice(0, 99) + '...'} </>
                                :
                                description
                        }
                    </div>

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                        </div>
                        <div className="card-actions ">
                            <Link to={`/checkout/${_id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;