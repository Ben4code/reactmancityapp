import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'
import Layout from './Hoc/Layout'

import Home from './components/Home/Index'
import SignIn from './components/SignIn/Index'
import Dashboard from './components/Dashboard/Index'
import PrivateRoute from './components/AuthRoutes/PrivateRoutes';
import PublicRoutes from './components/AuthRoutes/PublicRoutes';
import AdminMatches from './components/Dashboard/Matches/Index'


class App extends Component {
  
  
  render() {
    //console.log(this.props);
    return (
      <BrowserRouter>
        <Layout user={this.props}>
          <Switch>
          <PrivateRoute exact {...this.props} path= '/admin_matches' component={AdminMatches}/>
            <PrivateRoute exact {...this.props} path= '/dashboard' component={Dashboard}/>
            
            <PublicRoutes restricted={false}  {...this.props} exact path="/" component={Home}/>
            <PublicRoutes restricted={true} {...this.props} exact path="/sign_in" component={SignIn}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}


export default App;
