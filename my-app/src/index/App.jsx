import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props, context) {
    super(props, context);

  }

  static defaultProps = {
    recentContactList: []
  }

  render() {
    const { recentContactList } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addContact.bind(this)}>New</button>
        <div style={{ height: "400px", overflow: "auto" }}>
          <ul>
            {
              recentContactList.map((item, index) => {
                return <li key={index}>
                  {
                    Object.keys(item).map((key) => {
                      return (
                        <i key={key}>
                          <label>{key}</label>
                          <input defaultValue={item[key]} onChange={this.updateContact(index, key)} ></input>
                        </i>
                      );
                    })
                  }
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    //this.setState({ ...nextProps });
    console.log("currentProps:", this.props)
    console.log("nextProps:", nextProps);

  }

  updateContact(index, key) {
    return (event) => {
      const { dispatch, recentContactList } = this.props;
      console.log(event.target.value)
      console.log(index)
      console.log(key)
      let data = recentContactList.map((item, idx) => {
        if (index == idx) {
          item[key] = event.target.value;
        }
        return item;
      });
      dispatch(actions.updateContact(data));
    }
  }

  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(actions.listRecentContactList());
  }

  addContact() {
    let { dispatch } = this.props;
    console.log("add action.");
    dispatch(actions.addContact({
      "name": "二成",
      "sessionId": 112899
    }));
  }
}

App.propTypes = {
  recentContactList: PropTypes.array
};

export default connect((state) => {
  return { ...state }
})(App);
