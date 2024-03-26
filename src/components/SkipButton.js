import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SkipButton = ({ handlePress }) => { // Changed prop name to onPress
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>skip</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    position: 'absolute',
    alignSelf: 'center', // Adjust this according to your layout
    backgroundColor: 'transparent', // Changed from 'none' to 'transparent'
    padding: 20,
    borderRadius: 5,
    top: -850,
    left: 320,
    width: "20%",
    margin: 10
  },
  buttonText: {
    color: 'rgb(40,69,92)',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: "italic",
    textDecorationLine: 'underline',
    fontFamily: "OpenSans-SemiBold", // Corrected typo from "Aerial" to "Arial"
    fontSize: 20,
  },
});

export default SkipButton;
