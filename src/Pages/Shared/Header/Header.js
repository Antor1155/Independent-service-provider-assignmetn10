import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";
import camera from "../../../images/navBar/camera.svg";

const Header = () => {
    return (
        <div className='transparent sticky-top'>
            <Navbar expand={false}>
                <Container fluid >
                    <Link className='text-decoration-none fs-5 mx-0 mt-0 mb-0 px-0 fw-bold text-primary' to='/home'>Alpha's <p>P_palace</p> </Link>

                    <img className='camera' src={camera} alt="camera" />
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
                                <Nav.Link href="action1">Home</Nav.Link>
                                <Nav.Link as={Link} to="action2">Link</Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;