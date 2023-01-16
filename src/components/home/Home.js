import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListMusic from './ListMusic';
import Search from './Search';

const Home = () => {
  return (
    <View style={styles.container}>
      <ListMusic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
export default Home;
