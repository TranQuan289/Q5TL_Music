/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import PlayMusic from './src/screen/playMusic';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () =>{
  return (
    <View style={styles.container}>
      <PlayMusic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
});

export default App;
