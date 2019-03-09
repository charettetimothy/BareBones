import React from "react";
import { Container } from "../components/grid";
import { Jumbotron } from "../components/container";
export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron headerName="Big Boned" lead="Collagen rich broths." />
      </Container>
    );
  }
}
