/* @flow */

import React from 'react';
import { AppRegistry } from 'react-native';

import { AppContainer } from 'react-hot-loader';

import App from './src';

const renderApp = () => (
  <AppContainer>
    <App />
  </AppContainer>
);

AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => renderApp);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();

  const renderHotApp = () => (
    <AppContainer>
      <App />
    </AppContainer>
  );

  // App registration and rendering
  AppRegistry.registerComponent('ReactNativeWebBoilerplate', () => App);
}

AppRegistry.runApplication('ReactNativeWebBoilerplate', {
  rootTag: document.getElementById('root'),
});
