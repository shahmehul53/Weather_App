import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {API_KEY} from '../utils/WeatherApiKey';
import WeatherDetails from '../components/WeatherDetails';
import {withTheme} from '../core/themeProvider';

const SecondScreen = ({navigation, theme}) => {
  const initialState = {
    data: {},
    list: [],
    main: {},
    weather: [0],
    sys: {},
    wind: {},
  };
  const [result, setResult] = useState(initialState);
  const [loader, setloader] = useState(true);
  const id = navigation.getParam('id');

  console.log('id is', id);
  console.log('result is', result);

  const getResult = async id => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&APPID=${API_KEY}`,
    );
    setResult(response.data.list[0]);
    setloader(false);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (loader) {
    return (
      <ActivityIndicator
        size="large"
        color="#597CA2"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    );
  } else {
    return (
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <WeatherDetails
          city={result.name}
          allDateTime={result.dt}
          temp={result.main.temp}
          tempmin={result.main.temp_min}
          tempmax={result.main.temp_max}
          desc={result.weather[0].description}
          allDateTime={result.sys.sunrise}
          allDateTime={result.sys.sunset}
          speed={result.wind.speed}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(SecondScreen);
