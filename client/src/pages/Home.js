import React from "react";
import { Container } from "../components/grid";
import { Jumbotron } from "../components/container";
import Image from "../components/images";

// const pictures = [
//   "./imgs/cassette.png",
//   "./imgs/diamond.jpg",
//   "./imgs/favicon.png",
//   "./imgs/fitness.jpg",
//   "./imgs/friends.jpg",
//   "./imgs/hamburger.png",
//   "./imgs/hourglass.jpg",
//   "./imgs/ignasi_pattern_s.png",
//   "./imgs/movie.jpg",
//   "./imgs/shop.jpg",
//   "./imgs/third-eye.jpg",
//   "./imgs/train.jpg"
// ];
export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron headerName="Big Boned" lead="Collagen rich broths.">
          {/* <div className="text-center">
            <div>
              {pictures.map(picture => (
                <Image
                  key={picture}
                  src={picture}
                  handleClick={this.handleClick}
                  alt="casette"
                />
              ))}
            </div>
          </div> */}
        </Jumbotron>
      </Container>
    );
  }
}
