import React, {Component, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import SettingsListButton from '../components/SettingsListButton';
import ThemeContext from '../context/ThemeContext';
import {withTheme} from '../core/themeProvider';

const SettingsScreen = ({navigation, theme}) => {
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SettingsListButton
        title="Get Current Geolocation"
        onPress={() => navigation.navigate('GeoLocation')}
      />
      <SettingsListButton
        title="Search Your City"
        onPress={() => navigation.navigate('SearchCity')}
      />
      <SettingsListButton
        title="Change the theme"
        //onPress={() => toggle()}
        onPress={() => navigation.navigate('ThemeSetting')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: theme,
  },
});

export default withTheme(SettingsScreen);
