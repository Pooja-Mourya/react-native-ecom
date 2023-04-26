import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableHighlight} from 'react-native';
import Colors from '../assets/Colors';

const CommonButton = ({buttontext, buttonStyle, labelStyle, onPress}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={Colors.darkSecondary}
      onPress={() => onPress}
      style={[
        {
          backgroundColor: Colors.darkPrimary,
          padding: 10,
          margin: 10,
        },
        buttonStyle,
      ]}
    >
      <Text
        style={[
          {
            color: Colors.white,
            fontSize: 20,
            textAlign: 'center',
          },
          labelStyle,
        ]}
      >
        {buttontext}
      </Text>
    </TouchableHighlight>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
