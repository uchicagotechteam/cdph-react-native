import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './components/pages/home.js';
import List from './components/pages/list.js';
import {BottomNavigation} from "react-native-material-ui";
import { COLOR, ThemeProvider } from "react-native-material-ui";

var jsonData = require('./assets/data.json');

export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            active: 'home',
        }
    }

    render() {
        const display = this.state.display;
        let show;
        if (this.state.active == 'home') {
            show = <Home/>
        }
        else if (this.state.active == 'list'){
            show = <List/>
        }
        return (
            <View style = {styles.container}>
                {show}

                <BottomNavigation >
                    <BottomNavigation.Action
                        key="home"
                        iconSet = "SimpleLineIcons"
                        icon= {<SimpleLineIcons name = "home" size = {25} color = "red"/>}
                        label="Home"
                        onPress={() => this.setState({ active: 'home' })}

                    />

                    <BottomNavigation.Action
                        key="list"
                        icon={<SimpleLineIcons name = "list" size = {25} />}
                        label="List"
                        onPress={() => this.setState({ active: 'list' })}
                    />

                </BottomNavigation>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        fontFamily: 'Gotham'
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
