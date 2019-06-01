import React from 'react';
import { Platform,
	 StyleSheet,
	 ScrollView,
	 Text,
	 View,
	 TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

/* Props looks like this:
 * {header: string, info: string, open: boolean, iconcolor: string, iconsize: int}
 */

export default class DropButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.open };
  }

    // Toggle open
    dropToggle = () => {
      this.setState({
        open: !this.state.open,
      });
    };

    render() {
      return (
        <TouchableOpacity
          style={this.props.style.touchable}
          onPress={this.dropToggle}
        >

          <View style={this.props.style.container}>
              <Text style={this.props.style.buttonTitle}>
                  {this.props.heading}
                </Text>
              <View style={this.props.style.arrowButton}>
                  {this.state.open ? (
                      <Icon name="up" color={this.props.iconcolor} size={this.props.iconsize} />
                    ) : (
                        <Icon name="down" color={this.props.iconcolor} size={this.props.iconsize} />
                    )}
                </View>
            </View>
          {this.state.open ? (
              <Text style={this.props.style.buttonInfo}>
                  {this.props.info}
                </Text>
            ) : (
                <Text> </Text>
            )}

        </TouchableOpacity>
      );
    }
}
