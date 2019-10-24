import React, {useState, useEffect} from 'react';
import weather from '../api/weather';
import axios from 'axios';
import {API_KEY} from '../utils/WeatherApiKey';

export default () => {
  const [results, setResults] = useState([]);
  const [loader, setloader] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

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
  return [weatherApi, results, errorMessage, loader];
};
