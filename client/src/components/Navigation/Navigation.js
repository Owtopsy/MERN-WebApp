import React from 'react';
import { DashboardCreate } from "../Dashboard/Create.js";
import { DashboardEdit } from "../Dashboard/Edit.js";
import { PrivateRoute } from '../PrivateRoute.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import API from '../../utils/API';
import logo from '../../logo.svg';
const parseQueryString = require('query-string');

export class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.admin = "";
        this.connected = "";
    }

    render() {
        console.log("navigation : ", this.props.connected);
        if(this.props.connected){
            return(
                <div className="Navigation">
                    <Navbar inverse collapseOnSelect>
                      <Navbar.Header>
                        <Navbar.Brand>
                          <a href="#brand">Portfolio Donia</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                      </Navbar.Header>
                      <Navbar.Collapse>
                        <Nav>
                            <IndexLinkContainer to="/create">
                              <NavItem eventKey={1}>
                                Create
                              </NavItem>
                            </IndexLinkContainer>
                            <IndexLinkContainer to="/edit">
                              <NavItem eventKey={1}>
                                Edit
                              </NavItem>
                            </IndexLinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} onClick={this.props.disconnectAction}>
                                Disconnect
                            </NavItem>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        }
        return(

            <div className="Navigation">
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#brand">Portfolio Donia</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                      <NavItem eventKey={1} href="#">
                        About me
                      </NavItem>
                      <NavDropdown eventKey={2} title="Works" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Programming</MenuItem>
                        <MenuItem eventKey={2.2}>3D modeling</MenuItem>
                        <MenuItem eventKey={2.3}>Other</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.3}>Sewing</MenuItem>
                      </NavDropdown>
                      <NavItem eventKey={2} href="#">
                        Blog
                      </NavItem>
                    </Nav>
                    <Nav pullRight>
                        {this.props.admin ? 
                        <IndexLinkContainer to="/login">
                          <NavItem eventKey={1}>
                            Connexion
                          </NavItem>
                        </IndexLinkContainer> : null
                        }
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}



