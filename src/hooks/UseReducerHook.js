import React, {useReducer} from 'react';
import {Text, View} from 'react-native';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    case 'reset':
      return 0;
    default:
      throw new Error('Unexpected action');
  }
};

const useReducerHook = () => {
  // Initialising useReducer hook
  const [count, setCount] = useReducer(reducer, initialState);
  return (
    <>
      <Text style={{marginVertical: 10}}>2. This is useReducer Hook </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 8}}>{count}</Text>
        <Text
          style={{
            marginTop: 5,
            backgroundColor: 'tomato',
            textAlign: 'center',
            marginHorizontal: 10,
            padding: 5,
          }}
          onPress={() => setCount('add')}
        >
          add
        </Text>
        <Text
          style={{
            marginTop: 5,
            backgroundColor: 'tomato',
            textAlign: 'center',
            marginHorizontal: 10,
            padding: 5,
          }}
          onPress={() => setCount('subtract')}
        >
          subtract
        </Text>
        <Text
          style={{
            marginTop: 5,
            backgroundColor: 'tomato',
            textAlign: 'center',
            marginHorizontal: 10,
            padding: 5,
          }}
          onPress={() => setCount('reset')}
        >
          reset
        </Text>
      </View>
    </>
  );
};

export default useReducerHook;
