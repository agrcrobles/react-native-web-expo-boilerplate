# React Native for Web - Stateless Boilerplate for Fiber

## Overview

I am an upgrade from [react-native-web-boilerplate](https://github.com/agrcrobles/react-native-web-boilerplate)

An minimum boilerplate to configure `react-native-web` + `react-native` with React 16 fiber!

## Prerequisites

* Node 8 LTS
* You can use yarn or npm
* react-native-cli

https://facebook.github.io/react-native/docs/getting-started.html

## Quick start
```
git clone --depth 1 https://github.com/agrcrobles/react-native-web-fiber-boilerplate.git
```

## What is on it?

 - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) on native platform
 - `babel-preset-react-native` is recommended in mobile and in web ( and it hot reloads! )
 - Jest and Flow
 - [Prettier](https://prettier.io/docs/en/install.html)

### Web HMR with webpack-dev-server
```
cd react-native-web-fiber-boilerplate
yarn
yarn web
```
Open `http://localhost:3000/`

### Desktop with electron

```
cd electron
yarn i
yarn start
```

### Android

```
react-native run-android
```

### IOS

```
react-native run-ios
```

## CONTRIBUTING

PR, stars ✭ and issue reporting, welcome!

## LICENSE

MIT
