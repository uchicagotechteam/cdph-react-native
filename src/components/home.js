import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Contents from './my-navbar.js';

var jsonData = require('../assets/data.json');

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: jsonData.data
        }
    }

    render(){
        return (
            <Contents loaded={this.state.isLoading}/>
        );
    }
}

