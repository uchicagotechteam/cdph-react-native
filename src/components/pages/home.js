import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CallButton from '../functions/button.js';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                {this.props.loaded ? <Text style={styles.welcome}>Welcome to React Native!</Text> : null}
                <CallButton
                    data={this.props.loaded}
                    callNumber={12123003021}
                    subtitle="if unavailable, call (212) 746-5377"/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

