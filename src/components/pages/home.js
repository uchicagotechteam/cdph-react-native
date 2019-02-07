import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DropButton from '../functions/drop-down';


export default class Home extends React.Component {
    constructor(props){
        super(props);
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
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <DropButton data={this.faq}/>
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
});

