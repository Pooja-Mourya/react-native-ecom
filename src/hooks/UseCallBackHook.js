import {View, Text, Button, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';
import MemoTodo from './hookCom/MemoTodo';

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  //   const addTodo = () => {
  //     {
  //       setTodo([...input, todo]);
  //       setInput('');
  //     }
  //   };
  const addTodo = useCallback(() => {
    setTodo([...todo, input]);
    setInput('');
  });

  return (
    <>
      <Text style={{marginVertical: 10}}>3. This is UseCallBack Hook</Text>
      <TextInput
        value={input}
        style={{
          backgroundColor: '#e5e5e5',
          width: '70%',
          marginTop: -5,
        }}
        placeholder="add new todo"
        onChangeText={i => setInput(i)}
      />
      <View style={{flexDirection: 'row'}}>
        <MemoTodo todo={todo} addTodo={() => addTodo()} />
        <Text>{input}</Text>
      </View>

      <View style={{flexDirection: 'row', margin: 20}}>
        <Text>{count}</Text>
        <Text onPress={() => increment()}>➕</Text>
      </View>
    </>
  );
};

export default UseCallBackHook;
