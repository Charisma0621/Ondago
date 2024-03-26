import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'
import {Colors} from '../../src/constants'
import GobackButton from '../components/GobackButton'


const SucessPan = ({navigation}) => {

    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.black}} >
            {/* <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000" /> */}
            <Image source={require('../assets/images/Success.png')} />    
            {/* <Text style={{fontFamily:'OpenSans-Bold',fontSize:30,color:Colors.white}} >Ondago</Text> */}
            <GobackButton onPress = {() => navigation.navigate("OptPan")}/>
        </View>
    )
}

export default SucessPan

const styles = StyleSheet.create({})
