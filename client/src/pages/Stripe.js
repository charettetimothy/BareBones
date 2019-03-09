import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../CheckoutForm";
import { Container } from "../components/grid";
class Stripe extends Component {
  render() {
    return (
      <Container>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPEPUB}>
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </Container>
    );
  }
}

export default Stripe;
