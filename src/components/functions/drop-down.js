import React from 'react';
import {Platform, StyleSheet, ScrollView, Text, View} from 'react-native';
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
            <TouchableOpacity
                style={styles.touchable}
                onPress={this.dropToggle}>

                <View style={styles.container}>
                    <Text style={styles.buttonTitle}>
                        {this.props.heading}
                    </Text>
                    <View style={styles.arrowButton}>
                        {this.state.open ? (
                            <Icon name="up" color="#FFFFFF" size = {20} />
                        ) : (
                            <Icon name="down" color="#FFFFFF" size = {20} />
                        )}
                    </View>
                </View>
                {this.state.open ? (
                    <Text style={styles.buttonInfo}>
                        {this.props.info}
                    </Text>
                ) : (
                    <Text> </Text>
                )}

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    touchable: {
        color: '#ffffff',
        backgroundColor: '#002f86',
        marginTop: 10,
        //padding: 5,
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
  })
  