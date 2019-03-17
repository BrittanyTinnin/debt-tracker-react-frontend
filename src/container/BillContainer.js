import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBill } from '../redux/actions/billsActions'
// import { deleteBill } from '../redux/actions/billsActions'
import { Bill } from '../components/Bill'

export class BillContainer extends Component {


  componentDidMount() {
    const billId = window.location.href.split('/')[4]
    this.props.fetchBill(billId)
  }
  
  // deleteBill = (billId) => {
  //   // if (this.props.bill.id === billId ) {

  //     console.log(this.props.bills)
  //     const result = this.props.bills.splice(0, 1)
  //     // }
  //     console.log(result)
  //   // this.setState({
  //   //   billss: result
  //   // })
  //   debugger
  // }


  render() {

    return (
      <div>
        <h2>In the Bill Container</h2>
        <Bill bill={this.props.bills} delete={this.deleteBill}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bills: state.bills.bill,
  billss: state.bills.bills
})

const mapDispatchToProps = dispatch => {
  return {
    fetchBill: (billId) => dispatch(fetchBill(billId)),
    // deleteBill: (billId) => dispatch(deleteBill(billId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BillContainer)
