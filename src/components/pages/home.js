import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Main from './main';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/NEWmedreportbackground.png')} style={styles.image}/>
                <Main style={styles.search}/>
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

