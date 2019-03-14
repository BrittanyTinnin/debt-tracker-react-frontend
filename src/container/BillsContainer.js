import React, { Component } from 'react'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { fetchBills } from '../redux/actions/billsActions'
import { Bills } from '../components/Bills'
import { Link } from 'react-router-dom'

class BillsContainer extends Component {
   

    componentDidMount() {
        this.props.fetchBills()        
    }
    
    render() {
        if (this.props.bills.length === 0 ) {
            return <Loading />
        } 
        return (
        <div>
            <ul>
                {this.props.bills.map((b) => 
                    <Link to={`/bills/${b.id}`} key={b.id}><li><Bills name={b.name}/></li></Link> )}
            </ul>
        </div>
    )
  }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        bills: state.bills.bills
    }
}



export default connect(mapStateToProps, { fetchBills })(BillsContainer)