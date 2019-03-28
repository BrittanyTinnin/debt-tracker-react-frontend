import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

class SignUpContainer extends Component {

  constructor(){
    super()
    this.state = {
      showSignUpComponent: false,
      showLoginComponent: false
    }
  }

  handleSignUpButton = () => {
    this.setState({
      showSignUpComponent: true
    })
  }

  handleLoginButton = () => {
    this.setState({
      showLoginComponent: true
    })
  }

  render() {
    return (
      <div>
        {this.state.showSignUpComponent ? <SignUpForm/> : <button onClick={this.handleSignUpButton}>Sign Up</button> }
        {this.state.showLoginComponent ? <LoginForm/> : <button onClick={this.handleLoginButton}>Login</button> }
      </div>
    )
  }
}

export default SignUpContainer
