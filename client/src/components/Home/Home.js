import React from 'react';
import { Button } from "react-bootstrap";
import { Navigation } from '../Navigation/Navigation.js';
import API from '../../utils/API';

const queryString = require('query-string');

export class Home extends React.Component {
    constructor(props){
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        
        this.state = {
            admin : queryString.stringify(parsed) ? true : false,
        }
    }
    render() {

        return(
            
            <div className="Home">
                <Navigation admin={this.state.admin}/>
                <h1>Welcome to my portfolio</h1>
            </div>
        )
    }
}