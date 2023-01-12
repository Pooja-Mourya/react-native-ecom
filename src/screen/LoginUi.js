import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '502041937470-33t9snimvv7i6jroeafadgqvg02irc6r.apps.googleusercontent.com',
});

const LoginUi = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(true);
  const [message, setMessage] = useState('');
  //   const user = firebase.auth().currentUser;

  //   useEffect(() => {
  //     if (user) {
  //       console.log('User email: ', user);
  //     }
  //   }, [user]);

  const passwordEyeIcon = () => {
    setClicked(!clicked);
  };

  const submitFunction0 = () => {
    // if (!password && !email) {
    //   Alert.alert('login Successful');
    //   navigation.navigate('HomeUi');
    // } else {
    //   Alert.alert('for login enter email and password');
    // }

    const subscriber = firestore()
      .collection('registration')
      .orderBy(_email, _password)
      .get({
        email: {email},
        password: {password},
      })
      .then(() => {
        console.log('User login!');
      });

    if ((!email, !password)) {
      alert('enter correct credentials');
    } else {
      navigation.navigate('HomeUi');
    }
    return subscriber;
  };

  const submitFunction = async () => {
    if (email.length <= 0 && password.length <= 0) {
      Alert.alert('pls enter email or password');
      return;
    }
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User signed');
          setTimeout(() => {
            navigation.navigate('MyTab');
          }, 2000);
        });
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  const loginWithGoogle = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <FontAwesome
            name="shopping-basket"
            size={150}
            color={Colors.darkPlaceHoldColor}
          />
        </View>
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
          <Text onPress={() => submitFunction()} style={styles.btnStyle}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{padding: 5, marginTop: 10}}>
          <Text style={{color: 'red'}}>{message}</Text>
        </View>
        <TouchableOpacity>
          <Text
            onPress={() =>
              loginWithGoogle().then(() =>
                console.log('Signed in with Google!'),
              )
            }
            style={styles.btnStyle}
          >
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginUi;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
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
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 18,
  },
  eyeContainer: {
    // position: 'absolute',
    marginTop: -45,
    marginLeft: 330,
  },
  containerIcon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
