import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';

const Contact = () => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: 100,
          backgroundColor: 'red',
        }}
      ></View>
      <ScrollView>
        <Text>Contact</Text>
      </ScrollView>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({});
