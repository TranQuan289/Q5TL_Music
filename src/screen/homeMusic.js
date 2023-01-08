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
    return (
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('PlayMusic',{
        songName:item.title,
        songArtist:item.artist,
        songImage:item.artwork
        })
      }>
        <Image source={item.artwork} style={{width:70,height:70,borderRadius:10}}/>
        <View style={styles.itemText}>
          <Text style={{color:Colors.WHILE,fontSize:18,}}>{item.title}</Text>
          <Text style={{color:Colors.TEXT_COLOR,fontSize:14,}}>{item.artist}</Text>
          <Text style={{color:Colors.TEXT_COLOR,fontSize:12,}}>{"Time:today"}</Text>
        </View>
        <View style={styles.itemIcon}>
          <Ionicons name="heart-outline" size={30} color={Colors.WHILE} />
          <Ionicons name="ios-ellipsis-vertical-circle" size={30} color={Colors.WHILE}  />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearch}>
          <SearchHome />
        </View>
        <Text style={styles.headerText}>Q4TL</Text>
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
  header: {
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    marginTop:10
  },
  headerSearch: {
    flex:1,
    marginRight:20
  },
  headerText: {
    color:Colors.primary,
    fontSize:26,
    fontWeight:'600',
    marginRight:20
  },
  item: {
    flexDirection: 'row',
    padding: 8,
    borderColor: Colors.primary,
    margin:5,
    borderRadius:5,
  },
  itemText: {
    marginLeft:10,
    justifyContent:'space-between',
    height:60,
  },
  itemIcon: {
    position:'absolute',
    right:10,
    top:20,
    flexDirection:'row'
  }
})