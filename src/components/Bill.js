import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'


class Bill extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Not Paid'
    }
    this.handlePaid = this.handlePaid.bind(this)
  }


  // handlePaid(){
  //   // this.setState({
  //   //   name: 'Paid'
  //   // })
  //   console.log('a')
  //   fetch('http://localhost:3001/billsjfdkls;afjld;s')
  //   .then(resp => {
  //     if(resp.status != 200){
  //       throw new Error(resp.statusText)
  //     } else {
  //       console.log('b')
  //       return resp.json();
  //     }
  //   })
  //   .then(bills => console.log('c', bills))
  //   s
  //   .catch(error => console.log('d', error))
  //   console.log('e')

  //   // a b c d e
  //   // a e d
  // }


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
            <button onClick={this.handlePaid}>{this.state.name}</button>
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



export default connect(mapStateToProps)(Bill)
