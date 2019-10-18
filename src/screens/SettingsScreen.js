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

const SettingsScreen = ({navigation}) => {
  const [theme, dark, toggle] = useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: theme}}>
      <SettingsListButton
        title="Get Current Geolocation"
        onPress={() => navigation.navigate('GeoLocation')}
      />
      <SettingsListButton
        title="Search Your City"
        onPress={() => navigation.navigate('SearchCity')}
      />
      <SettingsListButton title="Change the theme" onPress={() => toggle()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: theme,
  },
});

export default SettingsScreen;
