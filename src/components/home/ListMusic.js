import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const ListMusic = () => {
  const [heart, setHeart] = useState(false);
  const [accessToken, setAccessToken] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchInput, setSearchInput] = useState('Taylor Swirt', 'MERO');

  const navigation = useNavigation();

  const handleTapconveration = index => {
    navigation.navigate('PlayList', albums, index);
  };

  useEffect(() => {
    axios
      .get('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // API access token

    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        process.env.CLIENT_ID +
        '&client_secret=' +
        process.env.CLIENT_SECRET,
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => {
        console.log(data.access_token);
        setAccessToken(data.access_token);
      })
      .catch(err => console.error(err));
    async function search() {
      console.log('Search for ' + searchInput);

      // Get request using search to get the Artist ID
      const searchParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      };

      //
      const artistID = await fetch(
        'https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist',
        searchParameters,
      )
        .then(response => response.json())
        .then(data => {
          {
            console.log(data.artists.items[0].id);
            return data.artists.items[0].id;
          }
        })
        .catch(err => console.log(err));
      console.log(' Atrist ID is ' + artistID);
      // Get request with artist Id grad all the albums from that artist

      const returnAlbums = await fetch(
        'https://api.spotify.com/v1/artists/' +
          artistID +
          '/albums' +
          '?include_groups=album&market=US&limit=50',
        searchParameters,
      )
        .then(response => response.json())
        .then(data => {
          console.log(data.items);
          setAlbums(data.items);
        })
        .catch(err => console.log(err));
    }
    search();
  }, []);
  // SEARCH
  console.log(albums);
  return (
    <>
      <View style={{marginTop: 10}}>
        <SafeAreaView style={styles.safeAreaView}>
          <View>
            <Image
              style={{
                height: 35,
                width: 35,
                resizeMode: 'cover',
                borderRadius: 50,
              }}
              source={{
                uri: 'https://i1.sndcdn.com/artworks-000102769935-nkultb-t500x500.jpg',
              }}
            />
          </View>
          <View style={styles.wrapperInput}>
            <AntDesign
              onPress={() => setHeart(!heart)}
              name="search1"
              style={{color: '#B0B0B1', fontSize: 20, marginLeft: 10}}
            />
            <SafeAreaView>
              <TextInput
                style={styles.input}
                // onChangeText={searchFilterFunction}
                // value={number}
                placeholder="Tìm kiếm..."
                type="input"
                onKeyPress={e => {
                  if (e.key === 'enter') {
                    search();
                  }
                }}
                // onChangeText={text => setSearchInput(text)}
              />
            </SafeAreaView>
          </View>
          <View>
            <MaterialCommunityIcons
              name="bell-ring-outline"
              style={{color: 'black', fontSize: 30}}
            />
          </View>
          <Button
            onPress={() => {
              search();
            }}
            title="Search"
          />
        </SafeAreaView>
      </View>
      <ScrollView>
        {albums.map((album, index) => {
          return (
            <View key={index}>
              <TouchableOpacity onPress={handleTapconveration(index)}>
                <View style={styles.rootView}>
                  <View style={styles.image}>
                    <Image
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'cover',
                      }}
                      source={{uri: album.images[0].url}}
                    />
                  </View>
                  <View style={styles.wrapperText}>
                    <Text style={styles.textMusic}>{album.name}</Text>
                    <Text style={styles.textName}>{album.release_date}</Text>
                  </View>
                  <View style={styles.icon}>
                    {heart ? (
                      <AntDesign
                        onPress={() => setHeart(!heart)}
                        name="heart"
                        style={{color: 'red', fontSize: 20}}
                      />
                    ) : (
                      <AntDesign
                        onPress={() => setHeart(!heart)}
                        name="hearto"
                        style={{color: 'black', fontSize: 20}}
                      />
                    )}
                    <Ionicons
                      name="ellipsis-vertical"
                      style={{color: 'black', fontSize: 20, marginLeft: 10}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 10,
  },
  image: {
    borderRadius: 10,
    height: 70,
    width: 70,
    overflow: 'hidden',
  },
  wrapperText: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
  },
  textMusic: {
    fontSize: 18,
    fontWeight: '600',
  },
  textName: {
    fontSize: 12,
  },
  textTime: {
    marginTop: 5,
    fontSize: 10,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  safeAreaView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  wrapperInput: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    color: 'black',
  },
});

export default ListMusic;
