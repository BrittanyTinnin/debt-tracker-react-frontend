import React from 'react'

export const Bill = (props) => 
<div>
     <p>Name: {props.b.name}</p>
     <p>Phone Number: {props.b.phone_number}</p>
     <p>Website: {props.b.website}</p>
     <p>Amount: ${props.b.amount}</p>
     <p>Due Date: {props.b.due_date}</p>
 </div>
    