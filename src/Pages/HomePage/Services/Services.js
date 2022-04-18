import React from 'react';
import Card from '../../Shared/Card/Card';

const routhData = [
    {id:1,
    name: "Profile Photo",
    price: "$ 55",
    image: "https://i.ibb.co/RCCCyPr/profile.jpg",
    description: "A picture which truely describes you"
    },
    {id:2,
    name: "Wedding Photo",
    price: "$ 300",
    image: "https://i.ibb.co/8z4CfFf/wedding.jpg",
    description: "Once a live-time, we make it count"
    },
    {id:3,
    name: "travelling Photo",
    price: "$ 200",
    image: "https://i.ibb.co/0nNDtPD/travelling.jpg",
    description: "Wherever you go, we follow you"
    },
    {id:4,
    name: "other Photo",
    price: "$ 150",
    image: "https://i.ibb.co/8c3yhrQ/other-celemory.jpg",
    description: "You enjoy, we take care of memories"
    }
]

const Services = () => {
    return (
        <div>
            {routhData.map(data => <Card key={data.id} data={data}></Card>)}
        </div>
    );
};

export default Services;