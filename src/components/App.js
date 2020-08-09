import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
//import { connect } from 'react-redux';

import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import CardCollector from './CardCollector';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/collector" exact component={CardCollector} />
        </Switch>
      </div>
    );
  }
}

/*const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);*/
export default App;
