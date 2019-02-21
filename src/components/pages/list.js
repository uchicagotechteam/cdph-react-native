import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TopNav from "../functions/section";

export default class List extends React.Component {

    render(){
        return (
        <View style={{ flex: 1, backgroundColor: 'white' , justifyContent: 'flex-end'}}>
    <TopNav />
        </View>
    );
    }
}