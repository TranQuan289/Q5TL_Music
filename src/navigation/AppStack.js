import 'react-native-gesture-handler';
import { Text, StyleSheet, View, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeMusic from '../screen/homeMusic'
import ArtistMusic from '../screen/artistMusic'
import ProfileMusic from '../screen/profileMusic';
import PlayMusic from '../screen/playMusic'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTap = ({navigation}) => {
  function MyTabs(){
    return (
      <Tab.Navigator 
          initialRouteName='Home' 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home': 'home-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'library' : 'library-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#ffd369',
          tabBarInactiveTintColor: 'gray',
          headerShown:false,
          tabBarInactiveBackgroundColor: '#222831',
          tabBarActiveBackgroundColor: '#222831',
          // tabBarShowLabel:false,
        })}>
          <Tab.Screen name="Home" component={HomeMusic} />
          <Tab.Screen name="Library" component={ArtistMusic} />
          <Tab.Screen name="Profile" component={ProfileMusic}  />
      </Tab.Navigator>
    )
  }
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeTabs' screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeTabs" component={MyTabs} />
            <Stack.Screen name="PlayMusic" component={PlayMusic} />
          </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={{height:70,position:'absolute',bottom:50,backgroundColor:Colors.background,width:'100%',flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../assets/images/img1.jpg')} style={{height:50,width:50,margin:10,borderRadius:10,}}/>
        <View>
            <Text style={{color:Colors.WHILE,fontSize:18}}>19th Floor</Text>
            <Text style={{color:Colors.PLACEHOLDER,fontSize:15}}>Bobby Richards</Text>
        </View>
        <TouchableOpacity onPress={()=>{}} style={{marginLeft:'auto',marginRight:0}}>
                <Ionicons name="ios-heart-outline" size={30} color={Colors.WHILE} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={{marginLeft:10,marginRight:10}}>
                <Ionicons name="ios-pause-circle" size={30} color={Colors.WHILE} />
        </TouchableOpacity>
      </View>   */}
    </View>
    );
}
export default HomeTap