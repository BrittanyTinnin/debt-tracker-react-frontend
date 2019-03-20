import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import { delBill } from '../redux/actions/billsActions'


class Bill extends Component {


  render() {
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <div id={this.props.bill.id}>
            <Card.Title>{this.props.bill.name}</Card.Title>
            <Card.Text>{this.props.bill.phone_number}</Card.Text>
            <Card.Link href="#">{this.props.bill.website}</Card.Link>
            <Card.Text>Amount: ${this.props.bill.amount}</Card.Text>
            <Card.Text>Due Date: {this.props.bill.due_date}</Card.Text>
            {/* <div>
                <button onClick={() => this.props.deleteBill(this.props.bill.id)}>DELETE</button>
            </div> */}
          </div>
        </Card.Body>
      </Card>

    )
  }
}

const mapStateToProps = state => {
  return {
    bills: state.bills
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBill: (id) => dispatch(delBill(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bill)
