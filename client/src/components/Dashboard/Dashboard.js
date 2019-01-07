import React from 'react';
import { Button } from "react-bootstrap";
import { Navigation } from '../Navigation/Navigation.js';
import API from '../../utils/API';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
        this.connected = true;
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    render() {
        console.log(this.connected);
        return(
            <div className="Dashboard">
                <Navigation admin={true} connected={this.connected} disconnectAction={this.disconnect}/>
                <h1>Dashboard</h1>
                <Button
                onClick={this.disconnect}
                block
                bsSize="small"
                type="submit"
                >
                Se déconnecter
                </Button>
            </div>
        )
    }
}