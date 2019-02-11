import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './Hoc/Layout'

import Home from './components/Home/Index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
