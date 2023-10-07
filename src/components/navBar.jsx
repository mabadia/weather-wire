import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'




const NavBar = () => {



    return (
        <>
        <Navbar>
          <Container>
            <Navbar.Brand id="logo" href="/">Weather-Wire</Navbar.Brand>
            <Nav id="nav" className="me-auto">
              <Nav.Link id="weather" href="/">Weather</Nav.Link>
              <Nav.Link id="hourly" href="/Hourly">Hourly</Nav.Link>
              <Nav.Link id="weekly" href="/weekly">Weekly</Nav.Link>
              <Nav.Link id="monthly" href="/monthly">Monthly</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default NavBar; 