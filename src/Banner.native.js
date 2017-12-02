/* @flow */

import React from 'react';

import { Platform, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// // Use prebuilt version of RNVI in dist folder
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Banner = () => (
  <View style={styles.banner}>
    <Text style={styles.title}>React Native Web Boilerplate</Text>
    <Icon name="code" size={30} color="#900" />
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});
