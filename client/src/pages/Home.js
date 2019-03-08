import React from "react";
import { Container } from "../components/grid";
import { Jumbotron } from "../components/container";
import Image from "../components/images";

const pictures = [
  "./imgs/cassette.png",
  "./imgs/diamond.jpg",
  "./imgs/favicon.png",
  "./imgs/fitness.jpg",
  "./imgs/friends.jpg",
  "./imgs/hamburger.png",
  "./imgs/hourglass.jpg",
  "./imgs/ignasi_pattern_s.png",
  "./imgs/movie.jpg",
  "./imgs/shop.jpg",
  "./imgs/third-eye.jpg",
  "./imgs/train.jpg"
];
export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron
          headerName="Select one or more of these delicious broths."
          lead="Creator of the Worlds Most Collagen Rich Broth"
        >
          <div className="text-center">
            {/* <a href="/tables">
              <button className="btn btn-lg btn-primary">
                <span className="fa fa-list-alt" /> View Broth
              </button>
            </a> */}
            {/* <a href="/login">
              <button className="btn btn-lg btn-danger">
                <span className="fa fa-credit-card" /> Log In
              </button>
            </a> */}
            {/* <a href="/signup">
              <button className="btn btn-lg btn-danger">
                <span className="fa fa-credit-card" /> Sign Up
              </button>
            </a> */}
            <div>
              {this.props.userData.firstName}
            </div>
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
          </div>
        </Jumbotron>
      </Container>
    );
  }
}
