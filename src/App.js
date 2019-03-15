import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './components/pages/home.js';
import List from './components/pages/list.js';
import DetailContents from './components/functions/detailContents'
import {BottomNavigation} from "react-native-material-ui";
import { COLOR, ThemeProvider } from "react-native-material-ui";

var jsonData = require('./assets/data.json');

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            Current: "Home",
            Previous: "",
            Disease: "Anthrax",
        };

        this.changeDisplayHandle = this.changeDisplayHandle.bind(this);
        this.setDisease = this.setDisease.bind(this);
    }

    // page is something like "Home" or "List" or "Details"
    changeDisplayHandle(page) {
        this.setState({
            Previous: this.state.Current,
            Current: page,
        });
        alert("changeDisplayHandle called");
    }

    setDisease(diseaseName) {
        this.setState({
            Disease: diseaseName,
        });
        alert("setDisease called");
    }



    render() {
        // let showNow;
        // if (this.state.Current == "List")
        // {
        //     showNow = <List f1 = {this.changeDisplayHandle} f2 = {this.setDisease} />
        // }
        // else if (this.state.Current == "Home")
        // {
        //     showNow = <Home f1 = {this.changeDisplayHandle} f2 = {this.setDisease} />
        // }

        return (
            <View style={styles.container}>
                {this.state.Current == "Home" ?
                    <Home f1 = {this.changeDisplayHandle} f2 = {this.setDisease} /> :
                    <List f1 = {this.changeDisplayHandle} f2 = {this.setDisease} />}

                <BottomNavigation >
                    <BottomNavigation.Action
                        key="home"
                        iconSet = "SimpleLineIcons"
                        icon= {<SimpleLineIcons name = "home" size = {25} color = "red"/>}
                        label="Home"
                        onPress={() => this.state.Current == 'Home' ? null : this.setState({ Current: 'Home' })}

                    />

                    <BottomNavigation.Action
                        key="list"
                        icon={<SimpleLineIcons name = "list" size = {25} />}
                        label="List"
                        onPress={() => this.state.Current == 'List' ? null : this.setState({ Current: 'List' })}
                    />

                </BottomNavigation>
                {/*{showNow}*/}
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




    /*
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
    */



