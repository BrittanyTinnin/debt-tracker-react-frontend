import React, { Component } from 'react'

class SignUpForm extends Component {

  state = {
    first_name: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //post login info
    
  }

  render() {
    return (
      <div>
        <form>
          <label>First Name:</label>
          <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/><br/><p>{this.state.first_name}</p>
          <label>Last Name:</label>
          <input type="text" name="last_name" /><br/>
          <label>Email:</label>
          <input type="text" name="email" /><br/>
          <label>password:</label>
          <input type="text" name="password" /><br/>
          <label>password confirmation:</label>
          <input type="text" name="password_confirmation" /><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUpForm
