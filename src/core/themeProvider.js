import THEMES from './themes.json';
import React, {useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'THEME_ID';

export const themes = THEMES;
export const theme = THEMES[1];

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({children}) => {
  const [themeID, setThemeID] = useState();

  useEffect(() => {
    (async () => {
      const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedThemeID) {
        setThemeID(storedThemeID);
      } else {
        setThemeID(THEMES[1].key);
      }
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{themeID, setThemeID}}>
      {!!themeID ? children : null}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  // return props => {
  //     const { themes, theme } = useContext(ThemeContext);
  //     return <Component {...props} themes={themes} theme={theme} />;
  // };
  return props => {
    const {themeID, setThemeID} = useContext(ThemeContext);

    const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
    const setTheme = themeID => {
      AsyncStorage.setItem(STORAGE_KEY, themeID);
      setThemeID(themeID);
    };

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />
    );
  };
}
