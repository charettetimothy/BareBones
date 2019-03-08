import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
// import Tables from "./pages/Tables";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stripe from "./pages/Stripe";
import "./App.css";
import Topnav from "./components/navbar";
import About from './pages/About'

class App extends Component {
  // cant pass 
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: ""
    }  
  }

  isAuthenticated = (objectFromLoginPage) => {
    console.log(objectFromLoginPage)
    this.setState({user: objectFromLoginPage})
  }

  render() {
    return (
      <Router>
        <div>
          <Topnav />
          <Switch>
            <Route exact path="/" render={(props)=> <Home {...props} userData={this.state.user} />} />
            {/* <Route exact path="/tables" component={Tables} /> */}
            <Route exact path="/login" render={(props)=> <Login {...props} handleAuth={this.isAuthenticated} />} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={Stripe} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
