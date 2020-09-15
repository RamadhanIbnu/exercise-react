import React from "react";
// import "./Exercise.css"
//import bootstrap
import { Container,Row,Col } from "react-bootstrap";
import MainContent from '../components/content/MainContent';
import SideBar from '../components/sidebar/sidebar';

const Exercise = () =>{
    return(
        <Container fluid="md">
            <Row>
                <Col md={2}>
                    {/* <SideBar/> */}
                    <h1>Bagian sidebar</h1>
                </Col>
                <Col md={10}>
                    <h1>Bagian content</h1>
                    <Row>
                        <Col md={10}>
                            <MainContent/>
                            <p>bagian main content</p>
                        </Col>
                        <Col md={2}>
                            <p>bagian sidebar content</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Exercise;