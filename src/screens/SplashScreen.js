import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndiacator, Button} from 'react-native';

const SplashScreen = ({navigation}) => {
  // const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //     setLoader(true)
  // }
  // )
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Button
        title="Go to Weather Screen"
        onPress={() => navigation.navigate('First')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
