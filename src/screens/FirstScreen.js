import React, {Component, useEffect, useState} from 'react';
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
import useResults from '../hooks/useResults';
import WeatherList from '../components/WeatherList';
import weatherIcon from '../utils/icons';
import BackgroundImage from '../components/BackgroundImage';
import {API_KEY} from '../utils/WeatherApiKey';
import Icon from 'react-native-vector-icons/Feather';

const FirstScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const [loader, setloader] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  let colors = [
    '#123456',
    '#654321',
    '#E3AD8B',
    '#B370DA',
    '#108E9C',
    '#154192',
  ];

  const weatherApi = () => {
    console.log('Hi');
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/group?id=1277333,1264527,1259229,1275339,1273294,1269843,1275004,1255364,1270260&units=metric&APPID=${API_KEY}`,
        )
        .then(res => {
          //setResults(res.data.list)
          setloader(false);
          console.log(res);
          console.log('array', res.data);
          setResults(res.data.list);
        });
      //setResults(response.data.coord);s
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
      <View
        style={{
          flex: 1,
          backgroundColor: '#587AA1',
        }}>
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
        {/* <View style={{backgroundColor: 'transparent'}}> */}
        <FlatList
          data={results}
          //style={{opacity: 0.5}}
          ListEmptyComponent={<Text>NOTHING HERE</Text>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={{
                marginTop: 20,
                backgroundColor: colors[index % colors.length],
                opacity: 0.8,
                //backgroundColor: 'transparent',
                marginLeft: 25,
                borderRadius: 25,
                height: 330,
                width: 300,
                //borderColor: 'black',
                alignSelf: 'center',
              }}>
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
        {/* </View> */}
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

const styles = StyleSheet.create({});

export default FirstScreen;
