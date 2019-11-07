/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {NavigatorIOS, Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BoxItem from './src/components/BoxItem';
import FormItem from './src/containers/FormItem';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const RootStack = createStackNavigator({
    Home: {screen: BoxItem},
    Add: {screen: FormItem}
  },
  {
    initialRouteName: 'Home'
  });

const AppContainer = createAppContainer(RootStack);



    export default class App extends Component {
      render() {
        return (
          <Provider store={store}>
          <AppContainer />
          </Provider>
          );
        }
      }
