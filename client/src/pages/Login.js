import React from "react";
import { Container } from "../components/grid";
import { Input, FormBtn } from "../components/form";
import { Redirect } from "react-router-dom";
import API from "../api/API";
import PasswordMask from "react-password-mask";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      error: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.userLogin({
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
          this.setState({ redirect: true });
          localStorage.setItem("name", response.data.firstName)
          this.props.handleAuth({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email
          });
        })
        .catch(err => console.log(err, err.status));
    }
  };

  _renderRedirect = () => {
    return <Redirect to="/" />;
  };

  render() {
    if (this.state.redirect) {
      return this._renderRedirect();
    } else {
      return (
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">Login to your account.</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label for="reserve-email">Email</label>
                      <Input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email..."
                      />
                    </div>
                    <div className="form-group">
                      <label for="reserve-unique-id">Password</label>
                      <PasswordMask
                        inputClassName="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        useVendorStyles={false}
                      />
                    </div>
                    <FormBtn
                      disabled={!(this.state.email && this.state.password)}
                      onClick={this.handleFormSubmit}
                    >
                      Login
                    </FormBtn>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
    }
  }
}
