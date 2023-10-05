import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/navBar.css'




const NavBar = () => {



    return (
        <>
        <Navbar>
          <Container>
            <Navbar.Brand id="logo" href="/">Weather-Wire</Navbar.Brand>
            <Nav id="nav" className="me-auto">
              <Nav.Link id="weather" href="/">Weather</Nav.Link>
              <Nav.Link id="hourly" href="/hourly">Hourly</Nav.Link>
              <Nav.Link id="weekly" href="/weekly">Weekly</Nav.Link>
              <Nav.Link id="monthly" href="/monthly">Monthly</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Button id="signUp" href="/signUp" variant="outline-success">Sign Up</Button>
            <Button id="login" href="/login" variant="outline-success">Login</Button>
          </Form>
          </Container>
        </Navbar>
        </>
    )
}

export default NavBar; 