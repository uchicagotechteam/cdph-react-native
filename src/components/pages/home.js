import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import BottomNav from '../functions/bottom-nav.js';
import TopNav from '../functions/section.js';

import DropButton from '../functions/drop-down';


export default class Home extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        faq = [
            {
                heading: "About MedReport",
                info: "This is an app to help healthcare providers determine which diseases they are mandated to report and how to report them!",
                open: false
            },
            {
                heading: "How does HIPAA apply?",
                info: "placeholder text wow the quick brown fox and stuff haha crazy",
                open: false
            },
            {
                heading: "Any questions?",
                info: "placeholder text wow the quick brown fox and stuff haha crazy",
                open: false
            }
        ];
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/NEWmedreportbackground.png')}/>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <DropButton heading={faq[0]["heading"]} info={faq[0]["info"]} open={false}/>
                <DropButton heading={faq[1]["heading"]} info={faq[1]["info"]} open={false}/>
                <DropButton heading={faq[2]["heading"]} info={faq[2]["info"]} open={false}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

