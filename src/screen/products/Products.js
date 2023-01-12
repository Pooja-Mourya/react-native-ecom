import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ApiMethods from '../../axiosMethod/ApiMethods';
import Constants from '../../axiosMethod/Constants';
import {useSelector} from 'react-redux';

const Products = () => {
  let userToken = useSelector(state => state?.user?.user?.token);
  //   console.log('userToken', userToken);

  const [listData, setListData] = useState([]);
  const fetchData = async () => {
    let url = Constants.endPoint.productList;
    try {
      const result = await ApiMethods.postData(url, null, userToken);
      //   console.log(' list result', JSON.stringify(result?.data?.payload));
      setListData(JSON.stringify(result?.data?.payload));
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log('listData', listData);
  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
