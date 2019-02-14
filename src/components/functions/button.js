import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Linking} from 'react-native'
import {Icon} from 'react-native-vector-icons/FontAwesome';


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

    render(){
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
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
        flex: 1,
        justifyContent: 'center',
        width: '80%'
    },
    button: {
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#9ee096',
        padding: 10,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
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
        color: 'grey'
    }
});
