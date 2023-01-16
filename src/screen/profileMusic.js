import React, { useEffect, useState } from 'react'
import { AuthContext } from '../navigation/AuthProvider'
import {View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, Linking, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import React,{useContext} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/user_profile/',
  params: {id: '3', playlistLimit: '10', artistLimit: '10'},
  headers: {
    'X-RapidAPI-Key': '00a4002b1cmsh4d407da3a7aa027p178542jsn8e84732a7535',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};
const optionsfoll = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/user_followers/',
  params: {id: '3'},
  headers: {
    'X-RapidAPI-Key': '00a4002b1cmsh4d407da3a7aa027p178542jsn8e84732a7535',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};
 export default function ProfileMusic({navigation}) {

  const {logout} = useContext(AuthContext)
  const [apiListfollo,setFollo]=useState([])
  useEffect(()=>{
    axios.request(optionsfoll).then(function (responsefl) {
      setFollo(responsefl.data.profiles)
      console.log(responsefl.data.profiles);
    }).catch(function (error) {
      console.error(error);
    });
  },[]
  )
  
  const [apiList,setApi]=useState([])
  useEffect(()=>{
      axios.request(options).then(function (response) {
        setApi(response.data.public_playlists)
        console.log(response.data.public_playlists);
      }).catch(function (error) {
        console.error(error);
      });
    },[]
  )
  const [apiProfile,setApiPro]=useState([])
  useEffect(()=>{
      axios.request(options).then(function (response) {
        setApiPro(response.data)
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    },[]
  )
  return (
    <View>
      {/* {
          apiList?.map((apis,index)=>{
            return (             
              <View key={index}>
                <Text> {apis.name}</Text>
              </View>
            )
          }
          )
      } */}
      <View >
        {/* <Text> {apiProfile.name}</Text> */}
      </View>
      <View style={styles.upperSection}>
        <LinearGradient
          start={{x: 0, y: 0}}
          colors={['#ff0291', '#2d00f7']}
          style={styles.linearGradient}>
            <View style={justifyContent= 'center'}>
              <Image
                source={{

                   uri: apiProfile.image_url,
                  
                }}
                style={styles.img}
              />
            </View>
        </LinearGradient> 
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.title}>
          <View style={styles.titlefollo}>
            <Text style={styles.followerCount} >{apiProfile.followers_count}</Text>
            <Text style={styles.follower} >Followers</Text>
          </View>
          <View  style={styles.titlefollo}>
            <Text  style={styles.followerCount} >{apiProfile.following_count} </Text>
            <Text  style={styles.follower}>following</Text>
          </View>
          <View  style={styles.titlefollo}>
            <Text  style={styles.followerCount} >{apiProfile.total_public_playlists_count} </Text>
            <Text  style={styles.follower}>Public</Text>
          </View>
        </View>
        <Text style={styles.name}>{apiProfile.name}</Text>
        <View style={styles.listMusic}>
          <Text style={styles.listMusicTitle}>Play list</Text>
          <View >
            {/* <Text style={styles.listMusicMore}>more >></Text> */}
          </View>         
        </View>
        <View style={styles.line}>

        </View >
          <View style={styles.cardlist}>
          <ScrollView horizontal={true}>
          {
            apiList?.map((apis,index)=>{
              return ( 
                            
                <View key={index}>
                  <View style={styles.itemMusic}>
                    <Image
                      source={{
                        uri: apis.image_url,
                      }}
                      style={styles.imgMusic}
                    />
                    <Text  numberOfLines={1} >{apis.name}</Text>
                    <Text style={{fontSize: 12,marginTop:3}}>followers: {apis.followers_count}</Text>
                  </View>
                </View>
              )
            }
            )
          }
          </ScrollView>
                   
        </View>
        <View style={styles.listMusic}>
          <Text style={styles.listMusicTitle}>Followers</Text>
          <View >
            
          </View>
        </View>
        <View style={styles.line}>
        </View >
          <View style={styles.cardlist}>
            <ScrollView horizontal={true}>
            {
              apiListfollo?.map((apis,index)=>{
                return (                            
                  <View key={index}>
                    <View style={styles.itemMusic}>
                      <Image
                        source={{
                          uri: apis.image_url,
                        }}
                        style={styles.imgMusic}
                      />
                      <Text  numberOfLines={1} >{apis.name}</Text>
                      <Text style={{fontSize: 12,marginTop:3}}>followers: {apis.followers_count}</Text>
                    </View>
                  </View>
                )
              })
            }
            </ScrollView>
            
          
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  ScrollViewList:{
    flexDirection:'row',
  },
  followerCount:{
    fontSize:20,
    fontWeight:'bold'
  },
  cardlist:{
    marginHorizontal:10,
    flexDirection:'row',
  },
  itemMusic:{
    // backgroundColor:'blue',
    alignItems:'center',
    marginLeft:5,
    width:120,
    height:150,
    backgroundColor:"white", 
    borderRadius:15,
    padding:10, 
    elevation:10, 
    shadowColor: '#2d00f7',
    shadowOffset: { width: 20, height: 30 }, 
    shadowOpacity: 25,
    shadowRadius: 30,
  },
  
  titlefollo:{
    flexDirection: 'column',
    alignItems: 'center',
    marginRight:30,
    // backgroundColor:'blue',
  },
  line:{
    backgroundColor:'#E5E5E5',
    height:1,
    marginHorizontal:15
  },
  listMusic:{
    flexDirection:'row',
    marginTop:10,
    // alignItems:,
    justifyContent:'space-between',
    marginLeft:15,
    marginRight:15,
  },
  follower:{
    marginRight:10,
  },
  title :{
    marginLeft: 130,
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
   
  },

  upperSection: {
    width: deviceWidth,
    height: deviceHeight / 5,
  },
  bottomSection: {
    // alignItems: 'center',
    width: deviceWidth,
    height: 3 * (deviceHeight / 4),
  },
  linearGradient: {
    flex: 1,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 70,
    marginTop: deviceHeight / 8,
    
  },
  imgMusic:{
    height: 60,
    width: 60,
    backgroundColor:'#E5E5E5',
    borderRadius: 70,
    marginBottom:20
  },
  name: {
    marginTop: 10,
    marginStart:15,
    fontSize: 15,
  },
  listMusicTitle: {
    marginTop: 35,
    fontSize: 18,
     color: 'black'
  },
  listMusicMore: {
    marginTop: 35,
    fontSize: 15,
    textAlign:'right',
    fontStyle: 'italic',
    color: '#2d00f7'
  },
  desc: {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 22,
    fontSize: 19,
    textAlign: 'justify'
  },
  profileText: {
    fontSize: 22,

  },
  profileTouch: {
    borderWidth: 2, 
    borderColor: '#2d00f7', 
    padding: 13, 
    marginTop: 28, 
    borderRadius: 10
  }
});


