import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {expression} from '@babel/template';

const TimeConversion = props => {
  const dates = new Date(props.allDateTime * 1000);

  return (
    <View>
      <Text
        style={{
          //color: '#FDFFFF'
          color: 'black',
        }}>
        {dates.toDateString('en-IND')}
      </Text>
    </View>
  );
};

export default TimeConversion;
