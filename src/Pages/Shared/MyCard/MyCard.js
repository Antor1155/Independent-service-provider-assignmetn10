import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyCard = ({ data }) => {
    const { name, price, image, description } = data;
    return (
        <div className='text-center mx-auto mt-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>price: {price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Let me help</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyCard;