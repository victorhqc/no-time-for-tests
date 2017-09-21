# no-time-for-tests
Why are tests important? Focus on delivery, test later?

### About
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Introduction
Before running any command, make sure the dependencies are installed
```js
yarn
```

### Requirements
+ node >= 8
+ npm >= 5.4
+ yarn >= 1.0.0

For Mac OSX seems to be an error for running the tests.
https://github.com/react-community/create-react-native-app/issues/273

Needed to run `yarn test` in Mac OSX
```sh
brew install pkg-config
brew install watchman
```

## Slides

Run the following in the terminal
```js
yarn start
```

## Demo

To run the demo it is needed to run the client and the server. Use two terminals to do so.
### Client
```js
yarn demo
```

### Server
```js
yarn server
```
