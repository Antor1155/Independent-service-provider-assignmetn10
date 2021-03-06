import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Utilities/firebase.init';
import SginWithSocial from '../Shared/SignWithSocial/SginWithSocial';
import './Login.css'

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleFormSubmit = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  }

  // handling password reset here 
  const [existingUser, setExistingUser] = useState(null);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  function handleEmailOnBlue(event){
    let userEmail = event.target.value;
    console.log(userEmail);
    setExistingUser(userEmail);
  }

  const handleResetPassword = async () => {
    await sendPasswordResetEmail(existingUser);
    console.log('email resent send');
    toast("password reset email send", { position: "top-left", });
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
    navigate(from, { replace: true });
  }

  return (

    <div className='w-50 mx-auto mt-3'>
      <h1 className='text-center'>Please login</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailOnBlue} type="email" name='email' placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required />
        </Form.Group>
        <Link className='mb-1 d-block text-danger' to='/register'>new to the site ?</Link>
        <p>forget password? <button onClick={handleResetPassword} className='text-primary forget-button'>reset now</button></p>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <SginWithSocial from={from}></SginWithSocial>
    </div>
  );
};

export default Login;