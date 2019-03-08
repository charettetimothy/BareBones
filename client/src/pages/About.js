import React, { Component } from "react";
import { Jumbotron } from "../components/container";
import { Container } from "../components/grid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron headerName="About our broths" lead="" />
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src="./imgs/diamond.jpg" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="./imgs/diamond.jpg" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="./imgs/diamond.jpg" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
