import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
//import { connect } from 'react-redux';

import './App.css';
import Dashboard from './dashboard/Dashboard';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

/*const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);*/
export default App;
