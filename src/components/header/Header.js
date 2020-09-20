import React from 'react';
import './Header.css'
// import react bootstrap
import { Jumbotron,Button } from "react-bootstrap";

const MyHeader = () =>{
    return (
      <Jumbotron>
        <h1>MyExercise</h1>
        <h4>
          The most popular exercise storage
        </h4>
        <p>
          <Button variant="primary">Find Exercise</Button>
        </p>
      </Jumbotron>
    );
}

export default MyHeader;