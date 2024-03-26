import { NavigationContainer } from '@react-navigation/native'
import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import ForgetPassword from '../components/ForgetPassword'
import Login from './Login'


const OptPan = ( {navigation} ) => {

    const [formData,setformData] = useState({
        password:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%', alignItems:'center', justifyContent: 'center'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:28,color:Colors.black}} >We have sent an OTP to your Mobile</Text>
                </View>
                <Text style={{fontFamily:"OpenSans-Regular",fontSize:15,paddingTop:10,color:"#777"}} >Please check your mobile number ********71 continue to reset your password</Text>

                <View style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ededed', width: '20%', borderRadius: 10, height: 60, marginRight: 20, marginLeft: 20 }}>
                            <TextInput value="*" onChangeText={(text) => { setformData((prevState) => ({ ...prevState, email: text })) }} style={styles.input} placeholderTextColor="#818181" />
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ededed', width: '20%', borderRadius: 10, height: 60, marginRight: 20 }}>
                            <TextInput value="*" onChangeText={(text) => { setformData((prevState) => ({ ...prevState, email: text })) }} style={styles.input} placeholderTextColor="#818181" />
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ededed', width: '20%', borderRadius: 10, height: 60, marginRight: 20 }}>
                            <TextInput value="*" onChangeText={(text) => { setformData((prevState) => ({ ...prevState, email: text })) }} style={styles.input} placeholderTextColor="#818181" />
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ededed', width: '20%', borderRadius: 10, height: 60, marginRight: 20 }}>
                            <TextInput value="*" onChangeText={(text) => { setformData((prevState) => ({ ...prevState, email: text })) }} style={styles.input} placeholderTextColor="#818181" />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate(Login) }} style={[styles.social_btn, { justifyContent: 'center', backgroundColor: 'rgb(45,69,92)', marginVertical: 20, alignItems: 'center', borderRadius: 10 }]}>
                        <Text style={{ fontFamily: "OpenSans-Bold", color: "white", fontWeight: 'bold', fontSize: 20 }}>Send</Text>
                    </TouchableOpacity>
                 </View>

            </View>

            
        </ScrollView>
    )
}

export default OptPan

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'100%',
        textAlign: 'center',
        fontFamily:'OpenSans-Medium',
        // paddingLeft:20,
    },
    social_btn:{
        height:65,
        width: 100,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        margin:10,marginTop:30
    },
})
