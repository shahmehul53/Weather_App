import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import DateConversion from './DateConversion';
import Spacer from './Spacer';
import weatherIcon from '../utils/icons';
import BackgroundImage from './BackgroundImage';
import {withTheme} from '../core/themeProvider';

const WeatherList = ({
  city,
  temp,
  desc,
  tempmin,
  tempmax,
  allDateTime,
  icon,
  theme,
}) => {
  const {
    container,
    textStyle,
    tempStyle,
    descStyle,
    minmaxStyle,
    imgStyle,
  } = styles;

  return (
    <View style={container}>
      <Text style={[textStyle, {color: theme.color}]}>{city}</Text>
      <DateConversion allDateTime={allDateTime}>{allDateTime}</DateConversion>
      <View style={{flexDirection: 'row'}}>
        <Text style={[tempStyle, {color: theme.color}]}>
          {Math.round(temp)}
        </Text>
        <Text
          style={[
            {fontSize: 24, paddingTop: 13, fontWeight: 'bold'},
            {color: theme.color},
          ]}>
          &deg;C
        </Text>
      </View>
      <Text style={[descStyle, {color: theme.color}]}>{desc}</Text>
      <Text style={[minmaxStyle, {color: theme.color}]}>
        {Math.round(tempmin)}&deg;C/{Math.round(tempmax)}&deg;C
      </Text>
      <Image
        style={imgStyle}
        source={{uri: `http://openweathermap.org/img/wn/${icon}.png`}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  tempStyle: {
    fontSize: 60,
  },
  descStyle: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  minmaxStyle: {
    fontSize: 16,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  imgStyle: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
});

export default withTheme(WeatherList);
