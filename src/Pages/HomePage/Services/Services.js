import React from 'react';
import MyCard from '../../Shared/MyCard/MyCard';
import "./Services.css"

const routhData = [
    {
        id: 1,
        name: "Profile Photo",
        price: "$ 55",
        image: "https://i.ibb.co/RCCCyPr/profile.jpg",
        description: "Picture to truely describe you"
    },
    {
        id: 2,
        name: "Wedding Photo",
        price: "$ 300",
        image: "https://i.ibb.co/8z4CfFf/wedding.jpg",
        description: "Once a live-time, we make it count"
    },
    {
        id: 3,
        name: "travelling Photo",
        price: "$ 200",
        image: "https://i.ibb.co/0nNDtPD/travelling.jpg",
        description: "Wherever you go, we follow you"
    },
    {
        id: 4,
        name: "other Photo",
        price: "$ 150",
        image: "https://i.ibb.co/8c3yhrQ/other-celemory.jpg",
        description: "You enjoy, we take care of memories"
    }
]

const Services = () => {
    return (
        <div className='mt-5'>
            <hr />
            <h2 className='text-center text-primary'>services</h2>
            <div className='services'>
                {routhData.map(data => <MyCard key={data.id} data={data}></MyCard>)}
            </div>
            <hr/>
        </div>
    );
};

export default Services;