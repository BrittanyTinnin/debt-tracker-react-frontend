import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBill } from '../redux/actions/billsActions'
import BillForm from '../components/BillForm'


class BillFormContainer extends Component {

  state = {
      name: "",
      phone_number: "",
      website: "",
      due_date: "",
      amount: ""
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
    window.alert("Successfully Created New Bill.")

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <BillForm input={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addBill: (bill) => dispatch(addBill(bill))
  }
}

export default connect(null, mapDispatchToProps)(BillFormContainer)
