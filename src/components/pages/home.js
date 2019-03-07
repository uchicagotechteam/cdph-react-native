import React from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

import Main from './main';
import DetailContents from '../functions/detailContents.js';
import TestButton from '../functions/testProp.js';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <View style={styles.container}>
                <TestButton onPress={this.props.f1("List")}/>
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
    image: {
        top: 0,
        width: '100%',
        position: 'absolute'
    },
    search: {
        alignSelf: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
});

