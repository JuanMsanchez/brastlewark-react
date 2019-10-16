import React, { Component } from 'react';
import Tavern from './Tavern';

export default class Brastelwark extends Component {
    render() {
        return (
            <div>
                <br/><br/>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Bratlewark!</h1>
                </div>                
                <Tavern/>
            </div>
        );
    }
}
