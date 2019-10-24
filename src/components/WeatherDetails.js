import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TimeConversion from './TimeConversion';
import DateConversion from './DateConversion';
import {withTheme, theme} from '../core/themeProvider';

const WeatherDetails = ({
  city,
  allDateTime,
  temp,
  tempmin,
  tempmax,
  desc,
  speed,
  theme,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.ciytTextStyle, {color: theme.color}]}>{city}</Text>
      <DateConversion allDateTime={allDateTime}>{allDateTime}</DateConversion>

      <Text
        adjustsFontSizeToFit={true}
        style={[styles.tempTextStyle, {color: theme.color}]}>
        {Math.round(temp)}&deg;C
      </Text>
      <Text style={[styles.desc, {color: theme.color}]}>{desc}</Text>
      <Text style={[styles.maxTempStyle, {color: theme.color}]}>
        Min Temp: {Math.round(tempmin)}&deg;C
      </Text>
      <Text style={[styles.maxTempStyle, {color: theme.color}]}>
        Max Temp: {Math.round(tempmax)}&deg;C
      </Text>

      <TimeConversion allDateTime={allDateTime} text="Sunrise" annotation="AM">
        {allDateTime}
      </TimeConversion>
      <TimeConversion allDateTime={allDateTime} text="Sunset" annotation="PM">
        {allDateTime}
      </TimeConversion>
      <Text style={[styles.speedText, {color: theme.color}]}>
        Wind speed: {speed} km/hr
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ciytTextStyle: {
    marginTop: 25,
    marginBottom: 5,
    fontSize: 40,
    fontWeight: 'bold',
  },
  tempTextStyle: {
    fontSize: 60,
    marginTop: 10,
    marginBottom: 5,
  },
  maxTempStyle: {
    fontWeight: '600',
    margin: 10,
    fontSize: 18,
  },
  desc: {
    fontWeight: '600',
    marginBottom: 10,
    fontSize: 30,
    paddingHorizontal: 20,
  },
  speedText: {
    margin: 10,
    fontWeight: '600',
    fontSize: 18,
  },
});

export default withTheme(WeatherDetails);
