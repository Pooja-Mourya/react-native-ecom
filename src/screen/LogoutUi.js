import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, fonts} from '../assets/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth, {firebase} from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';

const LogoutUi = ({navigation}) => {
  //   const user = useSelector(state => state.loginAuth.loginUser);
  //   console.log('user', user);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [errorSMS, setErrorSMS] = useState('');
  const [userEmail, setUserEmail] = useState([]);

  //   const user1 = firebase.auth().currentUser;
  //   if (user1) {
  //     console.log('User email: ', user1.email, user1.userType);
  //     // return setUserEmail(user1.email);
  //   }
  return (
    <View style={{flex: 1}}>
      <View style={styles.btnContainer}>
        <Text style={styles.chooseBtn} onPress={() => setModal(true)}>
          logout Me
        </Text>
        <View></View>
        <Text style={styles.backHome}>
          <AntDesign name="arrowleft" size={20} /> BAck to Home Screen
        </Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: message
                ? Colors.shadowColorAndroidPrimary
                : null,
            }}
          >
            <Text style={{color: 'green', fontSize: 18, padding: 15}}>
              {message && <Text>{message}</Text>}
            </Text>
          </View>

          <View style={styles.viewContainer}>
            <Text style={styles.wishStyle}> Do you want to Logout</Text>
            <Text style={styles.secWishStyle}> from Your Account</Text>
            <View style={styles.chooseBtnContainer}>
              <TouchableOpacity>
                <Text
                  style={styles.chooseBtn}
                  onPress={async () => {
                    try {
                      await auth()
                        .signOut()
                        .then(() => {
                          console.log('User signed out!');
                          setMessage('Logout Successfully');
                          setTimeout(() => {
                            navigation.navigate('FirstScreen');
                          }, 3000);
                        });
                    } catch (error) {
                      console.log('ThatError', error);
                      setErrorSMS(error.message);
                    }
                  }}
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={styles.chooseBtn}
                  onPress={() => {
                    navigation.navigate('HomeUi');
                  }}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
            <Text>
              {errorSMS && (
                <Text
                  style={{
                    color: 'red',
                    backgroundColor: Colors.lightGray,
                    fontSize: 16,
                    // flex: 1,
                  }}
                >
                  {errorSMS}
                </Text>
              )}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LogoutUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundGray,
  },
  chooseBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chooseBtn: {
    backgroundColor: Colors.cardColor,
    padding: 10,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '400',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    width: 130,
    marginTop: 30,
  },
  viewContainer: {
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    padding: 30,
    borderRadius: 20,
    elevation: 10,
  },
  wishStyle: {
    fontFamily: fonts.bold,
    fontWeight: '700',
    fontSize: 20,
    color: Colors.darkPrimary,
  },
  secWishStyle: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: Colors.extraDarkPrimary,
  },
  logoutMe: {
    marginHorizontal: 145,
  },
  btnContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  backHome: {
    fontSize: 18,
    color: Colors.cardColor,
    fontFamily: fonts.mediumItalic,
  },
});
