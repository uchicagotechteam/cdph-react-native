import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Home from './components/pages/home.js';
import List from './components/pages/list.js';
import {BottomNavigation} from "react-native-material-ui";

var jsonData = require('./assets/data.json');

export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            display: 'home'
        }
    }

    render() {
        const display = this.state.display;
        let show;
        if (display == 'home') {
            show = <Home/>
        }
        else if (display == 'list'){
            show = <List/>
        }
        return (
            <View style = {styles.container}>
                {show}
                <BottomNavigation style = {styles.bottom}>
                    <BottomNavigation.Action
                        key="home"
                        icon="home"
                        label="Home"
                        onPress={() => this.setState({ display: 'home' })}
                    />

                    <BottomNavigation.Action
                        key="list"
                        icon="list"
                        label="List"
                        onPress={() => this.setState({ display: 'list' })}
                    />

                </BottomNavigation>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
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
