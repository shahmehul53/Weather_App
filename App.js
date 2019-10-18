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
import GeoLocationScreen from './src/screens/GeoLocationScreen';
import SearchCityScreen from './src/screens/SearchCityScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import {LocationProvider} from './src/context/LocationContext';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import {ThemeProvider} from './src/context/ThemeContext';

const navigator = createStackNavigator({
  First: FirstScreen,
  Second: SecondScreen,
  GeoLocation: GeoLocationScreen,
  SearchCity: SearchCityScreen,
  Setting: SettingsScreen,
  SearchResults: SearchResultsScreen,
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <LocationProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocationProvider>
  );
};

const styles = StyleSheet.create({});
