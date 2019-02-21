import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBarNav from 'top-bar-nav';

const Scene1 = ({ }) => (
    <View style={{ flex: 1}}>
<Text style={{ fontSize: 10 }}>This is screen 1</Text>
</View>
);

const Scene2 = ({ }) => (
    <View style={{ flex: 1}}>
<Text style={{ fontSize: 12 }}>This is screen 2</Text>
</View>
);

const Scene3 = ({ }) => (
    <View style={{ flex: 1}}>
<Text style={{ fontSize: 15 }}>This is screen 3</Text>
</View>
);

const ROUTES = {
    Scene1,
    Scene2,
    Scene3
    // ideally you would have a ROUTES object with multiple React component scenes
};

// There are three types of labels (image, text, and element)
const ROUTESTACK = [
    { text: 'IMMEDIATE', title: 'Scene1' }, // title is just the name of the Component being rendered.  See the renderScene property below
    { text: '24 HOURS', title: 'Scene2' },
    { text: '7 DAYS', title: 'Scene3' }
];

export default class TopNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'home',
        }
    }
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
