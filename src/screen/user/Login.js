import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import ApiMethods from '../../axiosMethod/ApiMethods';
import Constants from '../../axiosMethod/Constants';
import {useSelector, useDispatch} from 'react-redux';
import {userLoginFun} from '../../redux/slice/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, setLoginUser] = useState('');

  const submitHandle = async () => {
    const url = Constants.endPoint.login;
    const params = {
      email: 'buyer07@gmail.com',
      password: '12345678',
    };
    try {
      const result = await ApiMethods.postData(url, params, null);
      console.log('result', result?.data);
      setLoginUser(result?.data);
      dispatch(userLoginFun(result?.data?.payload));
      if (result?.data?.payload?.token) {
        navigation.navigate('Products', result?.data?.payload);
      }
      AsyncStorage.setItem('@user', JSON.stringify(result?.data?.payload));
    } catch (error) {
      console.log('error', error);
    }
  };

  const print = async () => {
    try {
      const re = await AsyncStorage.getItem('@user');
      if (re != null || re?.payload?.token) {
        let res = JSON.parse(re);
        dispatch(userLoginFun(res));
        return res?.payload?.token;
      }
      return false;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  };
  useEffect(() => {
    // console.log('loginUser', loginUser?.payload.email);
    // print();
    if (print()) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Products',
          index: 0,
        }),
      );
    }
  }, [loginUser]);

  return (
    <View>
      <Text>Login</Text>
      <Text>{loginUser?.payload?.token}</Text>
      <TextInput
        placeholder="Email..."
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        placeholder="password..."
        value={password}
        onChangeText={e => setPassword(e)}
      />
      <Button title="Submit" onPress={submitHandle} />

      {/* <Text>user:{user}</Text> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});