import React from 'react';
import "./Banner.css";
import banner from "../../../images/banner/banner2.jpg"

const Banner = () => {
    return (
        <div className='mx-auto banner-container'>
           <img src={banner} alt="" className="banner mx-auto" />
           <h3 className='banner-text'>One picture is more powerful than 10 thousand words</h3>
        </div>
    );
};

export default Banner;