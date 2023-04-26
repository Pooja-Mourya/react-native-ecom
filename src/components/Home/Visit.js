import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonText from '../../components/CommonText';
import CommonButton from '../CommonButton';
import Colors from '../../assets/Colors';
import axios from 'axios';

const Visit = () => {
  const fetchImageApi = () => {};
  return (
    <View style={{margin: 10}}>
      <CommonText
        titleText={'Top place to visit'}
        subTitleText={'Lorem Ipsum is simply dummy text of the industry.'}
      />

      <Text style={[styles.text, {fontSize: 30, paddingVertical: 10}]}>
        15% off
      </Text>
      <Text style={styles.text}>for Family Tour</Text>
      <CommonButton buttontext={'See Our Price'} />
    </View>
  );
};

export default Visit;

const styles = StyleSheet.create({
  text: {
    color: Colors.darkSecondary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
