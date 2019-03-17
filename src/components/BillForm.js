import React, { Component } from 'react'

class BillForm extends Component {
    
    render() {
        const { handleChange, input, handleSubmit} = this.props
        return (
        
        <div>
        <h2>Add A Bill</h2>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="name" value={input.name} onChange={handleChange}/><br/>
            <p>{this.props.input.name}</p>
            <label>Phone: </label>
            <input type="tel" name="phone_number" value={input.phone_number} onChange={handleChange}/><br />            <p>{this.props.input.phone_number}</p>
            <label>Website: </label>
            <input type="url" name="website" value={input.website} onChange={handleChange}/><br />
            <p>{this.props.input.website}</p>
            <label>Due Date: </label>
            <input type="date" name="due_date" value={input.due_date} onChange={handleChange}/><br />
            <p>{this.props.input.due_date}</p>
            <label>Amount: </label>
            <input type="number" name="amount" value={input.amount} onChange={handleChange}/><br />
            <p>{this.props.input.amount}</p>
            <input type="submit" />
            </form>
        </div>
      )
    }
}

export default BillForm


