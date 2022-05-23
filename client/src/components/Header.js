import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            setIsLogged(true);
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const logOut = () => {
        dispatch(logout());
        setIsLogged(false);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Pharmacy app</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/shop">Shop</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        {isLogged && (
                            <>
                                <Nav.Link>
                                    <Link to="/my-account">My account</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/cart">
                                        <i class="bi bi-cart"></i>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link onClick={logOut}>Log out</Nav.Link>
                            </>
                        )}
                        {!isLogged && (
                            <>
                                <Nav.Link>
                                    <Link to="/login">Login</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/register">Register</Link>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
