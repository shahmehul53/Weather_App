import React, {Component, useContext} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem} from 'react-native-elements';
import ThemeContext from '../context/ThemeContext';

const SettingsListButton = ({title, onPress}) => {
  const [theme, toggle, dark] = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
        <Icon
          name="chevron-right"
          size={25}
          color="#1e90ff"
          style={{margin: 10}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'red',
    height: 61,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    justifyContent: 'flex-start',
    margin: 10,
  },
});

export default SettingsListButton;
