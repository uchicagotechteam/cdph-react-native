import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Heading extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            headingText: this.props.heading,
            subheadingText: this.props.subheading,
        };
    }
    render() {
        return(
            <View style = {textStyles.textBox}>
                <Text style = {textStyles.headingStyle}>{this.state.headingText}</Text>
                <Text style = {textStyles.subheadingStyle}>{this.state.subheadingText}</Text>
            </View>
        )
    }
}

const textStyles = StyleSheet.create({
    headingStyle: {
        marginTop: 33,
        marginLeft: 34,
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

    textBox: {
        //borderBottomColor: '#FDBF2E',
        borderBottomColor: '#ffbe2e', // this looks slightly closer to the image, but maybe something's wrong with my eyes
        borderBottomWidth: 11,
    }
})
