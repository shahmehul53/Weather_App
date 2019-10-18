import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Icon name="md-search" size={30} style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search Your City"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    //backgroundColor: '#F0EEEE',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
