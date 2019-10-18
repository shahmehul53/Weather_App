import React, {Component, useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import {API_KEY} from '../utils/WeatherApiKey';
import LocationContext from '../context/LocationContext';

const SearchCityScreen = () => {
  const [term, setTerm] = useState('');
  const [content, setContent] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [location, setLocation] = useContext(LocationContext);

  const searchApi = term => {
    console.log('SEarch');
    try {
      axios
        .get(
          `https://api.locationiq.com/v1/autocomplete.php?key=8fb06dddec8f87&q=${term}`,
        )
        .then(res => {
          //setResults(res.data.list)
          console.log('res is', res.data);
          setContent(res.data);
        });
      //setResults(response.data.coord);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };

  // useEffect(() => {
  //   searchApi(term);
  // }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <View
        style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
        <Image
          style={{
            flex: 1,
            flexDirection: 'column',
            width: null,
            height: null,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
          source={require('../utils/images/searchimg.jpg')}
        />
      </View> */}
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={{fontSize: 24, color: 'white'}}>{location.lat}</Text>
      <FlatList
        data={content}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              //alert(item.lat)
              setLocation(location => ({
                ...location,
                lat: item.lat,
                lon: item.lon,
              }))
            }>
            <Text style={{fontSize: 24, color: 'white'}}>
              {item.display_name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchCityScreen;
