# expo + react-native-web boilerplate

Trying how expo and react-native-web play together with webpack

## Overview

A **minimum** boilerplate to configure `react-native-web` + `expo`

## Prerequisites

* Node LTS

More info look into the [getting started guide](https://facebook.github.io/react-native/docs/getting-started.html)

## Quick start
```bash
git clone --depth 1 https://github.com/agrcrobles/react-native-web-fiber-boilerplate.git
```

### On Web

* https://react-native-web-fiber-boilerplate-73ecq6jil.now.sh/

Build the bundle

```bash
npm run build
cd web/dist
python -m SimpleHTTPServer
```

Develop with webpack-dev-server

```bash
npm start
```

### On Expo

* https://expo.io/@agrcrobles/ReactNativeWebBoilerplate


## More info

 - See the following [fork from @hectahertz](https://github.com/hectahertz/react-native-web-fiber-boilerplate) for testing `react-native-typography`


## TODO

- Add HMR
- Upgrade react version to support hooks
- Add babel support for static images
- Add [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- ...

## Contributing

PR, stars ✭ and issue reporting, welcome!

## License

MIT
