import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm';

class SignUpContainer extends Component {

  constructor(){
    super()
    this.state = {
      showComponent: false
    }
  }

  handleClick = () => {
    this.setState({
      showComponent: true
    })
  }

  render() {
    return (
      <div>
        {!this.state.showComponent ? <button onClick={this.handleClick}>Sign Up</button> : <SignUpForm/> }
       
      </div>
    )
  }
}

export default SignUpContainer
