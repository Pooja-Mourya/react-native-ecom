import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ApiMethods from '../axiosMethod/ApiMethods';
import {useSelector} from 'react-redux';
import Constants from '../axiosMethod/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const Screens = ({navigation}) => {
  const userToken = useSelector(state => state.user.user.token);
  const userEmail = useSelector(state => state.user.user.email);
  const logoutFunction = async () => {
    let body = {};
    let url = Constants.endPoint.logout;

    try {
      const logRes = await ApiMethods.postData(url, body, userToken);
      console.log('logRes', logRes);
      //   console.log('url', url);
      //   console.log('userToken', userToken);
      AsyncStorage.removeItem(Constants.AsyncStorageKey);
      if (logRes) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <ScrollView
      style={{flex: 1, marginHorizontal: 20, marginTop: 5, marginBottom: 20}}
    >
      {userToken ? (
        <Text style={[styles.globalText, {backgroundColor: 'deepskyblue'}]}>
          <AntDesign name="user" size={25} /> {userEmail}
        </Text>
      ) : null}

      <Text
        onPress={logoutFunction}
        style={[styles.globalText, {backgroundColor: 'tomato'}]}
      >
        Logout <AntDesign name="logout" size={15} />
      </Text>

      <Text
        style={styles.globalText}
        onPress={() => navigation.navigate('Products')}
      >
        Products List <AntDesign name="arrowright" size={18} />
      </Text>
      <Text
        style={styles.globalText}
        onPress={() => navigation.navigate('CreateUser')}
      >
        Add User <AntDesign name="arrowright" size={18} />
      </Text>
      <Text
        style={styles.globalText}
        onPress={() => navigation.navigate('AddProducts')}
      >
        Add Product <AntDesign name="arrowright" size={18} />
      </Text>
      <Text
        style={styles.globalText}
        onPress={() => navigation.navigate('AddStock')}
      >
        Add Stock <AntDesign name="arrowright" size={18} />
      </Text>
      <Text
        style={styles.globalText}
        onPress={() => navigation.navigate('StockList')}
      >
        List Stock <AntDesign name="arrowright" size={18} />
      </Text>
      <Text
        style={styles.globalText}
        onPress={() => navigation.navigate('UserList')}
      >
        User List <AntDesign name="arrowright" size={18} />
      </Text>
    </ScrollView>
  );
};

export default Screens;

const styles = StyleSheet.create({
  globalText: {
    backgroundColor: 'indigo',
    padding: 10,
    color: 'white',
    fontSize: 20,
    marginVertical: 5,
  },
});
