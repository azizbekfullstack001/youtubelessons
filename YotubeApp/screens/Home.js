import { StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {FontAwesome} from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import colors from '../color'
const catImage = require('../assets/banner.png')
const image  = require("../assets/banner.png")
export default function Home() {






          const navigation = useNavigation()
          useEffect(()=>{
                    navigation.setOptions({
                              headerLeft:()=>{
                                        <FontAwesome name='search' size={24} color={colors.grey} style={{marginLeft:15}}/>
                              },
                              headerRight:()=>{
                                        <Image source={{uri:catImage}} style={{width:40,height:40,marginRight:15,}}/>
                              }
                    })
          },[navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.images}>
        <Text style={styles.textGroup}>Azizbek Rajabov Dasturiga Xush kelibsiz . Bu yerda siz 10 dan ortiq dasturlash tillariga oid video kurslarni mutlaqo tekinga o'rganishingiz mumkin. Pastdagi tugmani bosib darslarni ko'rishni boshlang 👇👇</Text>
      <TouchableOpacity style={styles.chatButton} onPress={()=>navigation.navigate("Chat")}>
      <Text style={{color:"white",fontSize:19,fontWeight:"600"}}>Lessons</Text>
      </TouchableOpacity>
    
      </ImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
          container:{
                    flex:1,
                 
                    
                    
          },
          chatButton:{
                    backgroundColor:"#3498DB",
                    height:50,
                    width:"90%",
                    borderRadius:25,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:400,
                   marginLeft:20        
          },
          images: {
            flex: 1,
            justifyContent: 'center',
          },
          textGroup:{
            fontSize:18,
            color:"#3498DB",
            fontWeight:"600",
            textAlign:"center",
            marginTop:-100


          }
})