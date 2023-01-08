import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMusic from '../../screen/homeMusic';
import PlayMusic from '../../screen/playMusic';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="  " component={HomeMusic} />
        <Stack.Screen name="PlayList" component={PlayMusic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
