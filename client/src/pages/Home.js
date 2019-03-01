import React from 'react'
import { Container } from '../components/grid'
import { Jumbotron } from '../components/container'

export default class Home extends React.Component {
  render () {
    return (
      <Container>
        <Jumbotron
          headerName='Broth Boyeee'
          lead='Creator of the Worlds Most Collagen Rich Broth'
        >
          <div className='text-center'>
            <a href='/tables'>
              <button className='btn btn-lg btn-primary'>
                <span className='fa fa-list-alt' /> View Broth
              </button>
            </a>
            <a href='/reserve'>
              <button className='btn btn-lg btn-danger'>
                <span className='fa fa-credit-card' /> Log In
              </button>
            </a>
          </div>
        </Jumbotron>
      </Container>
    )
  }
}
