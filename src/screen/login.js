import { Text, StyleSheet, View, TouchableOpacity, } from 'react-native'
import React, { Component, useState, useEffect, useContext } from 'react'
import Colors from '../assets/utils/Color'
import { windowHeight } from '../assets/utils/Dimentions'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AuthContext } from '../navigation/AuthProvider'

export default  Login = ({ navigation}) => {
  {
    const [email, setEmail] =useState()
    const [isValEmail,setValEmail]=useState(true)
    const [pass, setPass] =useState()
    const [isValPass,setValPass]=useState(true)
    const [checkLogin,setCheckLogin] =useState(false)

    const verifyEmail = (email) => {
      let regex= new RegExp(/[\w]+@[\w]+\.[\w]/)
      if(regex.test(email)){
        setCheckLogin(true)
        return true
      }
      return false
    }
    const verifyPass = (pass) => {
      if(pass.length >= 6){
        setCheckLogin(true)
        return true
      }
      return false
    }

    const [getPassVisible, setPassVisible]= useState(false)

    return (
      <View style={styles.container}>
        <Text style={styles.appname}>Q4TL MUSIC</Text>
        <Text style={styles.text}>Login to continue using</Text>
        <View>
          <Text style={[styles.color_textPrivate, {color: Colors.RED}]}>
            {isValEmail ? "" : "Email format error" }
          </Text>
          <FormInput 
            labelValue={email}
            onChangeText={(useEmail) => {
              setEmail(useEmail)
              const isValid= verifyEmail(useEmail)
              isValid ? setValEmail(true) : setValEmail(false)
            }}
            placeholderText="Email"
            iconType="user"
            autoCapitalize="none"
            autoCorrect={false}/>
        </View>
        <View>
        <Text style={[styles.color_textPrivate, {color: Colors.RED}]}>
            {isValPass ? "" : "Min password length of 5" }
          </Text>
          <FormInput 
            labelValue={pass}
            onChangeText={(usePass) => {
              setPass(usePass)
              const isValid= verifyPass(usePass)
              isValid ? setValPass(true) : setValPass(false)
              }}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={getPassVisible? false :true }/>
          <TouchableOpacity style={styles.visiblePass}
                            onPress={() =>{
                              setPassVisible(!getPassVisible)
                            }}>
            <AntDesign name={getPassVisible? "eye" : "eyeo"} size={25} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
        
        <FormButton 
          buttonTitle="Login"
          onPress={() => {
           navigation.navigate('HomeTabs')
          }}
        />

        <TouchableOpacity style={styles.forgotButton}
          onPress={() => {}}>
            <Text style={styles.forgotText} >Forgot Password</Text>
        </TouchableOpacity>
        
        <SocialButton 
          buttonTitle="Login with Facebook"
          btnType="facebook"
          color={Colors.WHILE}
          backgroundColor={Colors.BLUE}
          pnPress={()=>{}}/>

        <SocialButton 
          buttonTitle="Login with Google"
          btnType="google"
          color={Colors.WHILE}
          backgroundColor={Colors.RED}
          pnPress={()=>{}}/>

        <TouchableOpacity style={styles.forgotButton}
          onPress={() => {navigation.navigate('Register')}}>
            <Text style={styles.forgotText} >Do not have an account? Create now!</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.background,
    flex:1
  },
  appname: {
    fontSize: 60,
    color: Colors.primary,
    marginTop:70,
  },
  text: {
    fontSize: 25,
    color: Colors.primary,
    marginBottom:10
  },
  navButton: {
    marginTop: 15,
   },
  forgotButton: {
    marginVertical: 30,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'quicksand-SemiBold',
  },
  visiblePass: {
    position: 'absolute',
    right:10,
    top: 40
  },
  forgotText:{
    // fontWeight: 'bold',
    color:Colors.BLUE
  },
})