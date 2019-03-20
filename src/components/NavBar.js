import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
  }

export default class NavBar extends Component {

    render() {
        return (
                <div className="navbar">
                    <NavLink
                    to="/bills"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                        }}
                    >Bills</NavLink>
            
                
                    <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                    >Home</NavLink>
                    
                    <NavLink
                    to="/bills/new/bill"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                    >New Bill</NavLink>
                </div>
            
        )
    }
}

