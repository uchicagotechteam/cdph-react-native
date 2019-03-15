import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Card from '../functions/card';
import DropButton from '../functions/drop-down';
import Title from '../functions/title';

var jsonData = require('../../assets/data.json');


export default class Main extends React.Component{
    searching = false;
    pages = ["faq", "searching", "details"];  // Three potential displays for this page

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
                          urgency={jsonData["diseases"][disease]["urgency"]}
                          switch={this.props.switch}/>)
            })
        } else {
            this.setState({
                cards: null
            })
            this.searching = false;

        }
    }


    handleSearchCancel = () => {
        this.updateSearch("");
    }

    handleSearchClear = () => {
        this.updateSearch("");
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
                info: "The Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule is the first federal protection for the privacy of Protected Health Information (PHI). PHI, such as the patient’s medical issues, physical and mental conditions, and medications they take, is considered confidential. Normally, you cannot relay any PHI to anyone without consent. However, because of Section 164.512 under HIPAA, confidentiality must be broken for mandatory reporting.\n"
                + "Mandatory reporting applies to many infectious diseases. You are responsible for fully documenting an objective report of your findings when you deem it necessary. Make sure to act in good faith, report only what you know to be factual, and avoid any speculation as to what you believe may have occurred or reporting how you feel. \n"
                + "\n\n HIPAA privacy rules, specifically 45 CFR §164.512, addresses the uses and disclosures of PHI for which an authorization or an opportunity to agree or object is not required. Specifically: \n"
                + "Section 164.512(a) permits disclosures that are required by law, including statutes and rules\n"
                + "Section 164.512(b) permits a covered entity to disclose PHI to: \n"
                + '"A public health authority that is authorized by law to collect or receive such information for the purpose of preventing or controlling disease, injury, or disability, including but not limited to, the reporting of disease, injury, vital events such as birth or death, and the conduct of public health surveillance, public health investigations, and public health interventions; ..."'
                + 'Under HIPAA, 45 CFR 164.501, public health authority is defined as "an agency or authority of ..., a State,  ..., or a political subdivision of a State ..., that is responsible for public health matters as part of its official mandate."',
                open: false
            },
            {
                heading: "Any questions?",
                info: "(312) 747-2374\n333 S. State Street\nRoom 200\nChicago, IL 60604\n",
                open: false
            }
        ];

        var dropDowns = faq.map((q, index) =>
            <DropButton key={index}
                        heading={q["heading"]}
                        info={q["info"]}
                        open={false}
                        style = {dropDownStyles}
                        iconcolor = {"#FFFFFF"}
                        iconsize = {20}
                        />)

    
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Search for disease"
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    containerStyle={styles.barContainer}
                    inputStyle={styles.input}
                    lightTheme={true}
                    autoCorrect={false}
                    inputContainerStyle={styles.searchContainer}
                    onCancel={this.handleSearchCancel}
                    onClear={this.handleSearchClear}
                />

                {this.searching ?
                    <ScrollView showsVerticalScrollIndicator={true} style={styles.cards}>
                        {this.state.cards}
                    </ScrollView> :
                    <ScrollView style={styles.dropDown}>
                        <Title heading={"Additional Information"} />
                        {dropDowns}
                    </ScrollView>
                    }
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    barContainer: {
        top: '30%',
        backgroundColor: 'white',
        borderRadius: 12,
        width: 300,
        top: 225,
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
    dropDown: {
        top: '35%',
        marginLeft: '11.7%',
        marginRight: '11.7%',
    },
    cards: {
        //here's how to change where the cards are displayed
        flexGrow: 1,
        top: 240,
        marginBottom: 255
    }
});


const dropDownStyles = StyleSheet.create({ // styles specific to only the drop downs
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    touchable: {
        color: '#ffffff',
        backgroundColor: '#002f86',
        marginTop: 10,
        width: 300,
        paddingLeft: 10,
    },
    buttonInfo: {
        color: '#ffffff',
        width: '85%',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 15
    },
    buttonTitle: {
        paddingTop: 5,
        color: '#ffffff',
        paddingLeft: 10,
        width: '85%',
        fontWeight: 'bold',
        fontSize: 15,
    },
    arrowButton: {
        paddingRight: 15
    }
});