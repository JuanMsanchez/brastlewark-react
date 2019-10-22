import React, { Component } from 'react';
import Tavern from './Tavern';

export default class Brastelwark extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron bratelwark-sign">
                    <h1 className="display-6">Welcome to Bratlewark!</h1>
                </div>                
                <Tavern/>
            </div>
        );
    }
}
