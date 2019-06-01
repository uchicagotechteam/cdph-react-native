import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Main from './main';
import DetailContents from '../functions/detailContents.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'main',
      disease: '',
    };
  }

  // function to update the state so that the page resets to its default after viewing a disease page
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.reset != this.props.reset) {
      this.setState({
        active: 'main',
        disease: '',
      });
    }
  }


  switchPage(update, disease) {
    this.setState({
      active: update,
      disease,
    });
  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.active == 'main'
          ? (
            <View style={styles.container}>
              <Image source={require('../../assets/NEWmedreportbackground.png')} style={styles.image} />
              <Main switch={this.switchPage.bind(this)} />
            </View>
          )
          : <DetailContents disease={this.state.disease} switch={this.switchPage.bind(this)} back="main" />}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    top: 0,
    width: '100%',
    position: 'absolute',
  },
  search: {
    alignSelf: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
});
