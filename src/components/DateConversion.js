import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {withTheme, theme} from '../core/themeProvider';

const DateConversion = props => {
  const dates = new Date(props.allDateTime * 1000);

  return (
    <View>
      <Text
        style={{
          color: props.theme.color,
          //color: 'black',
          padding: 10,
          fontSize: 18,
          fontWeight: '600',
        }}>
        {dates.toDateString('en-IND')}
      </Text>
    </View>
  );
};

export default withTheme(DateConversion);
