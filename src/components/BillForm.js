import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class BillForm extends Component {
    
    render() {
        const { handleChange, input, handleSubmit } = this.props
        return (
        
        <div>
        <h2 align="center">Add A Bill</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" name="name" value={input.name} onChange={handleChange} required/><br/>
                    <Form.Label>Phone: </Form.Label>
                    <Form.Control type="tel" name="phone_number" value={input.phone_number} onChange={handleChange}/><br />            <p>{this.props.input.phone_number}</p>
                    <Form.Label>Website: </Form.Label>
                    <Form.Control type="url" name="website" value={input.website} onChange={handleChange}/><br />
                    <Form.Label>Due Date: </Form.Label>
                    <Form.Control type="date" name="due_date" value={input.due_date} onChange={handleChange}/><br />
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control type="number" name="amount" value={input.amount} onChange={handleChange}/><br />
                    <input type="submit" variant="success"/>
                </Form.Group>
            </Form>
        </div>
      )
    }
}

export default BillForm


