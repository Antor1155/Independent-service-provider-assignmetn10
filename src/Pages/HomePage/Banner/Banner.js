import React from 'react';
import "./Banner.css";
import banner from "../../../images/banner/banner2.jpg"

const Banner = () => {
    return (
        <div className='mx-auto'>
           <img src={banner} alt="" className="banner mx-auto" />
        </div>
    );
};

export default Banner;