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
        {this.state.showComponent ? <SignUpForm/> : <button onClick={this.handleClick}>Sign Up</button> }
        {this.state.showComponent ? <LoginForm/> : <button onClick={this.handleClick}>Login</button> }
      </div>
    )
  }
}

export default SignUpContainer
