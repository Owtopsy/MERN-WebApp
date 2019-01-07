import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home.js';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Navigation } from './components/Navigation/Navigation.js';
import { DashboardCreate } from "./components/Dashboard/Create.js";
import { DashboardEdit } from "./components/Dashboard/Edit.js";
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return (
      
            <div className="App">
                <header className="App-header">
                </header>
                <div className="App-content">
                  <Switch>
                      <Route exact path="/" component={Home}/>  
                      <Route exact path="/login" component={Login}/>
                      <Route exact path ="/signup" component={Signup}/>
                      <PrivateRoute path='/dashboard' component={Dashboard} />
                  </Switch>
                </div>
            </div>
        );
    }
}



export default App;