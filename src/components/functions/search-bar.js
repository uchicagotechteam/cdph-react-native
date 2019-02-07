import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Toolbar} from 'react-native-material-ui';

export default class SearchBar extends Toolbar{
    render() {
        return (
            <Toolbar
                centerElement="Search for diseases to report"
                searchable={{
                    autoFocus: true,
                }}
                onRightElementPress={ (label) => { console.log(label) }}
            />
        );
    }
}