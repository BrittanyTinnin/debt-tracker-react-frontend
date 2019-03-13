import React, { Component } from 'react'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { fetchBills } from '../redux/actions/billsActions'
import { Bills } from '../components/Bills'

class BillsContainer extends Component {
    state = {
        bills: []
    }

    componentDidMount() {
        this.props.fetchBills()        
    }

  render() {
      if (this.props.bills.length === 0) {
        return <Loading />
    }
    return (
        <div>
            {/* <ul>
                {this.props.bills.map((b) => 
                <li key={b.id}>
                    <div>
                        <p>Name: {b.name}</p>
                        <p>Phone Number: {b.phone_number}</p>
                        <p>Website: {b.website}</p>
                        <p>Amount: ${b.amount}</p>
                        <p>Due Date: {b.due_date}</p>
                    </div>
                </li>
                )}
            </ul> */}
            <Bills bills={this.props.bills}/>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        bills: state.bills
    }
}



export default connect(mapStateToProps, { fetchBills })(BillsContainer)