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
import auth from '@react-native-firebase/auth';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
const data = [
  {label: 'Seller', value: '0'},
  {label: 'Buyer', value: '1'},
];

const RegisterUi = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const [clicked, setClicked] = useState(true);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [userType, setUserType] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const passwordEyeIcon = () => {
    setClicked(!clicked);
  };

  const handleSubscriber = async () => {
    try {
      if (email.length > 0 && password.length > 0 && password === cPassword) {
        await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            firestore().collection('registration').add({
              userType: {userType},
              email: {email},
              password: {password},
            });
          })
          .then(() => {
            setUserType('');
            setEmail('');
            setPassword('');
            setTimeout(() => {
              navigation.navigate('LoginUi');
            }, 3000);
            setSuccess('registration successful ');
            console.log('User signed');
          });
      } else {
        Alert.alert('pls enter email or password');
      }
    } catch (error) {
      console.error(error);
      setMessage(error.message);
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
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select userType' : '...'}
          searchPlaceholder="Search..."
          value={userType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setUserType(item);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          style={styles.inputStyle}
          placeholder="Confirm Password"
          value={cPassword}
          onChangeText={cPassword => setCPassword(cPassword)}
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
    marginTop: 175,
    marginLeft: 300,
    zIndex: 2,
    // marginHorizontal: 20,
  },
  containerIcon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
