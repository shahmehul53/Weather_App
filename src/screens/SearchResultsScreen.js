import React, {Component, useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import axios from 'axios';

import WeatherList from '../components/WeatherList';
import weatherIcon from '../utils/icons';
import {API_KEY} from '../utils/WeatherApiKey';
import Icon from 'react-native-vector-icons/Feather';
import useResults from '../hooks/useResults';
import LocationContext from '../context/LocationContext';

const SearchResultsScreen = ({navigation}) => {
  // const [
  //   weatherApi,
  //   results,
  //   errorMessage,
  //   weather1,
  //   temp1,
  //   loader,
  // ] = useResults();
  const [results, setResults] = useState([]);
  const [location, setLocation] = useContext(LocationContext);
  const [loader, setloader] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [weather1, setWeather] = useState([]);
  const [temp1, setTemp] = useState('');

  const weatherApi = () => {
    console.log('Hi');
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/find?lat=${location.lat}&lon=${location.lon}&cnt=10&APPID=${API_KEY}`,
        )
        .then(res => {
          //setResults(res.data.list)
          setloader(false);
          console.log(res);
          console.log('array', res.data.list[0].main);
          setResults(res.data.list[0]);
          setTemp(res.data.list[0].main);
          setWeather(res.data.list[0].weather[0]);
        });
      //setResults(response.data.coord);
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
          style={{
            flex: 1,
            backgroundColor: '#587AA1',
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Image
              style={{
                flex: 1,
                flexDirection: 'column',
                width: null,
                height: null,
                backgroundColor: 'transparent',
                justifyContent: 'center',
              }}
              source={require('../utils/images/weather1.jpg')}
            />
          </View>
          <TouchableOpacity>
            <WeatherList
              city={results.name}
              allDateTime={results.dt}
              temp={temp1.temp}
              desc={weather1.description}
              tempmin={temp1.temp_min}
              tempmax={temp1.temp_max}
              icon={weather1.icon}
            />
          </TouchableOpacity>
          {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
      )
    );
  }
};

const styles = StyleSheet.create({});

export default SearchResultsScreen;
