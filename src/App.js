import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'
import Layout from './Hoc/Layout'

import Home from './components/Home/Index'
import SignIn from './components/SignIn/Index'
import Dashboard from './components/Dashboard/Index'
import PrivateRoute from './components/AuthRoutes/PrivateRoutes';
import PublicRoutes from './components/AuthRoutes/PublicRoutes';



class App extends Component {
  
  
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute exact {...this.props} path= '/dashboard' component={Dashboard}/>
            <PublicRoutes restricted={false}  {...this.props} exact path="/" component={Home}/>
            <PublicRoutes restricted={true} {...this.props} exact path="/sign_in" component={SignIn}/>

            {/* <Route exact path="/sign_in" component={SignIn}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/> */}

            
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}


export default App;
