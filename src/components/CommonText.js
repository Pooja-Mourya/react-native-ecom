import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../assets/Assets';
import Colors from '../assets/Colors';

const CommonText = ({titleText, subTitleText}) => {
  return (
    <View style={{marginVertical: 30}}>
      {titleText ? (
        <Text style={[styles.findText, {color: Colors.black, fontSize: 20}]}>
          {titleText}
        </Text>
      ) : null}
      {subTitleText && <Text style={styles.findText}>{subTitleText}</Text>}
    </View>
  );
};

export default CommonText;

const styles = StyleSheet.create({
  findText: {
    fontFamily: fonts.boldItalic,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 10,
    // color: Colors.black,
  },
});
