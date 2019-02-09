import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Layout from './Hoc/Layout'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
        Hello from App =>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
