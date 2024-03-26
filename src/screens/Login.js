import { NavigationContainer } from '@react-navigation/native'
import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import SignUpButton from '../components/SignUpButton'
import ForgetPassword from '../components/ForgetPassword'
import SelectRole from './SelectRole'

const Login = ( {navigation} ) => {

    const [formData,setformData] = useState({
        email:'',
        password:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%', alignItems:'center', justifyContent: 'center'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:40,color:Colors.black}} >Sign in</Text>
                </View>
                <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,paddingTop:10,color:"#777"}} >Welcome back, you've been missed</Text>

                <View style={{flexDirection:'column',paddingTop:20}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:35}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{width:'95%',marginBottom:10}} >
                        <ForgetPassword forgetPress = {() => navigation.navigate("Resetpassword")}/>
                    </View>

                    <View style={{flexDirection:'column',alignItems:'center'}} >
                        <TouchableOpacity onPress={()=>{navigation.navigate("SelectRole")}} style={[styles.social_btn, {display: 'flex', justifyContent: 'center',backgroundColor: 'rgb(45,69,92)', marginTop: 30}]} >
                            <Text style = {{fontFamily: "OpenSans-Bold", color: "white", fontWeight: 'bold', fontSize: 20}}>login</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <Buttons  btn_text={"Sign In"} on_press={()=>console.log(formData)} /> */}
                </View>
            </View>

            {/* social login section */}
            <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column',paddingHorizontal:'3%'}} >
                <Text style={{fontFamily:"OpenSans-Bold",textAlign:'center',marginVertical:35,color:'#818181',fontSize:13}} >Sign in with</Text>

                <View style={{flexDirection:'column',alignItems:'center'}} >

                    <TouchableOpacity onPress={()=>console.log("facebook login")} style={[styles.social_btn, {display: 'flex', justifyContent: 'center',backgroundColor: 'rgb(54,127,192)'}]} >
                        <Image style={styles.social_img} source={require('../assets/images/facebook-letter-logo.png')} />
                        <Text style = {{fontFamily: "OpenSans-Bold", color: "white", fontWeight: 'bold'}}>Facebook</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity onPress={() => console.log("google login")} style={[styles.social_btn, {display: 'flex', justifyContent: 'center',backgroundColor: 'rgb(221,75,57)'}]}>
                        <Image style={styles.social_img} source={require('../assets/images/google-plus-logo.png')} />
                        <Text style = {{fontFamily: "OpenSans-Bold", color: "white", fontWeight: 'bold'}}>Google</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity onPress={() => console.log("apple login")} style={[styles.social_btn, {display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(51,51,51)'}]}>
                        <Image style={styles.social_img} source={require('../assets/images/apple-plus-logo.png')} />
                        <Text style = {{fontFamily: "OpenSans-Bold", color: "white", fontWeight: 'bold'}}>Apple</Text>
                    </TouchableOpacity>

                </View>
                
                <View style={{discplay:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',marginBottom:40, marginVertical: 10}} >
                    <Text style={{fontFamily:'OpenSans-Medium',fontSize:15,color:'#818181'}} >Don't have a account? </Text>
                    <SignUpButton signUpPress = {() => navigation.navigate("Signup")}/>
                </View>
                 


            </View>
            
        </ScrollView>
    )
}

export default Login

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
        margin:10,marginTop:10
    },
    social_img:{
        marginRight: 15,
    }
})
