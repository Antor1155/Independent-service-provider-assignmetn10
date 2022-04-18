import React from 'react';
import "./MyWork.css"
import marry1 from "../../../images/myWork/marry.jpg";
import marry2 from "../../../images/myWork/marry2.jpg";
import marry3 from "../../../images/myWork/marry3.jpg";
import marry4 from "../../../images/myWork/marry4.jpg";
import marry5 from "../../../images/myWork/marry5.jpg";
import marry6 from "../../../images/myWork/marry6.jpg";
import celebrate1 from "../../../images/myWork/celebrate.jpg";
import celebrate2 from "../../../images/myWork/celebrate6.jpg";
import celebrate3 from "../../../images/myWork/celebrate2.jpg";
import celebrate4 from "../../../images/myWork/celebrate3.jpg";
import celebrate5 from "../../../images/myWork/celebrate4.jpg";
import celebrate6 from "../../../images/myWork/celebrate5.jpg";

const MyWork = () => {
    return (
        <div className='workContainer'>
            <h3 className='text-primary text-center mt-5'>some of my works</h3>
            <div className='d-flex flex-wrap justify-content-around myWork-img-container'>
                <img src={marry1} alt="work" />
                <img src={marry2} alt="work" />
                <img src={marry3} alt="work" />
                <img src={marry4} alt="work" />
                <img src={marry5} alt="work" />
                <img src={marry6} alt="work" />
                <img src={celebrate1} alt="work" />
                <img src={celebrate2} alt="work" />
                <img src={celebrate3} alt="work" />
                <img src={celebrate4} alt="work" />
                <img src={celebrate5} alt="work" />
                <img src={celebrate6} alt="work" />
            </div>
        </div>
    );
};

export default MyWork;