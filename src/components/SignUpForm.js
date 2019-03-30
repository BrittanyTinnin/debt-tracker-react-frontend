import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../redux/actions/userActions'

class SignUpForm extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    console.log('inside handlesubmit for signup')
    e.preventDefault()
    this.props.signUp(this.state)
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""    })    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/><br/>
          <label>Last Name:</label>
          <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/><br/>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
          <label>password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {

//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm)
