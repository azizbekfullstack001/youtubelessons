import { StyleSheet, Text, View,Button,TextInput,Image,SafeAreaView,TouchableOpacity,StatusBar,Alert } from 'react-native'
import React from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
import { useState } from 'react'
const backImage = require("../assets/banner.png")
export default function SignUp({navigation}) {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const onHandleSignUp=()=>{
    if(email!=="" && password!==""){
      createUserWithEmailAndPassword(auth,email,password).then(()=>{
        console.log("login success");
      }).catch((err)=>{
        Alert.alert("login error",err.message)})

    }

  }
  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage}/>
      <View style={styles.whiteSheet}/>
       <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input}
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={(text)=>setEmail(text)}
        />
           <TextInput style={styles.input}
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'
        value={password}
        onChangeText={(text)=>setPassword(text)}
        />
    <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
      <Text style={{fontWeight:"bold",color:"white",fontSize:18}}>SignUp </Text>
    </TouchableOpacity>
    <View style={{marginTop:20,flexDirection:"row",alignItems:"center",alignSelf:"center"}}>
      <Text style={{color:"grey",fontWeight:"600",fontSize:14}}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <Text style={{color:"#3498DB",fontWeight:"600",fontSize:14}}>LogIn</Text>

        </TouchableOpacity>
    </View>
       </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
  },
  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"#3498DB",
    alignSelf:"center",
    paddingBottom:24,
  },
  input:{
    backgroundColor:"#F6F7FB",
    height:58,
    marginBottom:28,
    fontSize:16,
    borderRadius:10,
    padding:12,
  },backImage:{
    width:"100%",
    height:340,
    position:"absolute",
    top:0,
    resizeMode:"cover"
  },
  whiteSheet:{
    width:"100%",
    height:"75%",
    position:"absolute",
    bottom:0,
    backgroundColor:"#fff",
    borderTopLeftRadius:60,
  },
  form:{
    flex:1,
    justifyContent:"center",
    marginHorizontal:30,
  },
  button:{
    backgroundColor:"#3498DB",
    height:58,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:40,
  }
})