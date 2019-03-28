import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
        <label>First Name</label>
        <input type="text" name="first_name" required/>
        <label>Last Name</label>
        <input type="text" name="last_name" required/>
        <label>Email</label>
        <input type="text" name="first_name" required/>
        <label>password</label>
        <input type="text" name="first_name" required/>
        <label>password confirmation</label>
        <input type="text" name="first_name" required/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default LoginForm
