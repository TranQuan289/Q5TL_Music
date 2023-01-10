import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { View } from 'react-native';

const Router = () =>  {
    const {user,setUser} = useContext(AuthContext);
    const onAuthStateChanged = (user) => {
      setUser(user)
    };

    useEffect(() =>{
      onAuthStateChanged('User')
    }, []);


    return (
      <View style={{flex:1}}>
        { user ? <AppStack /> : <AuthStack /> }
      </View>
    );
  }

export default Router;