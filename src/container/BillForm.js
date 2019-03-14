import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BillForm extends Component {
  state = {
    bills: []
  }

  render() {
    return (
      <div>
        <h1>In Bill Form</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BillForm)
