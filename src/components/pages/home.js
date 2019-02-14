import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Search from '../functions/search-bar';

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
    includeAltNames: any[];

    constructor(props){
        super(props);

        var allItems = Object.keys(this.props.data["diseases"]);
        this.includeAltNames = [];
        for (var i=0; i<this.allItems.length; i++){
            var disease = [];
            for (var j=0; j<this.props.data[this.allItems[i]]["alt_names"].length; j++){
                disease.push(this.props.data[this.allItems[i]]["alt_names"][j]);
            }
        }
        this.items = this.allItems.sort();
        //puts public health hazard on top
        this.items.splice(this.items.indexOf("Any Public Health Hazard"), 1);
        this.items.unshift("Any Public Health Hazard");
    }

    render(){
        return (
            <View style={styles.container}>

                <Text> testing </Text>
                <Search diseases={this.props.loaded}/>
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

            <SearchBar data ={this.props.loaded}/>
        </View>

    );
}
*/