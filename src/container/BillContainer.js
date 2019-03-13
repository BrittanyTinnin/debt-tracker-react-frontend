import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BillContainer extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <h2>In the Bill Container</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BillContainer)
