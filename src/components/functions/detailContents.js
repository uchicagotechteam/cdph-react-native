/*
USAGE: <detailContents disease = {"disease name according to JSON"}/>
                                    String

Important: 1 variable are necessary: disease
do yarn add intersperse

Note: this component searches through the json file and outputs corresponding values from disease names

 */

import React from 'react';
import {
  Platform, StyleSheet, Text, View, ScrollView,
} from 'react-native';
import Heading from './heading.js';
import CallButton from './button.js';
import BackTopBar from './backTopBar.js';

const intersperse = require('intersperse');
const jsonData = require('../../assets/data.json');

const msg = 'Report within ';


export default class DetailContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.disease,
      data: jsonData.diseases[this.props.disease],
    };
  }


  render() {
    const lineAndSubtitle = (
      <View style={styles.line}>
        <Text style={styles.AltName}>Alternate Names:</Text>
        <Text style={styles.alternatenamelist}>{intersperse(this.state.data.alt_names, ', ')}</Text>

      </View>
    );
    return (
      <ScrollView style={styles.container}>
        {<BackTopBar
          urgency={checkUrgency(this.state.data.urgency)}
          switch={this.props.switch}
          back={this.props.back}
        /> }
        <Heading heading={this.state.name} subheading={msg.concat(this.state.data.urgency)} urgency={checkUrgency(this.state.data.urgency)} />
        <Text style={styles.next}>Next Steps: </Text>
        <Text style={styles.step1_2}>1. Gather report info. Include patient’s name, DOB, age, sex, race/ethnicity, address, and telephone number. </Text>
        <Text style={styles.step1_2}>2. Record method of diagnosis, if available</Text>
        <Text style={styles.step3}>
3. Submit isolate or clinical materials to IDPH Lab
                                             W. Taylor St., Chicago, IL, 60612, 312-793-1322.
        </Text>
        <CallButton callNumber={getNumber(this.state.name)} subtitle="If unavailable, call (312) 746-5377" urgency="3 hours" />
        {lineAndSubtitle}
        <Text style={styles.info}>Information:</Text>
        <Text style={styles.step3}>Does HIPAA allow this?</Text>
        <Text style={styles.step3}>
                    The Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule is the first federal protection for the privacy of Protected Health Information (PHI). PHI, such as the patient’s medical issues, physical and mental conditions, and medications they take, is considered confidential. Normally, you cannot relay any PHI to anyone without consent. However, because of Section 164.512 under HIPAA, confidentiality must be broken for mandatory reporting.
        </Text>


      </ScrollView>


    );
  }
}

function getNumber(diseaseName) {
  const numberType = jsonData.diseases[diseaseName].phone_number;
  return parseInt(jsonData.phone_numbers[numberType].number[0], 10);
}

function checkUrgency(input) {
  if (input == '3 hours') {
    return 1;
  }
  if (input == '24 hours') {
    return 2;
  }

  return 3;
}
function parseAlternate(names) {
  const n = numbers.reduce((a, b) => a.concat(0, b));
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  next: {
    marginTop: 10.5,
    marginBottom: 10.5,
    marginLeft: 34,
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: 'bold',

  },

  step1_2: {
    marginLeft: 34,
    marginBottom: 19.5,
    fontFamily: 'Arial',
    fontSize: 13,
    marginRight: 34,
  },
  step3: {
    marginLeft: 34,
    fontFamily: 'Arial',
    fontSize: 13,
    marginRight: 34,
  },


  AltName: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 11,
    marginBottom: 9,


  },

  info: {
    marginLeft: 34,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
    marginBottom: 10.5,
  },

  alternatenamelist: {
    fontSize: 13,
    marginBottom: 11.5,


  },

  line: {
    marginTop: 5.5,
    marginLeft: 34,
    marginRight: 34,
    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    flex: 1,

  },


});
