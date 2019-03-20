import React, { Component } from 'react'
import Loading from '../components/Loading'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
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
            <ListGroup>

            {this.props.bills.map((b) =>
                        <ListGroup.Item key={b.id}><Link to={`/bills/${b.id}`} ><Bills name={b.name}/></Link></ListGroup.Item> )}
            </ListGroup>
            <Button variant="outline-dark">
                <Link to="/bills/new/bill">Add Bill</Link>
            </Button>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        bills: state.bills.bills
    }
}


export default connect(mapStateToProps, { fetchBills })(BillsContainer)