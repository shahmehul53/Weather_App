import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {withTheme, theme} from '../core/themeProvider';

const TimeConversion = props => {
  const dates = new Date(props.allDateTime * 1000);
  const hours = dates.getHours();
  const minutes = '0' + dates.getMinutes();

  return (
    <View>
      <Text
        style={{
          color: props.theme.color,
          //color: 'black',
          margin: 10,
          fontSize: 18,
          fontWeight: '600',
        }}>
        {props.text}: {hours}:{minutes.substr(-2)} {props.annotation}
      </Text>
    </View>
  );
};

export default withTheme(TimeConversion);
