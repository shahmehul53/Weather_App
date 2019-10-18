// import React, {Component} from 'react';
// import {FlatList} from 'react-native';
// import ForecastCard from '../components/ForecastCard';
// import {API_KEY} from '../utils/WeatherApiKey';
// import Geolocation from '@react-native-community/geolocation';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: 0,
//       longitude: 0,
//       forecast: [],
//       error: '',
//     };
//   }

//   componentDidMount() {
//     // Get the user's location
//     this.getLocation();
//   }

//   getLocation() {
//     // Get the current position of the user
//     Geolocation.getCurrentPosition(
//       position => {
//         this.setState(
//           prevState => ({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           }),
//           () => {
//             this.getWeather();
//           },
//         );
//       },
//       error => this.setState({forecast: error.message}),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//   }

//   getWeather() {
//     // Construct the API url to call
//     let url =
//       'https://api.openweathermap.org/data/2.5/forecast?lat=' +
//       this.state.latitude +
//       '&lon=' +
//       this.state.longitude +
//       '&units=metric&APPID=971d3aad3083a2a5c2fce97ca8006581';

//     // Call the API, and set the state of the weather forecast
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         this.setState((prevState, props) => ({
//           forecast: data,
//         }));
//       });
//   }

//   render() {
//     return (
//       <FlatList
//         data={this.state.forecast.list}
//         style={{marginTop: 20}}
//         keyExtractor={item => item.dt_txt}
//         renderItem={({item}) => (
//           <ForecastCard
//             detail={item}
//             location={this.state.forecast.city.name}
//           />
//         )}
//       />
//     );
//   }
// }

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ForecastCard from '../components/ForecastCard';
import {API_KEY} from '../utils/WeatherApiKey';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const GeoLocationScreen = () => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
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
        //`https://api.openweathermap.org/data/2.5/forecast?lat=19.023462&lon=72.839987&APPID=${API_KEY}`,
      )
      .then(response => {
        console.log('response', response);
        console.log('list is', response.data);
        setForecast(response.data);
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
};

const styles = StyleSheet.create({});

export default GeoLocationScreen;
