import { Text, StyleSheet, View, TouchableOpacity, } from 'react-native'
import React, { Component, useContext, useState } from 'react'
import Colors from '../assets/utils/Color'
import { windowHeight } from '../assets/utils/Dimentions'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Alert } from "react-native";

export default Register = ({ navigation}) => {
  {
    const [email, setEmail] =useState()
    const [isValEmail,setValEmail]=useState(true)
    const [pass, setPass] =useState()
    const [isValPass,setValPass]=useState(true)
    const [confirmPass, setConfirmPass] =useState()
    const [isValCPass,setValCPass]=useState(true)
    const [checkRegi,setCheckRegi] =useState(false)

    const [getPassVisible, setPassVisible]= useState(false)
    const [getConfirmPassVisible, setConfirmPassVisible]= useState(false)

    const verifyEmail = (email) => {
      let regex= new RegExp(/[\w]+@[\w]+\.[\w]/)
      if(regex.test(email)){
        setCheckRegi(true)
        return true
      }
      return false
    }
    const verifyPass = (pass) => {
      if(pass.length >= 6){
        setCheckRegi(true)
        return true
      }
      return false
    }
    const verifyCPass = (confirmPass) => {
      if(confirmPass === pass){
        setCheckRegi(true)
        return true
      }
      return false
    }

    const register1 = (email,pass) =>{
      try{
        auth().createUserWithEmailAndPassword(email,pass)
        Alert.alert("Notification","Register success")
      } catch(e){
        console.log("error",e)
        Alert.alert("Notification","Email is exist")
      }
    }


    return (
      <View style={styles.container}>
        <Text style={styles.appname}>Q4TL MUSIC</Text>
        <Text style={styles.text}>Create an account</Text>
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

        <View>
          <Text style={[styles.color_textPrivate, {color: Colors.RED}]}>
            {isValCPass ? "" : "Confirm password is not same passwors" }
          </Text>
          <FormInput 
            labelValue={confirmPass}
            onChangeText={ (useConfirmPass) => {
              setConfirmPass(useConfirmPass)
              const isValid= verifyCPass(useConfirmPass)
              isValid ? setValCPass(true) : setValCPass(false)
              }}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry={getConfirmPassVisible? false :true }/>
          <TouchableOpacity style={styles.visiblePass}
                            onPress={() =>{
                              setConfirmPassVisible(!getConfirmPassVisible)
                            }}>
            <AntDesign name={getConfirmPassVisible? "eye" : "eyeo"} size={25} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
        
        <FormButton 
          buttonTitle="Register"
          onPress={() =>{
              Alert.alert("Notification","Create an account success")
          }}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: Colors.RED}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: Colors.RED}]}>
            Privacy Policy
          </Text>
        </View>
        
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
          onPress={() => {navigation.navigate('Login')}}>
            <Text style={styles.forgotText} >Do you have an account? Login now!</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.background,
    flex:1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appname: {
    fontSize: 60,
    color: Colors.primary,
    marginTop:0.1 * windowHeight,
    marginBottom:10
  },
  text: {
    fontSize: 25,
    color: Colors.primary,
    marginBottom:10
  },
  navButton: {
    marginTop: 15,
    fontFamily: 'quicksand-SemiBold'
  },
  forgotButton: {
    justifyContent: 'center',
    alignItems: 'center',
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
    top:35
  },
  forgotText:{
    // fontWeight: 'bold',
    color:Colors.BLUE
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  error: {
    marginTop:0,
    paddingTop:0
  },
})