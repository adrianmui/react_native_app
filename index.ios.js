/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Todo } from './src/app/todo';
import { Reddit } from './src/app/Reddit';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

let react_native_app = () => (
  <Provider store={store}>
    <Todo/>
  </Provider>
  // <Reddit/>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('react_native_app', () => react_native_app);