import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/index';
import { connect } from 'react-redux';
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      recentContactList: []
    };
  }

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
              return <li key={index} item={item} 
                onClick={this.updateContact.bind(this, index, item, this.props.update)}> {JSON.stringify(item)} </li>;
            })
          }
        </ul>
        <button onClick={this.addContact.bind(this)}>New</button>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
    console.log("currentProps:", this.props)
    console.log("nextProps:", nextProps);
  }

  updateContact(index, item,callback) {
    console.log("index:", index);
    console.log("item:", item);
    item.name = "443";
    this.setState({
      "recentContactList": this.state.recentContactList.map((it, idx) => {
        if (idx == index) {
          return item;
        }
        return it;
      })
    });
    callback(item);
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
