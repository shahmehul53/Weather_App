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

const FirstScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const [loader, setloader] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  let colors = [
    '#123456',
    '#654321',
    '#E3AD8B',
    '#67AFD0',
    '#A8CDC9',
    '#F19273',
  ];

  const weatherApi = () => {
    console.log('Hi');
    try {
      axios
        .get(
          'http://api.openweathermap.org/data/2.5/group?id=1277333,1264527,1259229,1275339,1273294,1266285&units=metric&APPID=971d3aad3083a2a5c2fce97ca8006581',
        )
        .then(res => {
          //setResults(res.data.list)
          setloader(false);
          console.log(res);
          console.log('array', res.data.list);
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
        {/* <BackgroundImage
          source={{
            uri: 'https://facebook.github.io/react-native/img/header_logo.png',
          }}> */}
        <FlatList
          data={results}
          ListEmptyComponent={<Text>NOTHING HERE</Text>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {/* <ImageBackground
                style={{width: 300, height: 350}}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/img/tiny_logo.png',
                }}
              /> */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Second', {id: item.id})}>
                <View
                  style={{
                    backgroundColor: colors[index % colors.length],
                    marginLeft: 25,
                    borderRadius: 25,
                    height: 350,
                    width: 300,
                  }}>
                  <WeatherList
                    city={item.name}
                    allDateTime={item.dt}
                    temp={item.main.temp}
                    desc={item.weather[0].description}
                    tempmin={item.main.temp_min}
                    tempmax={item.main.temp_max}
                    icon={item.weather[0].icon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={({item, index}) => index}
        />
        {/* </BackgroundImage> */}
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default FirstScreen;
