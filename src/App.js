import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './components/pages/home.js';

var jsonData = require('./assets/data.json');

export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render() {
        return (
            <Home loaded={jsonData.data} />
        );
    }

}