import React from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class TestButton extends React.Component {
    render(){
        return (
            <View>
                <Button onPress={this.props.setPage} title = {"click me!"}/>
            </View>
        );
    }
}

