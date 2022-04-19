import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className='text-center'>
            <h2 className='text-primary'>Checkout page</h2>
            <Form className='w-50 mx-auto'>

                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-danger' htmlFor="disabledTextInput">under construction!!!</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-primary' htmlFor="disabledSelect">Will update soon!!!</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="disabledFieldsetCheck"
                            label="Can't check this"
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </Form>
        </div>
    );
};

export default CheckOut;