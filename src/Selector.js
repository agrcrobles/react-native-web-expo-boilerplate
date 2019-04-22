import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, PanResponder } from 'react-native';

const supportedLanguages = [
  {
    key: 'ar',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2000px-Flag_of_Argentina.svg.png',
  },
  {
    key: 'ru',
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/200px-Flag_of_Russia.svg.png',
  },
];

export default class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      activeIndex: 0,
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          // dy: this.state.pan.y
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        const { dx } = gesture;
        Animated.spring(this.state.pan, {
          toValue: 0,
        }).start();

        if (dx > 0) {
          if (supportedLanguages.length === this.state.activeIndex + 1) {
            this.setState({
              activeIndex: 0,
            });
          } else {
            this.setState({
              activeIndex: this.state.activeIndex + 1,
            });
          }
        } else {
          if (this.state.activeIndex === 0) {
            this.setState({
              activeIndex: supportedLanguages.length - 1,
            });
          } else {
            this.setState({
              activeIndex: this.state.activeIndex - 1,
            });
          }
        }
      },
    });
  }

  renderImage(language, i) {
    if (i === this.state.activeIndex) {
      return (
        <Image
          key={this.state.activeIndex}
          style={styles.image}
          source={{ uri: language.uri }}
        />
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout()]}
        >
          {supportedLanguages.map((des, i) => this.renderImage(des, i))}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  image: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 100,
    height: 100,
  },
});
