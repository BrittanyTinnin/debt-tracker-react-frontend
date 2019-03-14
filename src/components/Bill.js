import React from 'react'

export const Bill = (props) => 
<div>
    {console.log(props)}
     <p>Name: {props.bill.name}</p>
     <p>Phone Number: {props.bill.phone_number}</p>
     <p>Website: {props.bill.website}</p>
     <p>Amount: ${props.bill.amount}</p>
     <p>Due Date: {props.bill.due_date}</p>
 </div>
    