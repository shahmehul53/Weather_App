import React, {useState} from 'react';

const LocationContext = React.createContext();

export const LocationProvider = ({children}) => {
  const [location, setLocation] = useState({lat: 16.708457, lon: 74.168826});

  return (
    <LocationContext.Provider value={[location, setLocation]}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
