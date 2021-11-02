import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import AllServices from '../AllServices/AllServices';
import './Header.css';



const Header = () => {
    return (
        <Router>
            <div className="header">
                <Navbar fixed="top" bg="dark" variant="dark">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/allServices"}>All Services</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                        </Nav>           
                </Navbar>
            </div>
            <div>
                <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                        <Home></Home>
                </Route>
                <Route path="/AllServices">
                       <AllServices></AllServices>
                </Route>
                <Route path="/about">
                        <About></About>
                </Route>
                <Route path="/contact">
                        <Contact></Contact>
                </Route>
                <Route path="*">
                        <NotFound></NotFound>
                </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Header;