import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';

export default () => {
  const searchApi = () => {
    console.log('SEarch');
    try {
      axios
        .get(
          `https://api.locationiq.com/v1/autocomplete.php?key=8fb06dddec8f87&q=Empire`,
        )
        .then(res => {
          //setResults(res.data.list)
          setloader(false);
          console.log(res);
          console.log('array', res.data);
          setResults(res.data);
          setTemp(res.data.main);
          setWeather(res.data.weather[0]);
        });
      //setResults(response.data.coord);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };

  useEffect(() => {
    weatherApi();
  }, []);

  return [weatherApi, results, errorMessage, weather1, temp1, loader];
};
