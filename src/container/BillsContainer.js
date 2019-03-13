import React, { Component } from 'react'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { fetchBills } from '../redux/actions/billsActions'
import { Bills } from '../components/Bills'
import { Bill } from '../components/Bill'

class BillsContainer extends Component {
    state = {
        bills: []
    }

    componentDidMount() {
        this.props.fetchBills()        
    }

    handleClick = () => {
        //to view details of bill
        //send to <Bill />
        this.props.bills.map((b) =>
            <Bill name={b.name} amount={b.amount} />
        )
    }



    render() {
      if (this.props.bills.length === 0) {
        return <Loading />
    }
    return (
        <div>
            <ul>
                {this.props.bills.map((b) => 
                    <button onClick={this.handleClick} key={b.id}><Bills name={b.name}/></button>
                )}
            </ul>
            {/* <Bills bills={this.props.bills}/> */}
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