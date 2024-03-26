import { NavigationContainer } from '@react-navigation/native'
import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import ForgetPassword from '../components/ForgetPassword'
import SucessPan from './SucessPan'


const Resetpassword = ( {navigation} ) => {

    const [formData,setformData] = useState({
        password:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%', alignItems:'center', justifyContent: 'center'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:40,color:Colors.black}} >Reset password</Text>
                </View>
                <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,paddingTop:10,color:"#777"}} >Please enter your email to receive a link to create a new password via email</Text>

                <View style={{flexDirection:'column',paddingTop:20}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'column',alignItems:'center'}} >
                        <TouchableOpacity onPress={() => {navigation.navigate(SucessPan)}} style={[styles.social_btn, {display: 'flex', justifyContent: 'center',backgroundColor: 'rgb(45,69,92)'}]} >
                            <Text style = {{fontFamily: "OpenSans-Bold", color: "white", fontWeight: 'bold', fontSize: 20}}>Send</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            
        </ScrollView>
    )
}

export default Resetpassword

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
        paddingLeft:20,
    },
    social_btn:{
        height:65,
        width: '95%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        margin:10,marginTop:30
    },
    social_img:{
        marginRight: 15,
    }
})
