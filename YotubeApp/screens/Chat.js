import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigations/MainNavigator'

export default function Chat() {
  return (
  <MainNavigator/>
  )
}

const styles = StyleSheet.create({})


// import { StyleSheet, Text, View,TouchableOpacity,Button, Alert } from 'react-native'
// import { useNavigation, } from '@react-navigation/native'
// import React, { useState, useCallback, useRef,useLayoutEffect } from "react";
// import YoutubePlayer from "react-native-youtube-iframe";
// import { signOut } from 'firebase/auth'
// import { auth } from '../config/firebase'
// export default function Chat() {
//   const [playing, setPlaying] = useState(false);
//   const navigation = useNavigation()

//   const onSignOut=()=>{
//     signOut(auth).catch(error=>console.log(error))
//   }
//   useLayoutEffect(()=>{
//     navigation.setOptions({
//       headerRigth:()=>{
       
//       }
//     })
//   },[navigation])

//   const onStateChange = useCallback((state) => {
//     if (state === "ended") {
//       setPlaying(false);
//       Alert.alert("video has finished playing!");
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);
//   return (
// <View style={styles.container}>
//   <View style={styles.block}>

//         <View>
//       <YoutubePlayer
//         height={300}
//         play={playing}
//         videoId={"6KXGM0Q0FDg"}
//         onChangeState={onStateChange}
//       />
//       <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//     </View>
    
//   </View>
//   <TouchableOpacity style={styles.btn}  onPress={onSignOut}>
//           <Text style={{color:"white",fontWeight:"600",fontSize:26,textAlign:"center"}}>back</Text>
//         </TouchableOpacity>
// </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//  flex:1,

//   },
  
//   btn:{
//     width:"20%",
//     height:40,
//     borderRadius:10,
//     backgroundColor:"#3498DB",
//    position:"absolute",
//    bottom:10,
//    left:40,
//   }
// })