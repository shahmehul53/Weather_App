import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import ForecastCard from '../components/ForecastCard';
import {API_KEY} from '../utils/WeatherApiKey';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const GeoLocationScreen = () => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
  const [loader, setloader] = useState(true);
  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        console.log('posvalue', pos);
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        getWeather();
      },
      e => setError(e.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    //getWeather();
  };

  const getWeather = () => {
    console.log('inside getWEATHER');
    console.log(position.latitude, position.longitude);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&APPID=${API_KEY}`,
      )
      .then(response => {
        console.log('response', response);
        console.log('list is', response.data);
        setForecast(response.data);
        setloader(false);
        console.log('lat is', position.latitude);
      });
  };

  useEffect(
    () => {
      getPosition();
    },
    [position.latitude],
    [position.longitude],
  );
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
      <View>
        <FlatList
          data={forecast.list}
          style={{marginTop: 20}}
          keyExtractor={item => item.dt_txt}
          renderItem={({item}) => (
            <ForecastCard detail={item} location={forecast.city.name} />
          )}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default GeoLocationScreen;
