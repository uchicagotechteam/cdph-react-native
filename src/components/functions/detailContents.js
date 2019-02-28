/*
USAGE: <detailContents disease = {"disease name according to JSON"}/>
                                    String

Important: 1 variable are necessary: disease

Note: this component searches through the json file and outputs corresponding values from disease names

 */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Heading from '../functions/heading.js';
import CallButton from '../functions/button.js';

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
                <Text style = {styles.steps}>1. Gather report info. Include patient’s name, DOB, age, sex, race/ethnicity, address, and telephone number. </Text>
                <Text style = {styles.steps}>2. Record method of diagnosis, if available</Text>
                <Text style = {styles.steps}>3. Submit isolate or clinical materials to IDPH Lab
                                             W. Taylor St., Chicago, IL, 60612, 312-793-1322).</Text>
                <CallButton callNumber = {"2021232132"} subtitle = {"If unavailable, call (312) 746-5377"}/>

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
        marginTop: 10.5,
        marginBottom: 10.5,
        marginLeft: 34,
        fontFamily: 'Arial',
        fontSize: 17,
        fontWeight: 'bold',

    },

    steps: {
        marginLeft: 34,
        marginBottom: 19.5,
        fontFamily: 'Arial',
        fontSize: 13,
        marginRight: 34,

    }

});