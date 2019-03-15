import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TopNav from "../functions/section";
import DetailContents from '../functions/detailContents.js';


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'TopNav',
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
        <View style={{ flex: 1, backgroundColor: 'white' , justifyContent: 'flex-end'}}>
            {this.state.active == "TopNav" ?
                <TopNav switch={this.switchPage.bind(this)} /> :
                <DetailContents disease={this.state.disease} switch={this.switchPage.bind(this)} back={"TopNav"}/>}

        </View>
    );
    }
}