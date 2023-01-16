import { Image, StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import  Slider  from "@react-native-community/slider"
import Colors from '../assets/utils/Color'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { TRACKS } from '../components/testMusic'
import Video from 'react-native-video'

const CLIENT_ID = '35944a520f8c43cdb73fad9b6909da4e';
const CLIENT_SECRET = '778535db4d7a43e18f149aefeb1a3223';

export default function PlayMusic({route,navigation}) {
    const {album} = route.params
    console.log(album)
    const [selectTrack,setSelectTrack]=useState(0)
    const currentTrack= TRACKS[selectTrack]
    const [pause,setPause] = useState(false)
    const [song,setSong] =useState(false)

    const togglePlayPauseBtn = () =>{
        setPause(!pause)
    }

    const playNextSong = () => {
        if(selectTrack === TRACKS.length-1){
            setSelectTrack(0)
        } else {
            setSelectTrack(selectTrack +1)
        }
    }
    const playPrevSong = () =>{
        if(selectTrack === 0){
            setSelectTrack(TRACKS.length -1)
        } else {
            setSelectTrack(selectTrack -1)
        }
    }
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
                <Image source={{uri: album.images[0].url}}
                    style={styles.imageMusic}
                />
            </View>
            {/* song content */}
            <View>
                <Text style={[styles.songContent,styles.songTitle]}>{album.name}</Text>
                <Text style={[styles.songContent,styles.songArtist]}>{album.release_date}</Text>
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
                <Text style={styles.progressLabelText}>00:30</Text>
                <Text style={styles.progressLabelText}>04:00</Text>
            </View>

            {/* music controls */}
            <View style={styles.controls}>
                <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center'}} onPress={()=>{}}>
                    <Fontisto name="random" size={15} color={Colors.WHILE} />
                </TouchableOpacity>
                <View style={styles.musicControlsContainer}>
                
                    <TouchableOpacity onPress={()=>{playPrevSong(),setSong(!song)}}>
                        <Ionicons name="play-skip-back-outline" size={35} color="#ffd369" />
                    </TouchableOpacity>

                    {pause? 
                        <TouchableOpacity onPress={()=>{togglePlayPauseBtn()}}>
                            <Ionicons name="ios-play-circle" size={75} color="#ffd369" />
                        </TouchableOpacity>
                    :
                        <TouchableOpacity onPress={()=>{togglePlayPauseBtn()}}>
                            <Ionicons name="ios-pause-circle" size={75} color="#ffd369" />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={()=>{playNextSong(),setSong(!song)}}>
                        <Ionicons name="play-skip-forward-outline" size={35} color="#ffd369" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{}}>
                    <Feather name="repeat" size={20} color={Colors.WHILE} />
                </TouchableOpacity>
            </View>
            <Video source={song? require('../assets/images/song1.mp3'):require('../assets/images/song2.mp3')} audioOnly paused={pause}/>
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