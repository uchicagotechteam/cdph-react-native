import React from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

import Main from './main';
import DetailContents from '../functions/detailContents.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'main',
            disease: ''
        }
    }


    switchPage(update, disease){
        this.setState({
            active: update,
            disease: disease
        });
    }



    render(){
        return (
            <View style={styles.container}>
                {this.state.active == 'main' ?
                    <View style={styles.container}>
                        <Image source={require('../../assets/NEWmedreportbackground.png')} style={styles.image}/>
                        <Main switch={this.switchPage.bind(this)}/>
                    </View> :
                    <DetailContents disease={this.state.disease} switch={this.switchPage.bind(this)} back={"main"}/>}
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
    image: {
        top: 0,
        width: '100%',
        position: 'absolute'
    },
    search: {
        alignSelf: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
});

