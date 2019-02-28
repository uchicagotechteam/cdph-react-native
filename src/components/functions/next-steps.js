import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class nextSteps extends React.Component {

    render(){
        return(
            <View style={{flex:1, justifyContent: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    Next Steps:
                </Text>
                <Text style={{fontSize: 16}}>
                    1. Gather report information. Include patients name, DOB, age,
                    sex, race/ethnicity, address, and telephone number.
                </Text>
                <Text style={{fontSize: 16}}>
                    2. Record method of diagnosis, if available.
                </Text>
                <Text style={{fontSize: 16}}>
                    3. Submit isolate or clinical materials to IDPH Lab
                    W. Taylor St., Chicago, IL, 60612, 312-793-1322).
                </Text>
            </View>
        )
    }
}