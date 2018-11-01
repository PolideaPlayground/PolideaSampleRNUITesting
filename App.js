/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CustomButton from './CustomButton';
import ModalExample from './ModalExample';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  Image,
  Easing
} from 'react-native';


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    }
  render() {
    return (
      <View style={styles.container}>
        <CustomButton/>
        <ModalExample/>
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
    borderRadius:10

  },
});
