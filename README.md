# React Native for Web - Stateless Boilerplate for Fiber

## Overview

It is an upgrade from [react-native-web-boilerplate(https://github.com/agrcrobles/react-native-web-boilerplate)

An minimum boilerplate to configure `react-native-web` + `react-native` with React 16 fiber!

## Checking flow for IOS platform

> No Errors!

## Prerequisites

* Node 8 LTS
* You can use yarn or npm
* react-native-cli

https://facebook.github.io/react-native/docs/getting-started.html

## Quick start
```
git clone --depth 1 https://github.com/agrcrobles/react-native-web-fiber-boilerplate.git
```

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

### More information

 - babel-preset: `babel-preset-react-native` is recommended in mobile and in web ( and it hot reloads! )
 - Packager: metro bundler packager is used
 - Jest
 - Prettier!

## CONTRIBUTING

PR, stars ✭ and issue reporting, welcome!

## LICENSE

MIT
