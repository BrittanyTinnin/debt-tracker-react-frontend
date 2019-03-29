import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
        <label>Email</label>
        <input type="text" name="email" required/><br/>
        <label>password</label>
        <input type="password" name="password" required/><br/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default LoginForm
