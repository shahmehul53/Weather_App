import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import TimeConversion from './TimeConversion';
import Spacer from './Spacer';
import weatherIcon from '../utils/icons';
import BackgroundImage from './BackgroundImage';

const WeatherList = ({
  city,
  temp,
  desc,
  tempmin,
  tempmax,
  allDateTime,
  icon,
}) => {
  const {container, textStyle, tempStyle, descStyle, minmaxStyle} = styles;
  //   const [icon1, setIcon] = useState(icon);

  return (
    <View style={container}>
      <Spacer>
        <Text style={textStyle}>{city}</Text>
      </Spacer>
      <TimeConversion allDateTime={allDateTime}>{allDateTime}</TimeConversion>
      <Spacer>
        <Text style={tempStyle}>{temp}&deg;C</Text>
      </Spacer>
      <Text style={descStyle}>{desc}</Text>
      <Spacer>
        <Text style={minmaxStyle}>
          {tempmin}&deg;C/{tempmax}&deg;C
        </Text>
      </Spacer>
      <Image
        style={{height: 100, width: 100}}
        source={{uri: `http://openweathermap.org/img/wn/${icon}.png`}}
      />
      {/* </BackgroundImage> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 350,
    // width: 300,
    // backgroundColor: '#67AFD0',
    // borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // //margin: 50,
    // marginLeft: 25,
  },
  textStyle: {
    //color: '#FDFFFF',
    color: 'black',
    fontSize: 30,
    //paddingTop: 20
  },
  tempStyle: {
    //color: '#FDFFFF',
    color: 'black',
    justifyContent: 'center',
    //alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    //paddingVertical: 20
  },
  descStyle: {
    //paddingTop: 10,
    //color: '#FDFFFF',
    color: 'black',
    fontSize: 30,
  },
  minmaxStyle: {
    //color: '#FDFFFF',
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    // paddingVertical: 10
  },
});

export default WeatherList;
