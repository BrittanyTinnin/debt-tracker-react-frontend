import React, { Component } from 'react'
import uuid from "uuid";


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

  //handleSubmit

  //handleChange

  render() {
    return (
      <div>
        <h2>Add A Bill</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" value={this.state.name} onChange={this.handleChange}/><br/>
          <label>Phone: </label>
          <input type="tel" value={this.state.phone_number} onChange={this.handleChange}/><br />
          <label>Website: </label>
          <input type="url" value={this.state.website} onChange={this.handleChange}/><br />
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

// // const mapDispatchToProps = {
  
// // }

export default BillForm
