import React, { Component } from 'react';
import axios from 'axios';
import Router from './app/Router';
import { baseURL } from './app/config';


export default class App extends Component {
  componentWillMount() {
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = 1500;
  }

  render() {
    return (
      <Router />
    );
  }
}

