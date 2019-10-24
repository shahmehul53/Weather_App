import React, {useReducer} from 'react';

const LocationContext1 = React.createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'search_location':
      return {...state, lat: action.payload.lat, lon: action.payload.lon};
    default:
      return state;
  }
};

export const LocationProvider = ({children}) => {
  //const [location, setLocation] = useState({lat: 16.708457, lon: 74.168826});
  const [location, dispatch] = useReducer(locationReducer, {
    lat: 16.708457,
    lon: 74.168826,
  });

  const setLocation = ({lat, lon}) => {
    dispatch({
      type: 'search_location',
      payload: {lat, lon},
    });
  };

  return (
    <LocationContext1.Provider value={[location, setLocation]}>
      {children}
    </LocationContext1.Provider>
  );
};

export default LocationContext1;
