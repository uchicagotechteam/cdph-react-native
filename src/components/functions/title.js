/*
 USAGE: <Title heading = {"Heading text here"} />
 String

 Important: 1 variable is necessary: heading

 Note: If heading string is too long, it will continue onto the next line
 Note: There is an upper margin of 33 (keep this in mind when fixing this component

 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Title extends React.Component{

    render() {
        return(
            <View>
                <Text style={textStyles.headingStyle}>{this.props.heading}</Text>
            </View>
        )
    }
}


const textStyles = StyleSheet.create({
    headingStyle: {
        marginTop: 33,
        marginLeft: 34,
        marginRight: 34,
        fontSize: 18,
        fontFamily: 'Arial',
        textAlign: 'left',
        fontWeight: 'bold',
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
