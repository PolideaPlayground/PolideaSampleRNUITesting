import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Image} from 'react-native';
import PizzaTranslator from './CustomTextInput'
class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
              this.setModalVisible(false);
          }}>
          <Text
          accessible= {true}
  			 	testID= {"pizza_header"}
  			 	accessibilityLabel= {"pizza_header"}
          style={{alignSelf: 'center',marginTop:40,fontSize:40,fontWeight:'bold'}}>
          Pizza tool!
          </Text>
          <PizzaTranslator/>
          <View style={{marginTop: 100,backgroundColor: 'white'}}>
            <View style={{backgroundColor: 'white'}}>
              <TouchableHighlight
              underlayColor='white'
              style={{
                backgroundColor: 'white'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <View style={{
                  alignSelf: 'center',
                  marginTop: 22
      }}>
                <Image
                accessible= {true}
        			 	testID= {"exit_button"}
        			 	accessibilityLabel= {"exit_button"}
                source={require('./icon.png')} />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
        underlayColor='#F5FCFF'

          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default ModalExample;
