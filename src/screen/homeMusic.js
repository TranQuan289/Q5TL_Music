import { StyleSheet, Text, View,TouchableOpacity ,TextInput,FlatList,Image } from 'react-native'
import React from 'react'
import axios  from 'axios';
import Colors from '../assets/utils/Color'
import {windowHeight,windowWidth} from '../assets/utils/Dimentions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchHome from '../components/searchHome';
import Data from '../components/data'


export default function HomeMusic({navigation}) {

  const renderItem = ({item}) =>{
    console.log(item)
    return (
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('PlayMusic',{
        songName:item.title,
        songArtist:item.artist,
        songImage:item.artwork
        })
      }>
        <Image source={item.artwork} style={{width:50,height:50,borderRadius:10}}/>
        <View style={{marginLeft:10,justifyContent:'space-between',height:40}}>
          <Text style={{color:Colors.WHILE,fontSize:18,}}>{item.title}</Text>
          <Text style={{color:Colors.WHILE,fontSize:14,}}>{item.artist}</Text>
        </View>
        <Ionicons name="ios-ellipsis-vertical-circle" size={30} color={Colors.primary} style={{position:'absolute',right:10,top:20}} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:10}}>
        <View style={{flex:1,marginRight:20}}>
          <SearchHome />
        </View>
        <Text style={{color:Colors.primary,fontSize:26,fontWeight:'600',marginRight:20}}>Q5TL</Text>
      </View>
      <FlatList
        style={{flex:1,padding:8}}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item=>`key-${item.id}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.background,
  },
  input: {
    padding: 10,
    paddingRight: 50,
    flex: 1,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: Colors.primary,
    borderLeftWidth: 1,
    width: 50,
  },
  item: {
    flexDirection: 'row',
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    margin:5,
    borderRadius:5,
  },
})