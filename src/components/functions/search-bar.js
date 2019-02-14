import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import {Toolbar} from 'react-native-material-ui';
import {SearchBar} from 'react-native-elements';


export default class Search_Bar extends React.Component{
    state = {
        search: '',
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
        };
        this.arrayholder = this.props.diseases;
    }

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
        console.log(this.state.data);
    };


    updateSearch = search => {
        this.setState({ search });
    };


    render() {
        const { search } = this.state;
        return (
            <SearchBar
                placeholder="Search for diseases to report"
                onChangeText={text => this.searchFilterFunction(text)}
                onChangeText={this.updateSearch}
                value={search}
                platform= 'android'
                containerStyle={{ backgroundColor: '#FAFAFA', borderRadius: 8, borderWidth: 1, marginLeft: '11.7%', marginRight: '11.7%' }}
                inputStyle={{backgroundColor: '#FAFAFA', fontSize: 12, color: '#c4c4c4'}}
            />

        );
    }

}