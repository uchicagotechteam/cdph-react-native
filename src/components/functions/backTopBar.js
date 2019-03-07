/*
Usage:

<BackTopBar urgency = {1}/>

*/

import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default class BackTopBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goBack: false,
        };
    }

    /* take in a color
    create a function, onclick: state change goback = true
                                function that kills itself, stops displaying itself


    function handler - this.props.handler, changes parent state, decide to show detail contents or home screen
    */
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.backButton}>
                    <Icon name="left" color="#FFFFFF" size = {24} />
                </View>

                <Text style = {styles.title}>DISEASE INFO</Text>

            </View>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 73,
        alignItems: 'center',
        backgroundColor: '#1EB1ED'
    },
    backButton: {
        marginLeft: 12,
        marginTop: 38,
    },
    title: {
        marginLeft: 100,
        color: '#FFFFFF',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginTop: 38,
        fontSize: 13,
    }
});