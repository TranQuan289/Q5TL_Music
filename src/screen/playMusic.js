import { Image, StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import  Slider  from "@react-native-community/slider"
import Colors from '../assets/utils/Color'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function PlayMusic({route,navigation}) {
    const  song= route.params

  return (
    <ScrollView style={styles.scrollView}>
        {/* button back */}
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                <Ionicons name="chevron-back" size={35} color="#ffd369" />
            </TouchableOpacity>
            <Text style={styles.headerText}>PLAYING FROM ALBUM</Text>
            <Ionicons name="ios-ellipsis-vertical-circle" size={30} color={Colors.primary} />
        </View>
        <View style={styles.container}>
            {/* image */}
            <View style={[styles.imageWrapper,styles.elavation]}>
                <Image source={song.artwork}
                    style={styles.imageMusic}
                />
            </View>
            {/* song content */}
            <View>
                <Text style={[styles.songContent,styles.songTitle]}>{song.title}</Text>
                <Text style={[styles.songContent,styles.songArtist]}>{song.artist}</Text>
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
            <View style={styles.controls}>
                <TouchableOpacity onPress={()=>{}}>
                    <Fontisto name="random" size={20} color={Colors.WHILE} />
                </TouchableOpacity>
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
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="repeat" size={35} color={Colors.WHILE} />
                </TouchableOpacity>
            </View>
            <View style={styles.lyrics}>
                <Text style={styles.lyricsText}>Lyrics:</Text>
                <ScrollView style={{flex:1,marginBottom:10}} nestedScrollEnabled={true}>
                    <Text style={styles.lyricsContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec eget magna quis neque posuere venenatis. Etiam venenatis 
                        accumsan metus a lacinia. Quisque posuere lacus at tellus gravida mollis. 
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur 
                        ridiculus mus. Etiam vitae turpis ante. Nam dolor neque, finibus vitae 
                        dictum at, consequat at nunc. Quisque ornare erat et felis congue consectetur. 
                        Pellentesque egestas mi sapien, posuere pulvinar turpis fringilla dignissim. 
                        Mauris fermentum tincidunt eleifend. Vivamus eros nunc, ullamcorper non rutrum ut, 
                        porta quis enim. Aliquam molestie nunc id nisl cursus tristique. Pellentesque 
                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Cras dolor eros, sollicitudin quis scelerisque ut, vehicula quis magna
                    </Text>
                </ScrollView>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        flex:1,
        backgroundColor: '#222831',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 50,
    },
    header:{
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerText:{
        color:Colors.WHILE,
        fontSize:18,
    },
    imageWrapper:{
        width: 350,
        height: 350,
        marginBottom: 50,
    },
    imageMusic: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        marginTop:50,
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
        fontSize: 22,
        fontWeight: '600',
        marginTop:50,
    },
    songArtist: {
        fontSize: 16,
        fontWeight: '300',
    },
    progressBar: {
        width: 350,
        height: 10,
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
    controls:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:340,
        marginTop:20
    },
    musicControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        // marginTop: 20,
    },
    lyrics: {
        width:'90%',
        height:400,
        marginTop:20,
        backgroundColor:'#8C6A3C',
        borderRadius:20,   
    },
    lyricsText: {
        margin:10,
        fontSize:20,
        color:Colors.WHILE,
        fontWeight:'500'
    },
    lyricsContent: {
        margin:10,
        fontSize:25,
        color:Colors.BLACK,
        fontWeight:'500'
    },
})