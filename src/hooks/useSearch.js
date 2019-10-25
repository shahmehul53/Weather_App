import React, {Component, useState} from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
import axios from 'axios';
import LocationContext from '../context/LocationContext';
import LocationContext1 from '../context/LocationContext1';

const KEY = '8fb06dddec8f87';

export default () => {
  const [term, setTerm] = useState('');
  const [loader, setloader] = useState(true);
  const [content, setContent] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //const [location, setLocation] = useContext(LocationContext1);

  const searchApi = term => {
    console.log('SEarch');
    try {
      axios
        .get(
          `https://api.locationiq.com/v1/autocomplete.php?key=${KEY}&q=${term}`,
        )
        .then(res => {
          console.log('res is', res.data);
          setContent(res.data);
          setloader(false);
        });
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };

  return [searchApi, term, setTerm, content, errorMessage];
};
