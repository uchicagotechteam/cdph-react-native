import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Search from '../functions/search-bar';

var jsonData = require('../../assets/data.json');

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
    items: string[];
    allItems: string[];
    // includeAltNames: any[];

    constructor(props){
        super(props);
        this.init();
    }

    init(){
        var diseases = jsonData["diseases"];
        this.allItems = Object.keys(diseases);  // Contains the names of all the diseases

        // this.includeAltNames = this.allItems; // Contains the names and alternative names of all diseases (for search)
        // for (var i=0; i<this.allItems.length; i++){
        //     if (diseases[this.allItems[i]]["alt_names"]){
        //         for (var j=0; j<diseases[this.allItems[i]]["alt_names"].length; j++){
        //             this.includeAltNames.push(diseases[this.allItems[i]]["alt_names"][j]);
        //         }
        //     }
        //
        //
        // }
        this.items = this.allItems.sort();
        //puts public health hazard on top
        this.items.splice(this.items.indexOf("Any Public Health Hazard"), 1);
        this.items.unshift("Any Public Health Hazard");
    }


    render(){
        return (
            <View style={styles.container}>

                <Text> {this.allItems[0]} </Text>
                <Search diseases={this.items}/>
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
        backgroundColor: 'white',

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

            <SearchBar data ={this.props.loaded}/>
        </View>

    );
}
*/