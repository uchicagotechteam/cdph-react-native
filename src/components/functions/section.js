import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TopBarNav from 'top-bar-nav';
import Card from './card.js';


var jsonData = require('../../assets/data.json');

export default class TopNav extends React.Component {
    render() {
        //creating the arrays of diseases by urgency
        var keys=Object.keys(jsonData.diseases);
        var immediate=[];
        var medium=[];
        var low=[];
        for(var i=0; i<keys.length; i++)
        {
            if(jsonData.diseases[keys[i]]["urgency"]=="3 hours")
            {
                immediate.push(keys[i]);
            }
        }
        for(var i=0; i<keys.length; i++)
        {
            if(jsonData.diseases[keys[i]]["urgency"]=="24 hours")
            {
                medium.push(keys[i]);
            }
        }
        for(var i=0; i<keys.length; i++)
        {
            if(jsonData.diseases[keys[i]]["urgency"]=="7 days")
            {
                low.push(keys[i]);
            }
        }

        //sorting the arrays by alphabet
        immediate.shift()
        immediate.shift()
        immediate=immediate.sort()
        immediate.unshift(keys[0], keys[1])
        medium=medium.sort()
        low=low.sort()

        //creating lists of cards to populate the scenes
        var list1 = immediate.map((disease) =>
            <Card key={disease.replace(/\s/g, '')}
        text={disease}
        urgency="3 hours"
                  switch={this.props.switch}/>)

        var list2 = medium.map((disease) =>
            <Card key={disease.replace(/\s/g, '')}
        text={disease}
        urgency="24 hours"
                  switch={this.props.switch}/>)

        var list3 = low.map((disease) =>
            <Card key={disease.replace(/\s/g, '')}
        text={disease}
        urgency="7 days"
                  switch={this.props.switch}/>)


        //creating the scenes to display on the screen
        const Scene1 = ({ }) => (
            <ScrollView style={{ flex: 1}}>
        {list1}
    </ScrollView>
    );

        const Scene2 = ({ }) => (
            <ScrollView style={{ flex: 1}}>
        {list2}
    </ScrollView>
    );

        const Scene3 = ({ }) => (
            <ScrollView style={{ flex: 1}}>
        {list3}
    </ScrollView>
    );

        //provides routes for the individual scenes
        const ROUTES = {
            Scene1,
            Scene2,
            Scene3
        };

        // Creates a routestack of each tab and it's corresponding scene
        const ROUTESTACK = [
            { text: 'IMMEDIATE', title: 'Scene1' },
            { text: '24 HOURS', title: 'Scene2' },
            { text: '7 DAYS', title: 'Scene3' }
        ];
            return (
                <TopBarNav
                    // routeStack and renderScene are required props
                    routeStack={ROUTESTACK}
                    renderScene={(route) =>
                {
                //deciding which scene to display
                let Scene = ROUTES[route.title];
                return <Scene />;
                }}
                    //these are all the styles
                    headerStyle={[styles.headerStyle, { paddingTop: 100 }]}
                    textStyle={styles.textStyle}
                    underlineStyle={styles.underlineStyle}
                    sidePadding={10}
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
