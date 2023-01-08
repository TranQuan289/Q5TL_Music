import React, {Component} from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback,StatusBar,
TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView } from "react-native";

export default class login extends Component{
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo}
                                source={require('../images/logo.png')}>
                            </Image>
                            <Text style={styles.title}> Đăng nhập </Text>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                placeholder="Tài khoản"
                                placeholderTextColor='rgba(255,255,255,0)'
                                returnKeyType="next"
                                onSubmitEditing={()=> this.refs.txtPassword.focus()}/>
                                <TextInput style={styles.input}
                                placeholder="Mật khẩu"
                                returnKeyType="go"
                                secureTextEntry
                                ref={"txtpassword"}/>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
                )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(205, 0, 205)',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 128,
        height: 128,
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        backgroundColor: 'rgb(139, 0, 139)'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 131, 250, 0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: 'rgb(139, 0, 139)',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    }

})
