import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Linking} from 'react-native'
import {Icon} from 'react-native-vector-icons/FontAwesome';

//takes in two props, call number and subtitle
export default class CallButton extends React.Component {
    constructor(props){
        super(props);
    }

    callNumber(phone){
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else  {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    }
    chooseStyle(urgency) { //selects which style to render based on urgency number input
        if (urgency == "3 hours") {
            return styles.button1;
        }
        else if (urgency == "24 hours") {
            return styles.button2;
        }
        else {
            return styles.button3;
        }
    }

    render(){
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    style={this.chooseStyle(this.props.urgency)}
                    onPress={this.callNumber(this.props.callNumber)}
                >
                    {/*<Icon*/}
                    {/*name='phone'*/}
                    {/*color='white'*/}
                    {/*/>*/}
                    <Text style={styles.text}>
                        Call to notify
                    </Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>
                    {this.props.subtitle}
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    button1: {
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#FC0F1B',
        padding: 10,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 34,
        marginRight: 34,
        marginTop: 12,

    },
    button2: {
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#FDBF2E',
        padding: 10,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 34,
        marginRight: 34,
        marginTop: 12,
    },
    button3: {
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#1EB1ED',
        padding: 10,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 34,
        marginRight: 34,
        marginTop: 12,
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    subtitle: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'grey',
        marginBottom: 5.5,
    }
});