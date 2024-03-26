import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'
import {Colors} from '../../src/constants'


const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Onboarding')
    },3000)
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.black}} >
            {/* <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000" /> */}
            <Image source={require('../assets/images/splash_option2.png')} />    
            {/* <Text style={{fontFamily:'OpenSans-Bold',fontSize:30,color:Colors.white}} >Ondago</Text> */}
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
