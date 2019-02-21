import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import BottomNav from '../functions/bottom-nav.js';
import TopNav from '../functions/section.js';


export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Image source={require('../../assets/NEWmedreportbackground.png')}/>
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
});

