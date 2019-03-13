import React from 'react'
import { Bill } from './Bill'

export const Bills = (props) => 
    <ul>
        {props.bills.map((b) => 
        <li key={b.id}>
            <div>
                <Bill b={b} />
            </div>
        </li>
        )}
    </ul>


