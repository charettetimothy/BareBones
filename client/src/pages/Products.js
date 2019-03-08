import React, { Component } from "react";
import { Jumbotron } from "../components/container";
import { Container } from "../components/grid";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Products extends Component {
  state= {
    Products: []

  }
  // create component did mount
  // in cdm axios req to api (route that i make in backend routes folder)
  // update state with info from database
  // create an api route on backend 
  // 
  render() {
    return (
      <div>
        <Container>
          <Jumbotron headerName="About our broths" lead="" />
        </Container>
        <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./imgs/cassette.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Container>
        ;
      </div>
    );
  }
}

export default Products;
