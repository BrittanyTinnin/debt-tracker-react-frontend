import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

class BillForm extends Component {
    
    render() {
        const { handleChange, input, handleSubmit} = this.props
        return (
        
        <div>
        <Form>

        <h2>Add A Bill</h2>
            <Form.Group>
                <form onSubmit={handleSubmit}>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control input type="text" name="name" value={input.name} onChange={handleChange} required/><br/>
                    <p>{this.props.input.name}</p>
                    <Form.Label>Phone: </Form.Label>
                    <Form.Control input type="tel" name="phone_number" value={input.phone_number} onChange={handleChange}/><br />            <p>{this.props.input.phone_number}</p>
                    <Form.Label>Website: </Form.Label>
                    <Form.Control input type="url" name="website" value={input.website} onChange={handleChange}/><br />
                    <p>{this.props.input.website}</p>
                    <Form.Label>Due Date: </Form.Label>
                    <Form.Control input type="date" name="due_date" value={input.due_date} onChange={handleChange}/><br />
                    <p>{this.props.input.due_date}</p>
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control input type="number" name="amount" value={input.amount} onChange={handleChange}/><br />
                    <p>{this.props.input.amount}</p>
                    <Alert>
                    <input type="submit" variant="success"/>

                    </Alert>
                </form>
            </Form.Group>
        </Form>
        </div>
      )
    }
}

export default BillForm


