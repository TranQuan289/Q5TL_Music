import { StyleSheet, Text, View,TouchableOpacity ,TextInput,FlatList,Image } from 'react-native'
import React from 'react'
import axios  from 'axios';
import Colors from '../assets/utils/Color'
import {windowHeight,windowWidth} from '../assets/utils/Dimentions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SearchHome from '../components/searchHome';
import Data from '../components/data'
import Icon from 'react-native-vector-icons/AntDesign';


export default function HomeMusic({navigation}) {

  const renderItem = ({item}) =>{
    return (
      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('PlayMusic',item
      )}>
        <Image source={item.artwork} style={{width:70,height:70,borderRadius:10}}/>
        <View style={styles.itemText}>
          <Text style={{color:Colors.WHILE,fontSize:18,}}>{item.title}</Text>
          <Text style={{color:Colors.TEXT_COLOR,fontSize:14,}}>{item.artist}</Text>
          <Text style={{color:Colors.TEXT_COLOR,fontSize:12,}}>{"Time:today"}</Text>
        </View>
        <View style={styles.itemIcon}>
          <Ionicons name="ios-heart-outline" size={30} color={Colors.WHILE} />
          <Ionicons name="ios-ellipsis-vertical-sharp" size={30} color={Colors.WHILE} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/imageSong.jpg')} style={{width:40,height:40,borderRadius:20,marginLeft:10}}/>
        <View style={styles.headerSearch}>
          <SearchHome />
        </View>
        <Fontisto name='bell' size={30} color={Colors.WHILE} style={{marginRight:10,marginTop:5}} />
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
    marginTop:10,
    justifyContent:'space-between',
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
    marginLeft:'auto',
    marginRight:0,
    alignItems:'center',
    flexDirection:'row'
  }
})