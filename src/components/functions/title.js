/*
 USAGE: <Title heading = {"Heading text here"} />
 String

 Important: 1 variable is necessary: heading

 Note: If heading string is too long, it will continue onto the next line
 Note: There is an upper margin of 33 (keep this in mind when fixing this component

 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingStyle}>{this.props.heading}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  headingStyle: {
    marginTop: 33,
    marginRight: 34,
    fontSize: 18,
    fontFamily: 'Arial',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  container: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});
