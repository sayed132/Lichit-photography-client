import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <About></About>
        </div>
    );
};

export default Home;