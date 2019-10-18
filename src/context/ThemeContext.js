import React, {useState, useEffect} from 'react';

const themes = {
  dark: {
    backgroundColor: 'darkblue',
    //color: 'aqua',
  },
  light: {
    backgroundColor: 'aqua',
    //color: 'darkblue',
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  //   toggle: () => {},
};

const ThemeContext = React.createContext();

export const ThemeProvider = props => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
    console.log(dark);
  };

  const theme = dark
    ? themes.dark.backgroundColor
    : themes.light.backgroundColor;
  //const theme = 'TEST';
  return (
    <ThemeContext.Provider value={[theme, dark, toggle]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
