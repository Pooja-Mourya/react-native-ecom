import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {TextInput} from 'react-native-paper';
import {Colors, fonts} from '../assets/Assets';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect} from 'react';
const data = [
  {label: 'distributor', value: '0'},
  {label: 'reseller', value: '1'},
];

const Users = props => {
  const editData = props.route.params;
  console.log('editData', editData);
  const initialState = {
    userName: '',
    userType: '',
    designation: '',
    productCategory: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);
  const [isFocus, setIsFocus] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleRegistration = async () => {
    try {
      const subscriber = await firestore()
        .collection('users')
        .add({
          //   userName: state.userName,
          //   userType: state.userType,
          //   designation: state.designation,
          //   productCategory: state.productCategory,
          //   email: state.email,
          //   password: state.password,
        })
        .then(() => {
          //   return subscriber;
          setState('');
          Alert.alert('user register success ful');
          console.log('subscriber', subscriber);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpdate = () => {};
  useEffect(() => {
    setState(() => editData);
  }, []);
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
        // onPress={navigation.goBack()}
        >
          <Text>
            <AntDesign name="arrowleft" color={'white'} size={30} />
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Create User</Text>
        </View>
        <TouchableOpacity>
          <Text
          //   onPress={navigation.navigate('MyDrawer')}
          >
            <AntDesign name="menufold" color={'white'} size={30} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{margin: 10, padding: 10}}>
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="User Name"
          value={state.userName}
          onChangeText={user => setState({...state, userName: user})}
          label="userName"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
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
          placeholder={!isFocus ? 'Select user type' : '...'}
          searchPlaceholder="Search..."
          value={state.userType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setState({...state, userType: item});
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
          // style={styles.inputStyle}
          placeholder="user designation"
          value={state.designation}
          onChangeText={designation =>
            setState({...state, designation: designation})
          }
          label="designation"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="user register email"
          value={state.email}
          onChangeText={email => setState({...state, email: email})}
          label="user email"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="create password"
          value={state.password}
          onChangeText={password => setState({...state, password: password})}
          label="password"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="what product you want to sell"
          value={state.productCategory}
          onChangeText={pass => setState({...state, productCategory: pass})}
          label="product category for sell"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />

        {/* <View style={{marginTop: 215, position: 'absolute', marginLeft: 345}}>
          <Text onPress={() => setClicked(clicked)}>
            <AntDesign name="plus" size={30} color="deepskyblue" />
          </Text>
        </View> */}
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="product category 1"
          value={state.productCategory}
          onChangeText={pass => setState({...state, productCategory: pass})}
          label="product category"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />

        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="product category 2"
          value={state.productCategory}
          onChangeText={pass => setState({...state, productCategory: pass})}
          label="product category"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TextInput
          placeholderTextColor={Colors.darkPrimary}
          // style={styles.inputStyle}
          placeholder="product category 3"
          value={state.productCategory}
          onChangeText={pass => setState({...state, productCategory: pass})}
          label="product category"
          outlineColor={'blue'}
          mode={'outlined'}
          style={{marginBottom: 10}}
        />
        <TouchableOpacity>
          <Text
            style={styles.submitButton}
            onPress={() => handleRegistration()}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Users;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 10,
    // height: 20,
  },
  headerText: {
    fontFamily: fonts.regular,
    color: 'white',
    fontWeight: '600',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 47,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 12,
    fontSize: 20,
    fontFamily: fonts.boldItalic,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    borderRadius: 5,
  },
});
