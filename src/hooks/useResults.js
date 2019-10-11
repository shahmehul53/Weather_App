import React, { useState, useEffect } from 'react';
import weather from '../api/weather';
import axios from  'axios';

export default () => {
    const initialState  = {
                    datasource: {
                        coord:{},
                        main: {}
                    }}

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const weatherApi = () => {
        console.log('Hi');
        try {
            const response = axios.get('http://api.openweathermap.org/data/2.5/weather?id=1269750&APPID=971d3aad3083a2a5c2fce97ca8006581')
            // .then(results => setResults(results.data.coord))
             setResults(response.data.coord);
        }
        catch (err) {
            setErrorMessage('Something Went Wrong')
        }
    };

    useEffect(() => {
        weatherApi();
    }, []);

    return [weatherApi,results, errorMessage];
};