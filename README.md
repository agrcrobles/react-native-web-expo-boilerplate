# React Native for Web - Stateless Boilerplate for Fiber

> If looking for an statefull boilerplate instead check out [redux-form-styled-for-react-native](https://github.com/agrcrobles/redux-form-styled-for-react-native) for a cross platform app built on `redux`, `redux-form` `react-native-web` and `expo`

## Overview

I am an upgrade from [react-native-web-boilerplate](https://github.com/agrcrobles/react-native-web-boilerplate)

A **minimum** boilerplate to configure `react-native-web` + `react-native` with React 16 fiber!

## Prerequisites

* Node version 8/9
* You can use yarn or npm
* react-native-cli

More info look into the [getting started guide](https://facebook.github.io/react-native/docs/getting-started.html)

## Quick start
```bash
git clone --depth 1 https://github.com/agrcrobles/react-native-web-fiber-boilerplate.git
```

## What is on it?

 - `babel-preset-react-native` is recommended in mobile and in web ( and it hot reloads! )
 - Jest and Flow
 - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) on native platform
 - [Prettier](https://prettier.io/docs/en/install.html) as code formatter
 - [Jest](https://facebook.github.io/jest/) as the testing framework
 - [Flow](https://flow.org/) as a javascript typechecker
 - See the following [fork from @hectahertz](https://github.com/hectahertz/react-native-web-fiber-boilerplate) for testing `react-native-typography`

### Web HMR with webpack-dev-server
```bash
## run the web platform
cd react-native-web-fiber-boilerplate
yarn
yarn web
```
Open `http://localhost:3000/`

### Desktop with electron

```bash
## run the electron platform
cd electron
yarn i
yarn start
```

### Mobile

```bash
## run the android platform
react-native run-android

## run the ios platform
react-native run-ios
```

## Contributing

PR, stars ✭ and issue reporting, welcome!

## License

MIT
