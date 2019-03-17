// import React from 'react'

// export const Bill = (props) => 
// <div>
// {console.log(props)}
//      <p>Name: {props.bill.name}</p>
//      <p>Phone Number: {props.bill.phone_number}</p>
//      <p>Website: {props.bill.website}</p>
//      <p>Amount: ${props.bill.amount}</p>
//      <p>Due Date: {props.bill.due_date}</p>
//      <div>
//          <button onClick={(e) => props.delete(e, props.bill.id)}>DELETE</button>
//      </div>
//  </div>

import React, { Component } from 'react'

export class Bill extends Component {

    // delete = (e, id) => {
    //     e.preventDefault()
    //     this.props.delete(id)
    // }

  render() {
      console.log(this.props)
    return (
      <div>
        <p>Name: {this.props.bill.name}</p>
        <p>Phone Number: {this.props.bill.phone_number}</p>
        <p>Website: {this.props.bill.website}</p>
        <p>Amount: ${this.props.bill.amount}</p>
        <p>Due Date: {this.props.bill.due_date}</p>
        <div>
            <button onClick={() => this.props.delete(this.props.bill.id)}>DELETE</button>
        </div>
      </div>
    )
  }
}

export default Bill
