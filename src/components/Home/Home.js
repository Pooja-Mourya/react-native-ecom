// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import axios from 'axios';
// import {useSelector, useDispatch} from 'react-redux/es/exports';
// import {addStoreProduct} from '../../redux/StoreProductSlice';

// const Home = () => {
//   const myProduct = useSelector(state => state.storeProduct);
//   const dispatch = useDispatch();
//   console.log('first', myProduct);
//   useEffect(() => {
//     const getAPIData = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products/1');
//         // setData(response)
//         console.log(response);
//         // dispatch(addStoreProduct());
//       } catch (error) {
//         console.log('error', error);
//       }
//     };

//     getAPIData();
//   }, []);
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// };

// export default Home;

import React from 'react';
import {Button, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {decrement, increment} from './src/redux/';
import {decrement, increment} from '../../redux/CounterSlice';

const Home = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button title="Increment value" onPress={() => dispatch(increment())} />
        <Text>{count}</Text>
        <Button title="Decrement value" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default Home;
