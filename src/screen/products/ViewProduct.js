import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import ApiMethods from '../../axiosMethod/ApiMethods';
import Constants from '../../axiosMethod/Constants';
import {useSelector} from 'react-redux';

const ViewProduct = () => {
  let userToken = useSelector(state => state?.user?.user?.token);
  console.log('userToken', userToken);
  //   return;
  const fetchData = async () => {
    let url = `${Constants.endPoint.product}/92`;
    try {
      const result = await ApiMethods.getData(url, userToken);
      console.log('result', result);
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <Text>ViewProduct</Text>
    </View>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({});
