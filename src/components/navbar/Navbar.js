import React from "react";
import './Navbar.css'
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
            <Navbar.Brand>MyExercise</Navbar.Brand>
          </LinkContainer>
          
          <Nav className="mr-auto nav-menu">
            <LinkContainer to="/">
              <Nav.Link className="nav-item">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Exercise">
              <Nav.Link className="nav-item">Exercise</Nav.Link>
            </LinkContainer>
                        
          </Nav>                   
        </Navbar>
      
    );
}

export default MyNavbar;