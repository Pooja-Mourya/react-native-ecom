import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, fonts} from '../assets/Assets';
import SocialIcon from '../components/Layout/SocialIcon';
import {useDispatch, useSelector} from 'react-redux';
import {findUserShowDetail} from '../redux/LoginFirbaseSlice';

import {
  addToCartMy,
  removeAll,
  removeItem,
  removeFromCart,
  getTotals,
} from '../redux/AddToCartSlice';

const MyTabCart = ({navigation}) => {
  const dispatch = useDispatch();
  const tabCart = useSelector(state => state.wishlist.wishlist);
  const count = useSelector(state => state.wishlist.cartTotalQuantity);
  const total = useSelector(state => state.wishlist.cartTotalAmount);
  const auth = useSelector(state => state.loginAuth);

  useEffect(() => {
    dispatch(getTotals());
  }, [total]);
  return (
    <>
      <SocialIcon />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.myCartText}>My Cart</Text>
        <TouchableOpacity onPress={() => dispatch(removeAll())}>
          <Text style={styles.myCartText}>
            <AntDesign name="delete" size={35} />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{marginBottom: 60}}>
        <View>
          {tabCart.map((item, index) => {
            return (
              <View key={index}>
                {/* <ScrollView> */}
                <View style={styles.imageContainer}>
                  <View style={{paddingVertical: 10}}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={styles.imageStyle}
                    />
                  </View>
                  <View style={styles.itemView}>
                    <View style={{height: 110}}>
                      <Text style={styles.titleStyle}>{item.title}</Text>

                      <Text style={styles.desStyle}>{item.category}</Text>
                      <Text style={styles.priceStyle}>
                        Price : ₹ {item.price}
                      </Text>
                      <View style={styles.btnContainer}>
                        <TouchableOpacity
                          onPress={() => dispatch(removeFromCart(item))}
                        >
                          <Text>
                            <AntDesign
                              name="minuscircle"
                              color={Colors.blue}
                              size={25}
                            />
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.countStyle}>{item?.quantity}</Text>
                        <TouchableOpacity
                          onPress={() => dispatch(addToCartMy(item))}
                        >
                          <Text>
                            <AntDesign
                              name="pluscircle"
                              color={Colors.blue}
                              size={25}
                            />
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 30,
                    }}
                  >
                    <TouchableOpacity
                      onPress={item => dispatch(removeItem(item.id))}
                    >
                      <Text style={styles.deleteView}>
                        <AntDesign
                          name="delete"
                          size={20}
                          color={Colors.secondary}
                        />
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('HomeUi')}
                    >
                      <Text style={styles.homeText}>
                        <Fontisto name="home" size={20} color={Colors.green} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* </ScrollView> */}
              </View>
            );
          })}
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
      <View style={styles.paymentContainer}>
        <Text style={styles.totalStyle}>Total : ₹ {total.toFixed(2)} </Text>
        <TouchableOpacity
          onPress={() => {
            if (auth) {
              navigation.navigate('MakePayment');
            } else {
              navigation.navigate('RegisterUi');
            }
          }}
          //   onPress={() => navigation.navigate('MakePayment')}
          style={styles.makePayment}
        >
          <Text style={{color: Colors.white}}>
            <MaterialCommunityIcons
              name={'cards'}
              color={Colors.white}
              size={25}
            />
            Make Payment
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MyTabCart;

const styles = StyleSheet.create({
  myCartText: {
    padding: 20,
    fontFamily: fonts.medium,
    fontSize: 25,
    color: Colors.black,
    fontWeight: '700',
  },
  imageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.backgroundGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  imageStyle: {
    width: 120,
    height: 120,
    // borderTopLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  itemView: {width: '50%', padding: 10},
  titleStyle: {
    fontFamily: fonts.semiBold,
    color: Colors.black,
    height: 40,
    backgroundColor: 'white',
  },
  desStyle: {fontFamily: fonts.medium, color: Colors.lightBlack},
  priceStyle: {fontFamily: fonts.regular, color: Colors.black},
  deleteView: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginBottom: 10,
    marginHorizontal: 3,
  },
  homeText: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 3,
  },
  btnContainer: {flexDirection: 'row', paddingVertical: 10},
  countStyle: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.black,
  },
  paymentContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundGray,
    // height: 100,
    width: '100%',
    justifyContent: 'space-between',
    padding: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // position: 'absolute',
    // marginTop: 570,
  },
  totalStyle: {fontFamily: fonts.bold, fontSize: 16, fontWeight: '700'},
  makePayment: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 3,
    height: 40,
  },
  //   wishList: {
  //     width: 350,
  //     height: 190,
  //     opacity: 4,
  //     margin: 20,
  //     marginTop: 10,
  //     opacity: 0.3,
  //     position: 'absolute',
  //   },
});
