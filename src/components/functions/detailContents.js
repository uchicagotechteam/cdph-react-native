/*
USAGE: <detailContents disease = {"disease name according to JSON"}/>
                                    String

Important: 1 variable are necessary: disease

Note: this component searches through the json file and outputs corresponding values from disease names

 */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Heading from '../functions/heading.js';

var jsonData = require('../../assets/data.json');

var msg = "Report within ";

export default class DetailContents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.disease,
            data: jsonData.diseases[this.props.disease],
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Heading heading = {this.state.name} subheading = {msg.concat(this.state.data.urgency)} urgency = {checkUrgency(this.state.data.urgency)}/>
                <Text style = {styles.next}>Next steps: </Text>
            </View>

        );
    }

}

function checkUrgency(input) {
    if (input == "3 hours")
    {
        return 1;
    }
    else if (input == "24 hours")
    {
        return 2;
    }
    else
    {
        return 3;
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    next: {
        fontFamily: 'Arial',

    }

});