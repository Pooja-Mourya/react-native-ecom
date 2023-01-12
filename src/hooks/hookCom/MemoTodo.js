import {Button, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const MemoTodo = ({todo, addTodo}) => {
  return (
    <View>
      {todo.map((myTodo, index) => {
        return <Text key={index}>{myTodo}</Text>;
      })}
      <Button title={'add todo'} onPress={() => addTodo()} />
    </View>
  );
};

export default memo(MemoTodo);

const styles = StyleSheet.create({});
