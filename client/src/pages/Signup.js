import React from 'react'
import { Container } from '../components/grid'
import { Input, FormBtn } from '../components/form'
import { Redirect } from 'react-router-dom'
import API from '../api/API'

export default class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      redirect: false
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if (this.state.firstName && this.state.lastName) {
      API.userSignUp({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
        .then(() => {
          this.setState({ redirect: true })
        })
        .catch(err => console.log(err))
    }
  }

  _renderRedirect = () => {
    return <Redirect to='/products' />
  }

  render () {
    if (this.state.redirect) {
      return this._renderRedirect()
    } else {
      return (
        <Container>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='card'>
                <div className='card-header'>Create your account</div>
                <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label for='reserve-name'>First Name</label>
                      <Input
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name='firstName'
                        placeholder='First Name...'
                      />
                    </div>
                    <div className='form-group'>
                      <label for='reserve-phone'>Last Name</label>
                      <Input
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name='lastName'
                        placeholder='Last Name...'
                      />
                    </div>
                    <div className='form-group'>
                      <label for='reserve-email'>Email</label>
                      <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name='email'
                        placeholder='Email...'
                      />
                    </div>
                    <div className='form-group'>
                      <label for='reserve-unique-id'>Password</label>
                      <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name='password'
                        placeholder='Password...'
                      />
                    </div>
                    <FormBtn
                      disabled={
                        !(this.state.firstName && this.state.lastName)
                      }
                      onClick={this.handleFormSubmit}
                    >
                      Submit
                    </FormBtn>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )
    }
  }
}
