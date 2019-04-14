import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Selector from './src/Selector';
class App extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text style={styles.body1White}>tarnau.net</Text>
        </View>
        <Text style={[styles.title]}>Rate and enjoy!</Text>
        <Selector />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  body1White: {
    color: 'white',
  },
  Container: {
    flex: 1,
  },
  Header: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: '#263238',
  },
  title: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: '#B0BEC5',
  },
});
