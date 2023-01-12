import {
  Alert,
  Button,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors, fonts} from '../assets/Assets';
import Header from '../components/Layout/Header';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../redux/ProductSlice';
import {addToCartMy, removeItem} from '../redux/AddToCartSlice';
import {removeToFav} from '../redux/CartSlice';

const FavoriteUi = props => {
  const [search, setSearch] = useState('');
  const {navigation} = props;
  //   const getData = props.route.params.itemId;
  const dispatch = useDispatch();
  const FavData = useSelector(state => state.toCart.items);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header text="My Favorite" />
      <ImageBackground>
        <Image
          style={styles.wishList}
          source={{
            uri:
              'http://3.bp.blogspot.com/-BalaNVRwmhM/VoJmDzFmk0I/AAAAAAAA55I/OoVDKUax5zc/s1600/WishList-logo.gif',
          }}
        />

        <ScrollView style={{marginBottom: 50}}>
          {FavData.filter(e => e.category.toUpperCase().includes(search)).map(
            (data, index) => {
              return (
                <View key={index} style={{marginVertical: 10}}>
                  <View style={styles.imageContainer}>
                    <View style={{paddingVertical: 10}}>
                      <Image
                        source={{
                          uri: data.image,
                        }}
                        style={styles.imageStyle}
                      />
                    </View>

                    <View style={styles.dataView}>
                      <View style={{height: 110}}>
                        <Text style={styles.titleStyle}>{data.title}</Text>
                        <Text style={styles.titleStyle}>{data.category}</Text>

                        <Text style={styles.priceStyle}>{data.price}</Text>
                      </View>
                    </View>
                    <View style={{height: 120, backgroundColor: 'red'}}>
                      <TouchableOpacity
                        onPress={() => dispatch(addToCartMy(data))}
                      >
                        <Text style={styles.cardStyle}>
                          <Fontisto
                            name="shopping-basket-add"
                            size={20}
                            color={Colors.green}
                          />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            },
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default FavoriteUi;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.checkBoxOffColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 120,
    resizeMode: 'contain',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  dataView: {width: '50%', paddingVertical: 10},
  titleStyle: {fontFamily: fonts.semiBold, color: Colors.black},
  desStyle: {fontFamily: fonts.medium, color: Colors.lightBlack},
  priceStyle: {fontFamily: fonts.regular, color: Colors.black},
  deleteStyle: {
    backgroundColor: Colors.cardColor,
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 6,
  },
  cardStyle: {
    padding: 5,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '500',
    marginHorizontal: 2,
    textAlignVertical: 'center',
  },
  wishList: {
    width: '100%',
    height: 190,
    opacity: 4,
    // margin: 20,
    marginTop: 135,
    opacity: 0.2,
    position: 'absolute',
  },
});
