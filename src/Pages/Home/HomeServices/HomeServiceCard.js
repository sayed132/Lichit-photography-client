import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import '../Services/Services.css'

const HomeServiceCard = ({ homeService }) => {
    const { _id, img, price, title, description } = homeService;
    return (
        <PhotoProvider>
            <div  className="card extra-style card-compact w-100 bg-base-100 shadow-xl">
            <PhotoView src={img}>
            <figure><img src={img} alt="" /></figure>
            </PhotoView>
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
                            <Link to={`/services/${_id}`}>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </PhotoProvider>
    );
};

export default HomeServiceCard;