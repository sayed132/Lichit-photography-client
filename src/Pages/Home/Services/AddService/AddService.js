import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    
    const handleAddData = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value
        const price = form.price.value
        const img = form.photoURL.value;
        const description = form.review.value;
        const name = user?.displayName;
        const email = user?.email;
        const time = new Date().toLocaleString();

        const AddedService = {
            title,
            price,
            description,
            img,
            time,
            name,
            email
        }

        console.log(AddedService);


        fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(AddedService)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success('Service added successfully')
                        form.reset();

                    }
                })
                .catch(er => console.error(er));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add a new service!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddData} className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                            <label htmlFor="add">Add new service</label>
                            <input required type="text" name='title' placeholder='please add a title' className="flex items-center border-2 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-teal-400 focus:ring-teal-400" />
                            <input required type="number" name='price' placeholder='please add service price' className="flex items-center border-2 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-teal-400 focus:ring-teal-400" />
                            <textarea required placeholder='Please add a service description' id="review" name='review' cols="30" rows="10" className="flex items-center border-2 h-24 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-teal-400 focus:ring-teal-400"></textarea>
                            <input
                                name="photoURL"
                                type="text"
                                placeholder="Phot URL"
                                className="flex items-center border-2 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-teal-400 focus:ring-teal-400"
                            />
                            
                            <div>
                                <button className="btn btn-sm mt-8">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;