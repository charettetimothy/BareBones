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

// after the page loads component did mount is used to get data
  componentDidMount = () => {
    this.getProducts();
  };

// call to database to get the products, store in const and setstate
  getProducts = () => {
    API.userProducts()
      .then(response => {
        const productListArray = response.data;
        this.setState({ Products: productListArray });
      })
      .catch(err => console.log(err, err.status));
  };
  
  render() {
    return (
      <div>
        <Container>
          <Jumbotron headerName="About our broths" lead="" />
        </Container>
        <Container>
        <div>
          {/* !curleys after product allows us to add variables. makes it an explicit return! */}
          {this.state.Products.map(product => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.imgUrl} />
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button variant="primary">Add to cart.</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        </Container>
      </div>
    );
  }
}

export default Products;
