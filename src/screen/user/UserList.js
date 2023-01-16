import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Constants from '../../axiosMethod/Constants';
import ApiMethods from '../../axiosMethod/ApiMethods';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserList = ({navigation}) => {
  let userToken = useSelector(state => state?.user?.user?.token);

  const [listData, setListData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const list = async () => {
    let url = Constants.endPoint.userList;
    try {
      const res = await ApiMethods.postData(url, null, userToken);
      //   console.log('User ---- List', res?.data?.payload);
      setListData(res?.data?.payload);
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteList = async id => {
    let url = Constants.endPoint.userManagement + '/' + id;

    try {
      const dlt = await ApiMethods.deleteData(url, userToken);
      console.log('url dlt', url);
      console.log('dlt', dlt);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    list();
  }, []);
  return (
    <View>
      <FlatList
        data={listData}
        keyExtractor={ide => ide.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                margin: 10,
                flex: 1,
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-evenly',
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <AntDesign
                name="edit"
                size={20}
                color={'indigo'}
                onPress={() => navigation.navigate('CreateUser', item)}
              />
              <View style={{width: 10}}></View>
              <AntDesign
                name="delete"
                size={20}
                color={'tomato'}
                onPress={() => deleteList(item.id)}
              />
            </View>
          );
        }}
        refreshControl={<RefreshControl />}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
