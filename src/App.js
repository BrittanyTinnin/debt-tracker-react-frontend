import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import BillsContainer from './container/BillsContainer'
import BillContainer from './container/BillContainer'
import BillForm from './container/BillForm'
import NavBar from './components/NavBar'



class App extends Component {
  render() {
    return (
   

        <Router>
          <div className="App">

            <NavBar />
            <React.Fragment>
              <Route exact path="/" component={Home} />
              <Route exact path="/bills" component={BillsContainer} />
              <Route exact path="/bills/new/bill" component={BillForm} />
              <Route exact path='/bills/:id' component={BillContainer} />
            </React.Fragment>

          </div>
        </Router>
    );
  }
}

export default App;


