import React from "react";
//import bootstrap package
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


const MyNavbar = () =>{
    return (
        <Navbar bg="dark" variant="dark">
          <LinkContainer to="/">
            <Navbar.Brand>Exercise.com</Navbar.Brand>
          </LinkContainer>
          
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Exercise">
              <Nav.Link >Exercise</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MyProfile">
              <Nav.Link >MyProfile</Nav.Link>
            </LinkContainer>            
          </Nav>                   
        </Navbar>
      
    );
}

export default MyNavbar;