/*
USAGE: <Card text = {"card text here"} urgency = {integer here}/>
                           String                    Int

Important: 2 variables are necessary: text,  urgency

Note: If text string is too long, it will continue onto the next line
Note: There is a margin above and below the text

 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Card extends React.Component{
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
            <View style = {[cardStyles.generalbox, chooseStyle(this.props.urgency)]}>
                <Text style={cardStyles.textStyle}>{this.props.text}</Text>
            </View>

        )
    }
}

function chooseStyle(urgencyNumber) { //selects which style to render based on urgency number input
    if (urgencyNumber == 1) {
        return cardStyles.cardBox1;
    }
    else if (urgencyNumber == 2) {
        return cardStyles.cardBox2;
    }
    else {
        return cardStyles.cardBox3;
    }
}

const cardStyles = StyleSheet.create({


    textStyle: {
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 19,
        marginTop: 19,
        fontSize: 13,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },

    generalbox: {
        marginTop: 13,
        marginLeft: 34,
        marginRight: 34,
        borderLeftWidth: 5,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth:1,
    },

    cardBox1: { // Most urgent
        borderLeftColor: '#FC0F1B',
    },
    cardBox2: {
        borderLeftColor: '#FDBF2E',
    },
    cardBox3: {
        borderLeftColor: '#1EB1ED',

    },
})
