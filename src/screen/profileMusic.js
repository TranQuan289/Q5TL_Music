import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../assets/utils/Color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { windowHeight } from '../assets/utils/Dimentions'

export default function ProfileMusic() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity style={{position:'absolute',right:10,top:10}}
            onPress={()=>{navigation.navigate('Login')}}>
          <Ionicons name="log-out-outline" size={35} color={Colors.WHILE}/>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',margin:10,marginTop:40}}>
          <Image source={require('../assets/images/imageSong.jpg')}  style={styles.headerImage}/>
          <View>
            <Text style={{color:Colors.WHILE,fontSize:30, marginLeft:20,justifyContent:'center',alignItems:'center'}}>User name</Text>
            <View style={{flexDirection:'row',marginLeft:20}}>
              <Text style={{color:Colors.WHILE,fontSize:18,fontWeight:'500'}}>0</Text>
              <Text style={{color:Colors.WHILE,fontSize:15,fontWeight:'300',margin:3}}>Follower</Text>
              <Text style={{color:Colors.WHILE,fontSize:18,fontWeight:'500'}}>.</Text>
              <Text style={{color:Colors.WHILE,fontSize:15,fontWeight:'300',margin:3}}>Following</Text>
              <Text style={{color:Colors.WHILE,fontSize:18,fontWeight:'500'}}>3</Text>
            </View>
          </View>
        </View>
        <View style={{marginLeft:30,flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity style={{borderWidth:1,borderRadius:10,width:100,alignItems:'center',justifyContent:'center',borderColor:Colors.WHILE}}>
            <Text style={{color:Colors.WHILE,fontSize:18,padding:5}}>Edit</Text>
          </TouchableOpacity>
          <Ionicons name="ios-ellipsis-vertical" size={30} color={Colors.WHILE}  />
        </View>
      </View>
      <View style={styles.main}>
        <Text style={{color:Colors.primary,fontSize:25,marginTop:20}}>Unable to active any near here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:Colors.background,
  },
  Header: {
    width:'100%',
    height:0.34*windowHeight,
    backgroundColor:Colors.PLACEHOLDER,
  },
  headerImage: {
    width:150,
    height:150,
    borderRadius:75
  },
  main: {
    flex:1,
    alignItems:'center'
  },
})