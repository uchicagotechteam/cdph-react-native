/*
USAGE: <Heading heading = {"Heading text here"} subheading = {"subtext here"} urgency = {integer here}/>
                            String                             String                     Int

Important: 3 variables are necessary: heading, subheading, urgency

Note: If heading string is too long, it will continue onto the next line
Note: There is an upper margin of 33 (keep this in mind when fixing this component

 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Heading extends React.Component{
    /*constructor(props) {
        super(props)
        this.state = {
            headingText: this.props.heading,
            subheadingText: this.props.subheading,
        };
    }
    */

    render() {
        return(
            <View style = {chooseStyle(this.props.urgency)}>
                <Text style = {textStyles.headingStyle}>{this.props.heading}</Text>
                <Text style = {textStyles.subheadingStyle}>{this.props.subheading}</Text>
            </View>
        )
    }
}

function chooseStyle(urgencyNumber) { //selects which style to render based on urgency number input
    if (urgencyNumber == 1) {
        return textStyles.textBox1;
    }
    else if (urgencyNumber == 2) {
        return textStyles.textBox2;
    }
    else {
        return textStyles.textBox3;
    }
}

const textStyles = StyleSheet.create({
    headingStyle: {
        marginTop: 33,
        marginLeft: 34,
        marginRight: 34,
        fontSize: 38,
        fontFamily: 'Arial',
        textAlign: 'left',
        fontWeight: 'bold',
    },

    subheadingStyle: {
        marginLeft: 34,
        fontSize: 18,
        fontFamily: 'Arial',
        fontStyle: 'italic',
        color: '#9B9B9B',
        marginBottom: 34,
    },

    textBox1: { // Most urgent

        borderBottomColor: '#FC0F1B',
        borderBottomWidth: 11,
    },
    textBox2: {
        borderBottomColor: '#FDBF2E',
        borderBottomWidth: 11,
    },
    textBox3: {
        borderBottomColor: '#1EB1ED',
        borderBottomWidth: 11,
    },
})
