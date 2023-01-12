import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const UseRefHook = () => {
  const [input, setInput] = useState('');
  const countRef = useRef(0);
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });
  return (
    <View>
      <Text>1. This is useRef Hook outPut</Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TextInput
          style={{
            backgroundColor: '#e5e5e5',
            paddingHorizontal: 30,
            borderRadius: 20,
            marginHorizontal: 5,
          }}
          value={input}
          placeholder="count with initialValue"
          onChangeText={e => setInput(e)}
        />
        <Text style={{marginTop: 15}}>Text Count:{countRef.current}</Text>
      </View>
    </View>
  );
};

export default UseRefHook;

const styles = StyleSheet.create({});
