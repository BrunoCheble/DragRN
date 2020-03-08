import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

import Draggable from '~/components/Draggable';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Draggable url="https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png" />
  </ImageBackground>
);

export default Main;
