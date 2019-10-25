import React, {useContext} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import LocationContext1 from '../context/LocationContext1';
import {withTheme} from '../core/themeProvider';
import useSearch from '../hooks/useSearch';

const SearchCityScreen = ({navigation, theme}) => {
  const [searchApi, term, setTerm, content, errorMessage] = useSearch();

  const [location, setLocation] = useContext(LocationContext1);

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
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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
