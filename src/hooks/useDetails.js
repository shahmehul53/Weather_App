import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import {API_KEY} from '../utils/WeatherApiKey';
import LocationContext1 from '../context/LocationContext1';

export default ({navigation}) => {
  const initialState = {
    data: {},
    list: [],
    main: {},
    weather: [0],
  };
  const [results, setResults] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setloader] = useState(true);
  const [location, setLocation] = useContext(LocationContext1);

  console.log('id is', id);
  console.log('result is', result);

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

  return [weatherApi, results, errorMessage, loader];
};
