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
    e.preventDefault()
    this.props.signUp(this.state)
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    })
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
          <input type="password" name="password" /><br/>
          <label>password confirmation:</label>
          <input type="password" name="password_confirmation" /><br/>
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
