import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import BillsContainer from './container/BillsContainer'


class App extends Component {
  render() {
    return (

      

      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/bills" component={BillsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;


