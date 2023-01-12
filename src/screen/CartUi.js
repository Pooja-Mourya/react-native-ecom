import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, fonts} from '../assets/Assets';
import SocialIcon from '../components/Layout/SocialIcon';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../redux/ProductSlice';

const CartUi = ({navigation, route}) => {
  const getData = route.params.itemId;
  const dispatch = useDispatch();
  const counter = useSelector(state => state.product.value);
  const items = useSelector(state => state.product.value);

  const [data, setData] = useState([]);

  const handleDecrement = minus => {
    if ((minus = counter)) {
      dispatch(decrement());
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${getData}`)
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
  }, []);
  return (
    <>
      <View>
        <SocialIcon />
        <View style={{height: 600}}>
          <Text style={styles.myCartText}>My Cart</Text>
          <ScrollView>
            <View style={styles.imageContainer}>
              <View style={{paddingVertical: 10}}>
                <Image
                  source={{
                    uri: data.image,
                  }}
                  style={styles.imageStyle}
                />
              </View>

              <View style={styles.itemView}>
                <View style={{height: 110}}>
                  <Text style={styles.titleStyle}>{data.category}</Text>
                  <Text style={styles.desStyle}>{data.title}</Text>
                  <Text style={styles.priceStyle}>₹ {data.price}</Text>

                  <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => dispatch(increment())}>
                      <Text>
                        <AntDesign
                          name="pluscircle"
                          color={Colors.blue}
                          size={25}
                        />
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.countStyle}>{counter}</Text>
                    <TouchableOpacity onPress={() => handleDecrement()}>
                      <Text>
                        <AntDesign
                          name="minuscircle"
                          color={Colors.blue}
                          size={25}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <TouchableOpacity onPress={() => setData('')}>
                    <Text style={styles.deleteView}>
                      <AntDesign
                        name="delete"
                        size={20}
                        color={Colors.secondary}
                      />
                      Delete
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('HomeUi')}
                  >
                    <Text style={styles.homeText}>
                      <Fontisto name="home" size={20} color={Colors.green} />
                      Back to Home
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.totalStyle}>Total : {data.price * counter}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MakePayment', data)}
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
      </View>
    </>
  );
};

export default CartUi;

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
  },
  imageStyle: {width: 150, height: 200, borderRadius: 10},
  itemView: {width: '50%', paddingVertical: 10, marginRight: 10},
  titleStyle: {fontFamily: fonts.semiBold, color: Colors.black},
  desStyle: {fontFamily: fonts.medium, color: Colors.lightBlack, height: 50},
  priceStyle: {fontFamily: fonts.regular, color: Colors.black},
  deleteView: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'center',
  },
  homeText: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 3,
    textAlign: 'center',
  },
  paymentContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundGray,
    height: 200,
    width: '100%',
    justifyContent: 'space-between',
    padding: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginVertical: -50,
    elevation: 12,
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
  btnContainer: {
    flexDirection: 'row',
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  countStyle: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.black,
  },
});
