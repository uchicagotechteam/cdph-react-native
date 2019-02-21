import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';


export default class Search extends React.Component{
    display = this.props.diseases;

    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
    }

    updateSearch = search => {
        this.setState({ search });
    }

    componentDidUpdate(){
        this.display = this.display.filter(word => word.toLowerCase() == this.state.search.toLowerCase());
    }


    render() {
        const { search } = this.state;
        return (
            <View style={styles.container}>

                <SearchBar
                    placeholder="Search for diseases to report"
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={styles.barContainer}
                    inputStyle={styles.input}
                />

                <Text> {this.display[4]} </Text>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '80%'
    },
    barContainer: {
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