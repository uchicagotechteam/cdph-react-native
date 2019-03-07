import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

/* Props looks like this:
 * {header: string, info: string, open: boolean}
 */

export default class DropButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: this.props.open };
    }

    //Toggle open
    dropToggle = () => {
        this.setState({
            open: !this.state.open
          })
    }

    render() {
        return (
            <ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.dropToggle}>
                        <Text style={styles.buttonTitle}> {this.props.heading} </Text>
                        <View style="{styles.arrowButton">
                            {this.state.open ? (
                                <Icon name="down" color="#FFFFFF" size = {24} />
                            ) : (
                                <Icon name="up" color="#FFFFFF" size = {24} />
                            )}
                        </View>
                        <Text style={styles.buttonInfo}> {this.state.open ? this.props.info : ""} </Text>
                </TouchableOpacity>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    button: {
        color: '#ffffff',
        backgroundColor: '#002f86',
        marginTop: 10,
        padding: 5,
        width: 300
    },
    buttonInfo: {
        color: '#ffffff',
        padding: 5,
        width: '85%'
    },
    buttonTitle: {
        color: '#ffffff',
        padding: 5,
        width: '85%',
        fontWeight: 'bold'
    },
  })
  