import React, {Component, useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import LocationContext from '../context/LocationContext';
import LocationContext1 from '../context/LocationContext1';
import {withTheme} from '../core/themeProvider';

const KEY = '8fb06dddec8f87';

const SearchCityScreen = ({navigation, theme}) => {
  const [term, setTerm] = useState('');
  const [loader, setloader] = useState(true);
  const [content, setContent] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //const [location, setLocation] = useContext(LocationContext);
  const [location, setLocation] = useContext(LocationContext1);

  const searchApi = term => {
    console.log('SEarch');
    try {
      axios
        .get(
          `https://api.locationiq.com/v1/autocomplete.php?key=${KEY}&q=${term}`,
        )
        .then(res => {
          //setResults(res.data.list)
          console.log('res is', res.data);
          setContent(res.data);
          setloader(false);
        });
      //setResults(response.data.coord);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={[styles.locationText, {color: theme.color}]}>
        {location.lat}
      </Text>
      <Text style={[styles.locationText, {color: theme.color}]}>
        {location.lon}
      </Text>
      <FlatList
        data={content}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              //alert(item.lat)
              {
                setLocation({lat: item.lat, lon: item.lon});
                navigation.navigate('SearchResults');
              }
            }>
            <Text style={[styles.displayText, {color: theme.color}]}>
              {item.display_name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationText: {
    fontSize: 24,
    color: 'white',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  displayText: {
    fontSize: 24,
    color: 'white',
    marginHorizontal: 15,
  },
});

export default withTheme(SearchCityScreen);
