import React, { Component } from 'react'
import Loading from '../components/Loading'

export default class BillsContainer extends Component {
    state = {
        bills: []
    }

    componentDidMount() {
        //move this to redux store, then call function for this
        fetch('http://localhost:3001/bills')
            .then(res => res.json())
            .then(data => this.setState({ bills: data}))
    }

  render() {
      if (this.state.bills.length === 0) {
        return <Loading />
    }
    return (
        <div>
            <ul>
                {this.state.bills.map((b) => 
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
            </ul>
        </div>
    )
  }
}
