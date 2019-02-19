import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBarNav from 'top-bar-nav';

var jsonData = require('../../assets/data.json');
var stringData=JSON.stringify(jsonData.diseases);

var allItems = [];
var items = [jsonData.diseases.length];

for(var i=0; i<jsonData.diseases.length; i++){
    allItems.push[i]=jsonData.diseases[i];
}
var string=JSON.stringify(allItems);
/*allItems = Object.keys(jsonData.diseases);
let includeAltNames = [];
for (var i=0; i<allItems.length; i++){
    let disease = [];
    for (var j=0; j<jsonData.diseases[allItems[i]]["alt_names"].length; j++){
        disease.push(jsonData.diseases[allItems[i]]["alt_names"][j]);
    }
    includeAltNames.push(disease);
}
items = allItems.sort();*/

const Scene = ({ }) => (
    <View style={{ flex: 1}}>
<Text style={{ fontSize: 10 }}>{string}</Text>
</View>
);

const ROUTES = {
    Scene
    // ideally you would have a ROUTES object with multiple React component scenes
};

// There are three types of labels (image, text, and element)
const ROUTESTACK = [
    { text: 'IMMEDIATE', title: 'Scene' }, // title is just the name of the Component being rendered.  See the renderScene property below
    { text: '24 HOURS', title: 'Scene' },
    { text: '7 DAYS', title: 'Scene' }
];

export default class TopNav extends React.Component {
    render() {
        return (
    <TopBarNav
        // routeStack and renderScene are required props
        routeStack={ROUTESTACK}
        renderScene={(route) => {
            // This is a lot like the now deprecated Navigator component
            let Component = ROUTES[route.title];
            return <Component />;
        }}
        // Below are optional props
        headerStyle={[styles.headerStyle, { paddingTop: 100 }]} // probably want to add paddingTop if using TopBarNav for the  entire height of screen to account for notches/status bars
        textStyle={styles.textStyle}
        underlineStyle={styles.underlineStyle}
        sidePadding={10} // Can't set sidePadding in headerStyle because it's needed to calculate the width of the tabs
        inactiveOpacity={0.5}
        fadeLabels={true}
        />

    );
    }
    }

const styles = StyleSheet.create({
    headerStyle: {
        borderBottomWidth: 1,
        borderColor: '#13B5EA',
        backgroundColor: '#13B5EA',
        justifyContent: 'space-evenly'
    },
    labelStyle: {
        fontSize: 24,
        fontWeight: '100',
        color: '#fff'
    },
    imageStyle: {
        height: 20,
        width: 20,
        tintColor: '#e6faff'
    },
    underlineStyle: {
        height: 3.6,
        backgroundColor: '#e6f400',
        width: 120
    },
    textStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color:'#ffffff'
    }
});
