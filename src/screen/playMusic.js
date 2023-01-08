import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import  Slider  from "@react-native-community/slider"

export default function PlayMusic() {
  return (
    <View style={{flex:1,backgroundColor: '#222831',}}>
        {/* button back */}
        <View style={{margin:10}}>
            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="chevron-down" size={35} color="#ffd369" />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        {/* image */}
        <View style={[styles.imageWrapper,styles.elavation]}>
            <Image source={require('../assets/images/imageSong.jpg')}
                style={styles.imageMusic}
            />
        </View>
        {/* song content */}
        <View>
            <Text style={[styles.songContent,styles.songTitle]}>Song Name</Text>
            <Text style={[styles.songContent,styles.songArtist]}>Song Artist Name</Text>
        </View>

        {/* slider */}
        <View>
            <Slider
                style={styles.progressBar}
                value={10}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor='#ffd369'
                minimumTrackTintColor="#ffd369"
                maximumTrackTintColor="#fff"
                onSlidingComplete={()=>{}}
            />
        </View>
        {/* slider progress durations */}
        <View style={styles.progressLevelDurations}>
            <Text style={styles.progressLabelText}>00:00</Text>
            <Text style={styles.progressLabelText}>00:00</Text>
        </View>

        {/* music controls */}
        <View style={styles.musicControlsContainer}>
            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="play-skip-back-outline" size={35} color="#ffd369" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="ios-pause-circle" size={75} color="#ffd369" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="play-skip-forward-outline" size={35} color="#ffd369" />
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 50,
    },
    imageWrapper:{
        width: 300,
        height: 300,
        marginBottom: 50,
    },
    imageMusic: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    elavation: {
        elevation: 5,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
    songContent : {
        textAlign: 'center',
        color: '#EEEEEE',
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    songArtist: {
        fontSize: 16,
        fontWeight: '300',
    },
    progressBar: {
        width: 350,
        height: 50,
        marginTop: 25,
        flexDirection: 'row',
    },
    progressLevelDurations: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLabelText: {
        color: '#fff',
        fontWeight: '500',
    },
    musicControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    },
})