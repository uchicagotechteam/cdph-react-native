import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';


export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
    }

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
                containerStyle={styles.container}
                inputStyle={styles.input}
            />

        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        borderWidth: 1,
        width: 300,
        marginLeft: '11.7%',
        marginRight: '11.7%'
    },
    input: {
        fontSize: 12,
        color: '#c4c4c4'
    }
});