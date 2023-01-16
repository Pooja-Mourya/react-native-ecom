import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Constants from '../../axiosMethod/Constants';
import ApiMethods from '../../axiosMethod/ApiMethods';

const StockList = () => {
  let userToken = useSelector(state => state?.user?.user?.token);

  const [listData, setListData] = useState([]);

  const list = async () => {
    let url = Constants.endPoint.stockList;
    try {
      const res = await ApiMethods.postData(url, null, userToken);
      console.log('StockList', res);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    list();
  }, []);
  return (
    <View>
      <Text>StockList</Text>
    </View>
  );
};

export default StockList;

const styles = StyleSheet.create({});
