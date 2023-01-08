import React from 'react';
import {Image, View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => {
  // const searchFilterFunction =(text)=>{
  //   if(text)
  //   {

  //   }
  //   else{

  //   }
  // }

  return (
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
          <TextInput
            style={styles.input}
            // onChangeText={searchFilterFunction}
            // value={number}
            placeholder="Tìm kiếm..."
          />
        </View>
        <View>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            style={{color: 'black', fontSize: 30}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default Search;
