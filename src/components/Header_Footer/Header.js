import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { CityLogo } from '../UI/Icons'



export default class Header extends Component {

  render() {
    return (
      <AppBar position="fixed" style={{ backgroundColor: '#98c5e9', boxShadow: 'none', padding: '10px 0', borderBottom: '2px solid #00285e' }}>
        <Toolbar style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <CityLogo linkTo="/" link={true} width="70px" height="70px" />
            </div>
          </div>
          
          <Link to="/">
            <Button color="inherit" >Home</Button>
          </Link>
          
          <Link to="teams">
            <Button color="inherit" >The Team</Button>
          </Link>

          <Link to="matches">
            <Button color="inherit">The Matches</Button>
          </Link>

          {       
            this.props.user.user
            ?
            <Link to="dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>
            :
            <Link to="sign_in">
              <Button color="inherit">Sign In</Button>
            </Link>
          }
        </Toolbar>
      </AppBar>
    )
  }
}
