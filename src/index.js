/* @flow */

import React from 'react';

import { ScrollView, View, StatusBar } from 'react-native';

import Banner from './Banner';

class MainScreen extends React.Component<{}> {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Banner />
      </ScrollView>
    );
  }
}

export default MainScreen;
