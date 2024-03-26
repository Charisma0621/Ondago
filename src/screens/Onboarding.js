import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Colors } from '../../src/constants'
import Buttons from '../components/Buttons'
import SkipButton  from '../components/SkipButton'

const Onboarding = ({ navigation }) => {
    const [currentImage, setCurrentImage] = useState(1);

    const handleButtonPress = () => {
      
        const nextImageIndex = currentImage + 1;
        if (nextImageIndex <= 3) {
            setCurrentImage(nextImageIndex);
        } else {
            navigation.navigate("Login");
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }} >
            <View style={{ flex: 1, backgroundColor: '#ddd' }} >
                <ImageBackground source={getImageSource(currentImage)}
                    style={{ flex: 1, width: '100%', backgroundColor: '#fff' }} />
            </View>
            <Buttons onPress = {handleButtonPress} />
            <SkipButton handlePress = {() => navigation.navigate("Login")}/>
        </View>
    )
}

const getImageSource = (index) => {
    switch (index) {
        case 1:
            return require('../assets/images/onboarding1.png');
        case 2:
            return require('../assets/images/onboarding2.png');
        case 3:
            return require('../assets/images/onboarding3.png');
        default:
            return null;

    }
}

export default Onboarding

const styles = StyleSheet.create({})
