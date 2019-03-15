import React, { Component } from 'react'
// import uuid from "uuid";
import { connect } from 'react-redux'
import { addBill } from '../redux/actions/billsActions'
import BillForm from '../components/BillForm'


export class BillFormContainer extends Component {

  state = {
      name: "",
      phone_number: "",
      website: "",
      due_date: "",
      amount: ""
      // id: uuid(),
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBill(this.state)
    this.setState({
      name: '',
      phone_number: '',
      website: '',
      due_date: '',
      amount: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <BillForm input={this.state} handleSubmit={this.props.handleSubmit} handleChange={this.handleChange}/>
      // <div>
      //   <h2>Add A Bill</h2>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>Name: </label>
      //     <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
      //     <label>Phone: </label>
      //     <input type="tel" name="phone_number" value={this.state.phone_number} onChange={this.handleChange}/><br />
      //     <label>Website: </label>
      //     <input type="url" name="website" value={this.state.website} onChange={this.handleChange}/><br />
      //     <label>Due Date: </label>
      //     <input type="date" name="due_date" value={this.state.due_date} onChange={this.handleChange}/><br />
      //     <label>Amount: </label>
      //     <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}/><br />
      //     <input type="submit" />
      //   </form>
      // </div>
    )
  }
}

// // const mapStateToProps = (state) => ({
// // })

const mapDispatchToProps = dispatch => {
  return {
    addBill: (bill) => dispatch(addBill(bill))
  }
}

export default connect(null, mapDispatchToProps)(BillForm)
