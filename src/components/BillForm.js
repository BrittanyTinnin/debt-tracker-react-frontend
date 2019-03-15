import React from 'react'

export default function BillForm(props) {
    
    // console.log(props.input)
    return (
       
    <div>
    <h2>Add A Bill</h2>
    <form onSubmit={props.handleSubmit}>
      <label>Name: </label>
      <input type="text" name="name" value={props.name} onChange={props.handleChange}/><br/>
      {/* <p>{props.input.name}</p> */}
      <label>Phone: </label>
      <input type="tel" name="phone_number" value={props.phone_number} onChange={props.handleChange}/><br />
      <label>Website: </label>
      <input type="url" name="website" value={props.website} onChange={props.handleChange}/><br />
      <label>Due Date: </label>
      <input type="date" name="due_date" value={props.due_date} onChange={props.handleChange}/><br />
      <label>Amount: </label>
      <input type="number" name="amount" value={props.amount} onChange={props.handleChange}/><br />
      <input type="submit" />
    </form>
  </div>
  )
}
