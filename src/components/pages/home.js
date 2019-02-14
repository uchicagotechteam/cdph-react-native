import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Search_Bar from '../functions/search-bar';
/*import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

const searchBarTheme = {
    palette: {
        alternateTextColor: COLOR.black, //text color
        primaryColor: COLOR.white // background color of the search bar

    },
    toolbar: {
        container: {
            height: 50,
        },
        style: {

        }
    },
    text: {
        fontSize: 1,
    }

};*/

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text> testing </Text>
                <Search_Bar diseases ={this.props.loaded}/>
                <Text> {this.props.loaded} </Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',

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
render(){
    return (
        <View style={styles.container}>
            {this.props.loaded ? <Text style={styles.welcome}>Welcome to React Native!</Text> : null}
            <Text style={styles.instructions}>To get started, edit App.js</Text>
                <ThemeContext.Provider value ={getTheme(searchBarTheme)}>
                <SearchBar data ={this.props.loaded}/>
               </ThemeContext.Provider>

            <Search_Bar data ={this.props.loaded}/>
        </View>

    );
}
*/