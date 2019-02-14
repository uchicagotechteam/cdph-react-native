import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import {Toolbar} from 'react-native-material-ui';
import {SearchBar} from 'react-native-elements';


export default class Search_Bar extends React.Component{
    state = {
        search: '',
    };


    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <SearchBar
                placeholder="Search for diseases to report"
                onChangeText={this.updateSearch}
                value={search}
                platform= 'android'
                containerStyle={{ backgroundColor: '#FAFAFA', borderRadius: 8, borderWidth: 1, marginLeft: '11.7%', marginRight: '11.7%' }}
                inputStyle={{backgroundColor: '#FAFAFA', fontSize: 12, color: '#c4c4c4'}}
            />

        );
    }

}