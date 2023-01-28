import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const RegisterUi = ({navigation}) => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [cPassword, setCPassword] = useState('');

  const [clicked, setClicked] = useState(true);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const [state, setState] = useState({
    email: '',
    password: '',
    cPassword: '',
  });

  const handleOnchange = (name, value) => {
    setState({...state, [name]: value});
  };
  const passwordEyeIcon = () => {
    setClicked(!clicked);
  };

  console.log('first', ...state);
  const handleSubscriber = async () => {
    const headers = {
      contentType: 'application/json',
    };

    const config = {
      headers: headers,
    };
    try {
      await axios({
        method: 'post',
        url: 'http://10.0.2.2:3002/signupAndroid',
        data: {
          email: state.email,
          password: state.cPassword,
          password: state.password,
        },
        config,
      });
      console.log('signup ok ');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerIcon}>
        <FontAwesome
          name="shopping-basket"
          size={150}
          color={Colors.darkPlaceHoldColor}
        />
      </View>
      {!success && (
        <Text
          style={{
            color: 'green',
            padding: 8,
            fontSize: 14,
            backgroundColor: success ? Colors.ultraLightPrimary : null,
            marginBottom: 10,
            borderRadius: 5,
            height: 50,
          }}
        >
          {success}
        </Text>
      )}
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          elevation: 12,
          borderRadius: 12,
        }}
      >
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          style={styles.inputStyle}
          placeholder="Email"
          value={state.email}
          onChangeText={e => handleOnchange('email', e)}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          style={styles.inputStyle}
          placeholder="Password"
          value={state.password}
          onChangeText={p => handleOnchange('password', p)}
          secureTextEntry={true}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          style={styles.inputStyle}
          placeholder="Confirm Password"
          value={state.cPassword}
          onChangeText={c => handleOnchange('cPassword', c)}
          secureTextEntry={clicked}
        />
        <View style={styles.eyeContainer}>
          <Text>
            <FontAwesome
              onPress={passwordEyeIcon}
              color={Colors.extraDarkPrimary}
              size={30}
              name={!clicked ? 'eye' : 'eye-slash'}
            />
          </Text>
        </View>
        <TouchableOpacity>
          <Text onPress={() => handleSubscriber()} style={styles.btnStyle}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 5, marginTop: 10}}>
        <Text style={{color: 'red'}}>{message}</Text>
      </View>

      <View>
        <Text
          onPress={() => navigation.navigate('LoginUi')}
          style={styles.btnStyle}
        >
          if are you register user Sign In
        </Text>
        {/* <Text
          style={styles.btnStyle}
          onPress={() => navigation.navigate('HomeUi')}
        >
          without signUp shopping
        </Text> */}
      </View>
      {/* <View>
        <Text onPress={() => navigation.navigate('Users')}>
          <AntDesign name="arrowleft" /> Create Account as a seller
        </Text>
      </View> */}
    </ScrollView>
  );
};

export default RegisterUi;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  inputStyle: {
    backgroundColor: Colors.backgroundGray,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  btnStyle: {
    backgroundColor: Colors.cardColor,
    padding: 10,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '400',
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  eyeContainer: {
    position: 'absolute',
    marginTop: 143,
    marginLeft: 300,
    zIndex: 2,
    // marginHorizontal: 20,
  },
  containerIcon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
