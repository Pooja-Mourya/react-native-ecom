import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';

const ThreeDots = ({setThreeDots}) => {
  return (
    <View
      style={{
        alignSelf: 'flex-end',
        backgroundColor: Colors.lightPrimary,
        borderRadius: 20,
        position: 'absolute',
        marginVertical: 40,
        right: 15,
      }}
    >
      <TouchableOpacity onPress={() => setThreeDots(false)}>
        <Text style={styles.textOpacity}>Screensaver</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setThreeDots(false)}>
        <Text style={styles.textOpacity}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setThreeDots(false)}>
        <Text style={styles.textOpacity}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setThreeDots(false)}>
        <Text style={styles.textOpacity}>Send feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setThreeDots(false)}>
        <Text style={styles.textOpacity}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThreeDots;

const styles = StyleSheet.create({
  textOpacity: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});
