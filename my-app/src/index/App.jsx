import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Viewer from './Viewer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { ...props };
  }

  static defaultProps = {
    recentContactList: []
  }

  render() {
    const { recentContactList } = this.props;
    const recentContactListView = this.state.recentContactList;
    let recentContact = recentContactListView[0];
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
        <button onClick={this.cleanContact.bind(this)}>Clean</button>
        <button onClick={this.submit.bind(this)}>Submint</button>
        <h2>Edit Area</h2>
        <div style={{ height: "200px", overflow: "auto" }}>
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
        <h2>View Area</h2>
        <Viewer />
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({ ...nextProps });
    console.log("currentProps:", this.props)
    console.log("nextProps:", nextProps);

  }

  /**
   * 触发清空action
   */
  cleanContact() {
    let { dispatch } = this.props;
    dispatch(actions.cleanContact());
  }

  /**
   * 更新指定联系人
   * @param {当前数据所在索引} index 
   * @param {当前数据字段名} key 
   */
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
    let data = [{
      "name": "一成",
      "sessionId": 112898,
      "age": 18
    }];
    dispatch(actions.listRecentContactList(data));
  }

  submit() {
    let { dispatch, recentContactList } = this.props;
    console.log("submit action.");
    dispatch(actions.submit(recentContactList));
  }

  addContact() {
    let { dispatch } = this.props;
    console.log("add action.");
    dispatch(actions.addContact({
      "name": "二成",
      "sessionId": 112899,
      "age": 189
    }));
  }
}

App.propTypes = {
  recentContactList: PropTypes.array
};

export default connect((state) => {
  return { ...state }
})(App);
