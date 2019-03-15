import React, { Component } from 'react'
import uuid from "uuid";
import { connect } from 'react-redux'
import { addBill } from '../redux/actions/billsActions'


export class BillForm extends Component {

  state = {
    bill: {
      id: uuid(),
      name: "",
      phone_number: "",
      website: "",
      due_date: "",
      amount: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBill(this.state)
    this.setState({
      [event.target.name]: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add A Bill</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          <label>Phone: </label>
          <input type="tel" name="phone_number" value={this.state.phone_number} onChange={this.handleChange}/><br />
          <label>Website: </label>
          <input type="url" name="website" value={this.state.website} onChange={this.handleChange}/><br />
          <label>Due Date: </label>
          <input type="date" value={this.state.due_date} onChange={this.handleChange}/><br />
          <label>Amount: </label>
          <input type="number" value={this.state.amount} onChange={this.handleChange}/><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// // const mapStateToProps = (state) => ({
// // })

const mapDispatchToProps = dispatch => {
  return {
    addBill: () => dispatch(addBill())
  }
}

export default connect(null, mapDispatchToProps)(BillForm)
