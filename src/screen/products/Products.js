import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ApiMethods from '../../axiosMethod/ApiMethods';
import Constants from '../../axiosMethod/Constants';
import {useSelector} from 'react-redux';
import {Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Products = ({navigation}) => {
  let userToken = useSelector(state => state?.user?.user?.token);
  //   console.log('userToken', userToken);

  const [listData, setListData] = useState([]);
  const fetchData = async () => {
    let url = Constants.endPoint.productList;
    try {
      const result = await ApiMethods.postData(url, null, userToken);
      console.log(' list result', JSON.stringify(result?.data?.payload));
      setListData(result?.data?.payload);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log('listData', listData);
  return (
    <>
      <Button title="add" onPress={() => navigation.navigate('AddProducts')} />
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
      >
        <View>
          <Text>Products</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={listData}
          keyExtractor={ide => ide.id}
          renderItem={({item}) => {
            return (
              <View
                style={{margin: 10, flex: 1, flexDirection: 'row', padding: 10}}
              >
                <Text>{item.name}</Text>
                <AntDesign name="edit" size={20} color={'cyan'} />
                <View style={{width: 10}}></View>
                <AntDesign name="delete" size={20} color={'tomato'} />
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({});
