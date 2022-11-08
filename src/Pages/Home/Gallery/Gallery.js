import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Gallery = () => {
    return (
        <PhotoProvider>
            <div>
                <div className='text-center mb-4'>
                    <p className="text-2xl font-bold text-orange-600">Gallery</p>
                    <h2 className="text-5xl font-semibold">There is my Click</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        <PhotoView src="https://source.unsplash.com/random/301x301/">
                            <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?0">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?1">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?2">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?3">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?4">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?5">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?6">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/200x200/?7">
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                        </PhotoView>
                        <PhotoView src="https://source.unsplash.com/random/302x302/">
                            <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                    </div>
                </section>
            </div>
        </PhotoProvider>
    );
};

export default Gallery;