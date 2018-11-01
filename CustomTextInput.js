import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          accessible= {true}
          testID= {"pizza_entry"}
          accessibilityLabel= {"pizza_entry"}
          style={{height: 40}}
          placeholder="Provide to words to express them in Pizza!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text
        accessible= {true}
        testID= {"pizza_translation"}
        accessibilityLabel= {"pizza_translation"}
        style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
