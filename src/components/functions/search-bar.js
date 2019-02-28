import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Card from './card';
import DropButton from './drop-down';


var jsonData = require('../../assets/data.json');


export default class Search extends React.Component{
    searching = false;

    constructor(props){
        super(props);
        this.state = {
            search: '',
            cards: null
        };
    }


    updateSearch = search => {
        this.setState({ search });

        if (search.length > 0){
            if (this.searching == false && search != ""){
                this.searching = true;
            }

            // filter out diseases without the search characters, changing both names to lowercase
            var bank = Object.keys(jsonData["diseases"]).filter((disease) =>
                disease.toLowerCase().slice(0, search.length) == search.toLowerCase());

            this.setState({
                cards: bank.map((disease) =>
                    <Card key={disease.replace(/\s/g, '')}
                          text={disease}
                          urgency={jsonData["diseases"][disease]["urgency"]}/>)
            })
        } else {
            this.setState({
                cards: null
            })
            this.searching = false;

        }
    }


    render() {
        var faq = [
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

        var dropDowns = faq.map((q, index) =>
            <DropButton key={index}
                        heading={q["heading"]}
                        info={q["info"]}
                        open={false}
                        style={styles.dropdown}/>)

        const { search } = this.state;
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Search for disease"
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={styles.barContainer}
                    inputStyle={styles.input}
                    lightTheme={true}
                    inputContainerStyle={styles.searchContainer}
                />

                {this.searching ? this.state.cards : dropDowns }
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: 300,
        marginLeft: '11.7%',
        marginRight: '11.7%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        padding: 2
    },
    input: {
        color: 'black',
        fontSize: 13
    },
    searchContainer: {
        backgroundColor: 'white'
    },
    dropdown: {
        width: 300
    }
});