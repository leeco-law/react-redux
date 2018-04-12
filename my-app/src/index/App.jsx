import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/index';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    let recentContactList = this.props.recentContactList || [];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {
            recentContactList.map((item, index) => {
              return <li key={index}> {JSON.stringify(item)} </li>;
            })
          }
        </ul>
        <button onClick={this.addContact.bind(this)}>New</button>
      </div>
    );
  }
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(actions.listRecentContactList());
  }

  addContact() {
    let { dispatch } = this.props;
    console.log("add action.");
    dispatch(actions.addContact());
  }
}

export default connect((state) => {
  return { ...state }
})(App);
