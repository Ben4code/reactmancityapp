import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './Hoc/Layout'

import Home from './components/Home/Index'
import SignIn from './components/SignIn/Index'
import Dashboard from './components/Dashboard/Index'
 import PrivateRoute from './components/AuthRoutes/PrivateRoutes';

class App extends Component {
  
  
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute exact {...this.props} path= '/dashboard' component={Dashboard}/>
            <Route exact path="/sign_in" component={SignIn}/>
            
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/dashboard" component={Dashboard}/> */}

            
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}


export default App;
