import React, { Component } from 'react'

class SignUpForm extends Component {
  render() {
    return (
      <div>
        <form>
        <label>First Name</label>
        <input type="text" name="first_name" required/><br/>
        <label>Last Name</label>
        <input type="text" name="last_name" required/><br/>
        <label>Email</label>
        <input type="text" name="email" required/><br/>
        <label>password</label>
        <input type="text" name="password" required/><br/>
        <label>password confirmation</label>
        <input type="text" name="password_confirmation" required/><br/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUpForm
