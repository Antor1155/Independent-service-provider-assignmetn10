import React from 'react';
import Banner from '../Banner/Banner';
import MyWork from '../MyWork/MyWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MyWork></MyWork>
        </div>
    );
};

export default Home;