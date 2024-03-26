import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SignUpButton = ({ signUpPress }) => { // Changed prop name to onPress
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => signUpPress()}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: "OpenSans-SemiBold", // Corrected typo from "Aerial" to "Arial"
    fontSize: 17,
  },
});

export default SignUpButton;
