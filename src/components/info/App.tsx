/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>

      </View>
    );
  }
}


/**
 /**
 infopage


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class infopage extends Component<Props> {
    render() {
        return (
            <View style={info_styles.container}>
                <Text style={info_styles.header}>Health Insurance Portability and Accountability Act</Text>
                <Text style={info_styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const info_styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'left',
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
    header: {
        textAlign: 'left',
        fontSize: 40,


    }
});



*/