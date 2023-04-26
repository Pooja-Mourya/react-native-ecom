import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonText from '../CommonText';

const Additional = () => {
  return (
    <View style={{margin: 10}}>
      <CommonText
        titleText={'Additional services'}
        subTitleText={'Lorem Ipsum is simply dummy text of the industry.'}
      />
    </View>
  );
};

export default Additional;

const styles = StyleSheet.create({});
