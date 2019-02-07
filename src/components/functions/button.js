import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-material-ui';


export default class CallButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (

            <Button primary text="&#128222; Call to notify" />

        );
    }
}


