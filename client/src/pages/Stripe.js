import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';

class Stripe extends Component {
  render() {
    console.log(process.env.REACT_APP_STRIPEPUB)
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPEPUB}>
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Stripe;
