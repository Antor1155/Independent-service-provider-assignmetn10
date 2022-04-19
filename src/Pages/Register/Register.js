import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Utilities/firebase.init';
import SginWithSocial from '../Shared/SignWithSocial/SginWithSocial';

const Register = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    console.log(from);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleFormSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
    }

    if (error) {
        return (
            <div className='text-danger text-center m-5'>
                <h3>Error: {error.message}</h3>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, {replace:true});
      }

    return (
        <div className='w-50 mx-auto mt-3'>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="agree with all terms" required />
                </Form.Group>
                <Link className='mb-1 d-block' to='/login'>Already have an account</Link>
                <Button variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            <SginWithSocial from={"/checkout"}></SginWithSocial>
        </div>
    );
};

export default Register;