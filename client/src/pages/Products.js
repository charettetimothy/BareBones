import React, { Component } from "react";
import { Jumbotron } from "../components/container";
import { Container } from "../components/grid";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import API from "../api/API";

class Products extends Component {
  state = {
    Products: []
  };

  componentDidMount = () => {
    this.getProducts();
  };
  getProducts = () => {
    API.userProducts()
      .then(response => {
        // cons?ole.log(response)
        const productListArray = response.data;
        this.setState({ Products: productListArray });
        // this.setState({ redirect: true })
        // this.props.handleAuth({firstName: response.data.firstName, lastName: response.data.lastName, email: response.data.email})
      })
      .catch(err => console.log(err, err.status));
  };
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

        <div>
          {/* !curleys after product allows us to add variables. makes it an explicit return! */}
          {this.state.Products.map(product => {
            console.log(product) 
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.imgUrl} />
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
