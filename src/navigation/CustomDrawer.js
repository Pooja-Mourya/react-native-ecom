import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Colors, fonts} from '../assets/Assets';
import {firebase} from '@react-native-firebase/firestore';

const CustomDrawer = props => {
  const user = firebase.auth().currentUser;
  if (user == 0) {
    Alert.alert('required user login');
    console.log('user drawer', user.email);
  }
  return (
    <View style={{flex: 1, backgroundColor: Colors.shadowColorAndroidDefault}}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              'https://www.nicepng.com/png/detail/8-88585_women-fashion-png-example-of-magazine-cover.png',
          }}
        />
      </View>
      <Text style={styles.peterText}>Use Name</Text>
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <View style={{backgroundColor: Colors.cardColor}}>
          <Text style={styles.shopText}>Exclusive shopping app</Text>
          <Text style={{color: Colors.black, marginLeft: 10}}>2022 - 23</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: Colors.checkBoxOffColor,
    width: '60%',
    height: 160,
    marginHorizontal: 55,
    borderRadius: 100,
  },
  imageStyle: {
    backgroundColor: Colors.checkBoxOffColor,
    width: '88%',
    height: 140,
    padding: 10,
    borderRadius: 100,
    margin: 10,
    resizeMode: 'cover',
  },
  peterText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: fonts.regular,
    fontWeight: '900',
    fontSize: 20,
    color: Colors.darkPrimary,
  },
  shopText: {
    paddingVertical: 10,
    fontFamily: fonts.medium,
    fontSize: 16,
    color: Colors.darkPrimary,
    marginHorizontal: 10,
  },
  footerStyle: {
    backgroundColor: Colors.cardColor,
    height: 0,
    position: 'absolute',
    width: '100%',
    top: 100,
  },
});
