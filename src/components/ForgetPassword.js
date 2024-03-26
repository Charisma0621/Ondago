import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const forgetPassword = ({ forgetPress }) => { // Changed prop name to onPress
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => forgetPress()}>
            <Text style={styles.buttonText}>Forgot your password?</Text>
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
    left: 30,
    marginTop:10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: "OpenSans-SemiBold", // Corrected typo from "Aerial" to "Arial"
    fontSize: 13,
  },
});

export default forgetPassword;
