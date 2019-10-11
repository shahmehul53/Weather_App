import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { expression } from '@babel/template';

const TimeConversion = (props) => {
    console.log(props)
    const dates = new Date(props.allDateTime * 1000)
    console.log("dates", dates)
    
    return(
        <View>
            <Text style={{color: '#FDFFFF'}}>{dates.toDateString('en-IND')}</Text>
        </View>
    );
};

export default TimeConversion;