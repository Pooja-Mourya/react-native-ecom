import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import ApiMethods from '../../axiosMethod/ApiMethods';
import Constants from '../../axiosMethod/Constants';
import axios from 'axios';

const CreateUser = props => {
  let userToken = useSelector(state => state.user.user.token);

  let {route, navigation} = props;
  let update = route.params;

  //   console.log('update', update);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [account_balance, setAccount_balance] = useState('');
  const [gender, setGender] = useState('');
  const [role_id, setRole_id] = useState('');

  const onSubmitAxios = async () => {
    let body = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      mobile: mobile,
      gender: gender,
      address: address,
      account_balance: account_balance,
      role_id: role_id,
    };

    let url = Constants.endPoint.userManagement;
    const res = await ApiMethods.postData(url, body, userToken);
    console.log('res', res);
  };
  const UpdateSubmit = async () => {
    let body = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      mobile: mobile,
      gender: gender,
      address: address,
      account_balance: account_balance,
      role_id: role_id,
    };
    let url = Constants.endPoint.userManagement + '/' + update.id;

    const res = await ApiMethods.putData(url, body, userToken);
    // console.log('res', res);
    // console.log('url update', url);
    // console.log('body', body);
    if (res) {
      props.navigation.navigate('UserList');
    }
  };

  useEffect(() => {
    if (update) {
      setName(update.name);
      setEmail(update.email);
      setMobile('' + update.mobile);
      setAddress(update.address);
      setGender(update.gender);
      setAccount_balance('' + update.account_balance);
      setRole_id('' + update.role_id);
    }
  }, []);
  return (
    <ScrollView style={{backgroundColor: '', margin: 10, padding: 10}}>
      <View>
        <TextInput
          placeholder="name"
          value={name}
          onChangeText={b => {
            setName(b);
          }}
        />
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={p => setEmail(p)}
        />
        {!update ? (
          <View>
            <TextInput
              placeholder="password"
              value={password}
              onChangeText={q => setPassword(q)}
            />
            <TextInput
              placeholder="password_confirmation"
              value={password_confirmation}
              onChangeText={c => setPassword_confirmation(c)}
            />
          </View>
        ) : null}

        <TextInput
          placeholder="mobile"
          value={mobile}
          onChangeText={u => setMobile(u)}
        />
        <TextInput
          placeholder="address"
          value={address}
          onChangeText={p => setAddress(p)}
        />
        <TextInput
          placeholder="gender"
          value={gender}
          onChangeText={p => setGender(p)}
        />
        <TextInput
          placeholder="account_balance"
          value={account_balance}
          onChangeText={p => setAccount_balance(p)}
        />
        <TextInput
          placeholder="role id"
          value={role_id}
          onChangeText={p => setRole_id(p)}
        />
      </View>
      {!update ? (
        <Button title="Submit" onPress={onSubmitAxios} />
      ) : (
        <Button title="Update" onPress={() => UpdateSubmit(id)} />
      )}
      <View></View>
    </ScrollView>
  );
};

export default CreateUser;

const styles = StyleSheet.create({});
