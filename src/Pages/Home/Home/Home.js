import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {

    useTitle('Home')
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