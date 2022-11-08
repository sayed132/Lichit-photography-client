import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Gallery></Gallery>
            <About></About>
        </div>
    );
};

export default Home;