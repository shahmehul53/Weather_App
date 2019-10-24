import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import useResults from '../hooks/useResults';
import WeatherList from '../components/WeatherList';
import Icon from 'react-native-vector-icons/Feather';

const FirstScreen = ({navigation, theme}) => {
  const [weatherApi, results, errorMessage, loader] = useResults();

  let colors = [
    '#123456',
    '#654321',
    '#E3AD8B',
    '#B370DA',
    '#108E9C',
    '#154192',
  ];

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
      <View style={[styles.container, {backgroundColor: theme}]}>
        <View
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
            source={require('../utils/images/weather1.jpg')}
          />
        </View>
        <FlatList
          data={results}
          //pagingEnabled
          ListEmptyComponent={<Text>NOTHING HERE</Text>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.list,
                {backgroundColor: colors[index % colors.length]},
              ]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Second', {id: item.id})}>
                <WeatherList
                  city={item.name}
                  allDateTime={item.dt}
                  temp={item.main.temp}
                  desc={item.weather[0].description}
                  tempmin={item.main.temp_min}
                  tempmax={item.main.temp_max}
                  icon={item.weather[0].icon}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.name}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>
    );
  }
};

FirstScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Icon name="settings" size={30} style={{marginRight: 10}} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
    opacity: 0.8,
    marginLeft: 25,
    borderRadius: 25,
    height: 350,
    width: 300,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignSelf: 'center',
  },
});

export default FirstScreen;
