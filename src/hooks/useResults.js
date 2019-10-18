import React, {useState, useEffect} from 'react';
import weather from '../api/weather';
import axios from 'axios';
import {API_KEY} from '../utils/WeatherApiKey';

export default () => {
  const [results, setResults] = useState([]);
  const [weather1, setWeather] = useState([]);
  const [temp1, setTemp] = useState('');
  const [loader, setloader] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const weatherApi = () => {
    console.log('Hi');
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&APPID=971d3aad3083a2a5c2fce97ca8006581`,
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

// const resultReducer = (state,action) => {
//     switch(action.type) {
//         case 'cities_view':
//         return {...state, data: action.payload};

//         case 'error_message':
//         return {...state, errorMessage: " " }

//         return state;
//     }

//     const weatherApi = dispatch => () => {
//         try {
//              axios.get(`http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=${API_KEY}`,
//             ).then(res => {
//                 dispatch({type: 'cities_view', payload: res.data})
//             })
//         } catch(err){
//             dispatch({ type: 'add_error', payload: "Something Went Wrong"})
//         }
//     }

//     export const
