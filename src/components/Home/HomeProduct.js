import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
import ProductCard from './ProductCart';
import axios from 'axios';

export default function HomeProduct({products, navigation}) {
  console.log('first', products);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAPIData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/1');
        // setData(response)
        console.log(response);
      } catch (error) {
        console.log('error', error);
      }
    };

    getAPIData();
  }, []);
  return (
    // <View style={styles.container}>
    //   <Text
    //     style={{
    //       fontSize: 25,
    //       color: '#333',
    //       textAlign: 'center',
    //     }}
    //   >
    //     Best Selling
    //   </Text>
    //   <View style={styles.productCard}>
    //     {products &&
    //       products.map(product => (
    //         <ProductCard
    //           key={product._id}
    //           product={product}
    //           navigation={navigation}
    //         />
    //       ))}
    //   </View>
    // </View>
    <>
      <Text>Calling data</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 - 5,
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
