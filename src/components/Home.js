import React, { Component } from 'react'
import LoginContainer from '../container/SignUpContainer';


class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Welcome to Your Bill Tracker</h1>
                <LoginContainer />
            </div>
        )
   
    }
}

export default Home
