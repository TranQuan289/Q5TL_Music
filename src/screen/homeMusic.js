import React, {useState, useContext, version} from 'react';
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
import Colors from '../assets/utils/Color';
import {AlbumsContext} from './AlbumProvider';

const HomeMusic = ({navigation}) => {
  const context = useContext(AlbumsContext);
  const [heart, setHeart] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleTapconveration = album => {
    navigation.navigate('PlayMusic', {album});
  };

  // const handleFavorite = album => {
  //   navigation.navigate('FavoriteMusic', {album});
  // };
  const filterName1 = () => {
    const filterName = context.albums.filter(item => {
      if (searchText === ' ') {
        return item;
      } else if (item.name === searchText) {
        return item;
      }
    });
    context.setAlbums(filterName);
    setSearchText('');
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
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
            <SafeAreaView>
              <TextInput
                style={styles.input}
                value={searchText}
                placeholder="Tìm kiếm..."
                placeholderTextColor="white"
                type="input"
                onKeyPress={e => {
                  if (e.key === 'enter') {
                    search();
                  }
                }}
                onChangeText={text => setSearchText(text)}
              />
            </SafeAreaView>
            <View>
              <AntDesign
                name="search1"
                onPress={filterName1}
                style={{
                  color: '#B0B0B1',
                  fontSize: 20,
                  padding: 10,
                  borderLeftWidth: 1,
                  borderColor: 'white',
                }}
              />
            </View>
          </View>
          <View>
            <AntDesign
              // onPress={() => {
              //   handleFavorite(album);
              // }}
              name="hearto"
              color={Colors.WHILE}
              style={{fontSize: 20}}
            />
          </View>
        </SafeAreaView>
      </View>
      <ScrollView>
        {context.albums?.map((album, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  handleTapconveration(album);
                }}>
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
                        color={Colors.RED}
                        style={{fontSize: 20}}
                      />
                    ) : (
                      <AntDesign
                        onPress={() => setHeart(!heart)}
                        name="hearto"
                        color={Colors.WHILE}
                        style={{fontSize: 20}}
                      />
                    )}
                    <Ionicons
                      name="ellipsis-vertical"
                      color={Colors.WHILE}
                      style={{fontSize: 20, marginLeft: 10}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
    width: '100%',
  },
  textMusic: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.WHILE,
    width: 200,
    marginTop: 10,
  },
  textName: {
    fontSize: 12,
    color: Colors.WHILE,
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
    borderColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  input: {
    color: 'white',
    paddingLeft: 10,
  },
});

export default HomeMusic;
