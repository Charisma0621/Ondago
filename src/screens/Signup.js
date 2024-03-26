import { NavigationContainer } from '@react-navigation/native'
import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import SignUpButton from '../components/SignUpButton'



const Signup = ({ navigation }) => {

    const [formData,setformData] = useState({
        name:'',
        email:'',
        phoneno:'',
        address:'',
        password:'',
        confirmpassword:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%', alignItems:'center', justifyContent: 'center'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:40,color:Colors.black}} >Sign Up</Text>
                </View>
                <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,paddingTop:10,color:"#777"}} >Add your details to Sign Up</Text>

                <View style={{flexDirection:'column',paddingTop:20}} >

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="user" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,name:text}))}} style={styles.input} placeholder="Name" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:35}} >
                        <Icon name="envelope" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:35}} >
                        <Icon name="phone" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,phoneno:text}))}} style={styles.input} placeholder="Phone No" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:35}} >
                        <Icon name="home" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,address:text}))}} style={styles.input} placeholder="Address" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:35}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:35}} >
                        <Icon name="unlock" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,confirmpassword:text}))}} style={styles.input} placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{flexDirection:'column',alignItems:'center'}} >
                    <TouchableOpacity onPress={() => navigation.navigate("SelectRole")} style={[styles.social_btn, {display: 'flex', justifyContent: 'center',backgroundColor: 'rgb(45,69,92)'}]} >
                            <Text style = {{fontFamily: "OpenSans-Bold", color: "white", fontWeight: 'bold', fontSize: 20}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <Buttons  btn_text={"Sign In"} on_press={()=>console.log(formData)} /> */}
                </View>
            </View>
            
        </ScrollView>
    )
}

export default Signup

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
        margin:10,
        marginTop:30
    },
    social_img:{
        marginRight: 15,
    }
})
