import React from 'react';
import profilePic from "../../images/profile/profilePic.jpg";
import './About.css'

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className='d-flex justify-content-center pt-3 pe-5 mb-4'>
                <img className='profilePicture' src={profilePic} alt="profile" />
            </div>
            <div className='text-center text-white pb-5'>
                <h2>Md Azizul Hakim Antor</h2>
                <p>My aim is to be a part of <span className='fs-2 text-warning'>FAANG .</span></p>
                <p className='ps-5 pe-5'><small>How to achieve, still not 100% sure !! But with time, preperationa and expansion of knowledge -everyday I am feeling one step closer. After completion of this course, palnnin to learn algorithm and data-structure along with joining few competitions to test myself. Let's hope for the best.</small></p>
                <p className='text-info '>Whatever will be the outcome, will enjoy the ride for sure!!!</p>
            </div>
        </div>
    );
};

export default About;