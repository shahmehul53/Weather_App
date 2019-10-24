import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {themes, theme} from '../core/themeProvider';
import {withTheme} from '../core/themeProvider';

const ThemeScreen = ({theme, themes, setTheme}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => setTheme(item.key)}>
      <View
        style={[styles.itemContainer, {backgroundColor: item.backgroundColor}]}>
        <Text style={[styles.itemText, {color: item.color}]}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <Text style={[styles.headLine, {color: theme.backgroundColor}]}>
          Choose Your Theme:
        </Text>
      }
      data={themes}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headLine: {
    marginTop: 20,
    marginVertical: 20,
    fontWeight: '200',
    fontSize: 24,
    marginHorizontal: 20,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontWeight: 'bold',
  },
});

export default withTheme(ThemeScreen);
