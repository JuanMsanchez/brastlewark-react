import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Brastelwark from './../BrastlewarkComponents/Brastelwark';
import { hot } from 'react-hot-loader'

class App extends Component {
    render() {
        return (
            <div>
                <Route component={Brastelwark}/>
            </div>
        )
    }
}
export default hot(module)(App);
