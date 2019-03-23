/*
USAGE: <Card text = {"card text here"} urgency = {integer here}/>
                           String                    Int

Important: 2 variables are necessary: text,  urgency

Note: If text string is too long, it will continue onto the next line
Note: There is a margin above the component, but not below. 

 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Card extends React.Component{

    chooseStyle(urgency) { //selects which style to render based on urgency number input
        if (urgency == "3 hours") {
            return cardStyles.cardBox1;
        }
        else if (urgency == "24 hours") {
            return cardStyles.cardBox2;
        }
        else {
            return cardStyles.cardBox3;
        }
    }

    switchPage(disease){
        if (disease){
            this.props.switch("details", disease);
        }
    }


    render() {
        return(
            <View style = {[cardStyles.generalbox, this.chooseStyle(this.props.urgency)]} >
                <Text style={cardStyles.textStyle} onPress={() => this.switchPage(this.props.text)}>
                    {this.props.text}
                </Text>
            </View>

        )
    }
}



const cardStyles = StyleSheet.create({
    textStyle: {
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 19,
        paddingTop: 19,
        fontSize: 13,
    },

    generalbox: {
        width: '82%',
        marginTop: 13,
        marginLeft: 34,
        marginRight: 34,
        borderLeftWidth: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1
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
