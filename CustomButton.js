import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

var defaultButtonText = "Press Me"

class CustomButton extends Component {
	constructor (props){
		super(props);
		this.state = {
			clicked: false
		}
		}


	render() {
		const { text, onPress} = this.props;
		return (
			
			<TouchableOpacity  style={styles.buttonStyle}
			onPress={() => this.setState({clicked:!this.state.clicked})}>	
			
			 <Text 
			 	accessible= {true}
			 	testID= {"ButtonText"}
			 	accessibilityLabel= {"ButtonTextDesc"}
			 	style={styles.textStyle}>

				 {!this.state.clicked? defaultButtonText: "Polidea"}
				 
			 </Text>
			 <Image
					accessible={true} 
					testID='ButtonImage'
          style={!this.state.clicked ? styles.imageStyleDefault : styles.imageStyle}
          source={{uri:'https://www.polidea.com/img/polidea-new-logo.png'}}
          />
		  </TouchableOpacity>
		);
	}
}

CustomButton.propTypes = {
  showLogo: PropTypes.bool,
  onPress: PropTypes.func
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
	color: '#ffffff',
	textAlign: 'center'
  },
  
  buttonStyle: {
	padding:10,
	backgroundColor: '#209DD8',
	borderRadius:10,
	},
	imageStyle: {
		width: 150, 
		height: 150,
		backgroundColor: "#209DD8",
		borderRadius:10,
		justifyContent: 'center',
    alignItems: 'center'
	},
	imageStyleDefault: {
		width: 0, 
		height: 0,
		backgroundColor: "#209DD8",
		borderRadius:10,
		justifyContent: 'center',
    alignItems: 'center'
	}
	
});

export default CustomButton;