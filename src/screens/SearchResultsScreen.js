import React, {Component, useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import WeatherList from '../components/WeatherList';
import {API_KEY} from '../utils/WeatherApiKey';
import LocationContext1 from '../context/LocationContext1';
import {withTheme} from '../core/themeProvider';
import WeatherDetails from '../components/WeatherDetails';

const SecondScreen = ({theme}) => {
  const initialState = {
    data: {},
    list: [],
    main: {},
    weather: [0],
  };
  const [results, setResults] = useState(initialState);
  const [location, setLocation] = useContext(LocationContext1);
  const [loader, setloader] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const weatherApi = () => {
    console.log('Hi');
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/find?lat=${location.lat}&lon=${location.lon}&cnt=10&APPID=${API_KEY}`,
        )
        .then(res => {
          setloader(false);
          setResults(res.data.list[0]);
        });
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };

  useEffect(() => {
    weatherApi();
  }, []);

  if (loader) {
    return (
      <ActivityIndicator
        size="large"
        color="#597CA2"
        style={{marginTop: 200}}
      />
    );
  } else {
    return (
      console.log(location),
      (
        <View
          style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
          <Text style={[styles.textStyle, {color: theme.color}]}>
            TEST SCREEN
          </Text>
          <TouchableOpacity>
            <WeatherDetails
              city={results.name}
              allDateTime={results.dt}
              temp={results.main.temp}
              desc={results.weather[0].description}
              tempmin={results.main.temp_min}
              tempmax={results.main.temp_max}
              icon={results.weather[0].icon}
            />
          </TouchableOpacity>
          {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
      )
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default withTheme(SecondScreen);
