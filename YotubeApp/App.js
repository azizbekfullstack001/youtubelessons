


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Chat from './screens/Chat'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext } from 'react'
import { useState } from 'react'
import { auth } from './config/firebase'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
const Stack = createStackNavigator()
const AuthenticatedUserContext= createContext({})
const AuthenticatedUserProvider = ({children})=>{
  const [user,setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user,setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}
function ChatStack(){
  return (
    <Stack.Navigator  defaultScreenOptions={Home} screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Chat' component={Chat}/> 


   
  </Stack.Navigator>
  )
}
function AuthStack(){
  return (
    <Stack.Navigator  defaultScreenOptions={Login} screenOptions={{headerShown:false}}>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
  </Stack.Navigator>
  )
}
function RootNavigator(){ 
  const {user,setUser} = useContext(AuthenticatedUserContext)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
   const unsubcribe = onAuthStateChanged(auth,async authenticatedUser=>{
    authenticatedUser?setUser(authenticatedUser):setUser(null)
    setLoading(false)
   })
   return ()=>unsubcribe();
  },[user])
  if(loading){
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size={"large"}/>
      </View>
    )
  }
  return (
    <NavigationContainer>
     {
      user?<ChatStack/>:<AuthStack/>
     }
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator/>
    </AuthenticatedUserProvider>
  )
}

const styles = StyleSheet.create({})