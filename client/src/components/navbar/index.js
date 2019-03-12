import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import API from "../../api/API";
import { Redirect } from "react-router-dom";
class Topnav extends Component {
  state = {
    redirect: false,
    name: this.props.userData.firstName,
    user: this.props.userData
  };
  handleLogout = () => {
    API.logout().then((response) =>{
      console.log(response)
      this.setState({name: ""})
    // localStorage.removeItem("name");
    // this.setState({ redirect: true });
    })
    // this.setState({ redirect: false });
  };
  _renderRedirect = () => {
    return <Redirect to="/" />;
  };

  render() {
    if (this.state.redirect) {
      return this._renderRedirect();
    }
    // let name;
    // if (localStorage.hasOwnProperty("name")) {
    //   name = localStorage.getItem("name");
    // }
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Bare Bones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Welcome {this.state.name} </Nav.Link>
            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topnav;
