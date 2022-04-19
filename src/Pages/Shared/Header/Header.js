import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";
import camera from "../../../images/navBar/camera.svg";
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import { signOut } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    function handleSignOut() {
        signOut(auth);
    }
    const signoutComponent = <Button className='btn-sm me-3' onClick={handleSignOut}> signout</Button>;

    // handling password reset here 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
        await sendPasswordResetEmail(user.email);
        console.log('email resent send');
        toast("password reset email send", {position: "top-left",});
    }
    return (
        <div className='transparent sticky-top'>
            <Navbar expand={false}>
                <Container fluid >
                    <Link className='text-decoration-none fs-5 mx-0 mt-0 mb-0 px-0 fw-bold text-primary' to='/home'>Alpha's <p>P_palace</p> </Link>

                    <img className='camera' src={camera} alt="camera" />


                    <div>
                        {user ? signoutComponent : <h3 className='text-danger d-inline pe-3'>N/A</h3>}

                        <Navbar.Toggle aria-controls="offcanvasNavbar" />

                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">

                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>

                                    {/* password reset section with conditional rendering  */}
                                    {user && <button onClick={handleResetPassword} className='btn btn-danger px-0'>password reset</button>}

                                    {sending && <h5 className='text-warning mt-3'>sending email reset...</h5>}

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>
                </Container>
            </Navbar>
            <ToastContainer />
        </div>
    );
};

export default Header;