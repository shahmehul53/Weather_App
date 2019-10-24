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
import {LocationProvider} from './src/context/LocationContext1';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import {ThemeProvider} from './src/context/ThemeContext';
import ThemeScreen from './src/screens/ThemeScreen';
import {ThemeContextProvider} from './src/core/themeProvider';

import SplashScreen from './src/screens/SplashScreen';

const navigator = createStackNavigator({
  Splash: SplashScreen,
  First: FirstScreen,
  Second: SecondScreen,
  GeoLocation: GeoLocationScreen,
  SearchCity: SearchCityScreen,
  Setting: SettingsScreen,
  SearchResults: SearchResultsScreen,
  ThemeSetting: ThemeScreen,
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <ThemeContextProvider>
      <LocationProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LocationProvider>
    </ThemeContextProvider>
  );
};

const styles = StyleSheet.create({});
