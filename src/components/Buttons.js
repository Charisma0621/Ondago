import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native';

const Buttons = ({ onPress }) => { // Changed prop name to onPress
  return (
    <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={onPress} underlayColor="black">
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    position: 'absolute',
    alignSelf: 'center', // Adjust this according to your layout
    backgroundColor: 'rgb(45,69,92)',
    padding: 20,
    borderRadius: 5,
    bottom: 80,
    width: "40%",
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold'
  },
});

export default Buttons;
