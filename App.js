import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';

const navigator = createStackNavigator({
  First: FirstScreen,
  Second: SecondScreen
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  )
}

const styles = StyleSheet.create({});





