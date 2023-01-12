import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const CashPayment = ({modalVisible, setModalVisible}) => {
  const total = useSelector(state => state.wishlist.cartTotalAmount);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const submitFunction = () => {
    if (!address === '') {
      Alert.alert('place order Successful');
    } else {
      Alert.alert('please enter full delivery address');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerIcon}>
        <FontAwesome
          name="shopping-basket"
          size={140}
          color={Colors.darkPlaceHoldColor}
        />
      </View>
      <Text style={{padding: 10, color: 'black'}}>
        {' '}
        Total payment : {total}
      </Text>
      <TextInput
        placeholderTextColor={Colors.darkPrimary}
        style={styles.inputStyle}
        placeholder="Name"
        onChangeText={() => setName(name)}
      />
      <TextInput
        placeholderTextColor={Colors.darkPrimary}
        style={styles.inputStyle}
        placeholder="Email"
        onChangeText={() => setEmail(email)}
      />
      <TextInput
        placeholderTextColor={Colors.darkPrimary}
        style={styles.inputStyle}
        placeholder="Delivery Address"
        onChangeText={() => setAddress(address)}
      />
      <TouchableOpacity>
        <Text
          onPress={() => {
            setModalVisible(false);
          }}
          style={styles.btnStyle}
        >
          Place Order
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CashPayment;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    // flex: 1,
  },
  inputStyle: {
    backgroundColor: '#ebe6fa',
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
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  eyeContainer: {
    position: 'absolute',
    marginTop: 380,
    marginLeft: 330,
  },
  containerIcon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
