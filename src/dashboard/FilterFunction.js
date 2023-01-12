import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  Button,
  Alert,
  TextInput,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../redux/ProductSlice';
import {addToFav, removeToFav} from '../redux/CartSlice';
import Header from '../components/Layout/Header';
import Ionicons from 'react-native-vector-icons';
import {Colors, fonts} from '../assets/Assets';
import {collection} from './Collection';

const width = Dimensions.get('window').width;
const FilterFunction = ({navigation}) => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [priceModal, setPriceModal] = useState(false);
  const [multitude, setMultitude] = useState(collection);
  const [search, setSearch] = useState('');
  const [refresh, seRefresh] = useState(false);

  const pullMe = () => {
    seRefresh(true);
    setTimeout(() => {
      seRefresh(false);
    }, 3000);
  };

  useEffect(() => {
    setMultitude(collection);
  }, []);
  return (
    <>
      <View style={{marginTop: 5}}>
        <Header />
        <TextInput
          value={search}
          placeholder="filter by search , prise, category"
          onChangeText={lookup => setSearch(lookup)}
          style={{
            position: 'absolute',
            backgroundColor: Colors.shadowColorAndroidDefault,
            marginTop: 7,
            paddingHorizontal: 50,
            marginHorizontal: 10,
            borderRadius: 20,
            width: '95%',
            // elevation: 2
          }}
        />
      </View>

      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={{
              padding: 12,
              margin: 5,
              marginTop: 10,
              backgroundColor: 'deeppink',
              borderRadius: 15,
            }}
          >
            <Text
              style={{color: 'white'}}
              onPress={() => setCategoryModal(true)}
            >
              Filter Category Wise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 12,
              margin: 5,
              marginTop: 10,
              backgroundColor: 'deeppink',
              width: 150,
              alignSelf: 'center',
              borderRadius: 15,
            }}
          >
            <Text style={{color: 'white'}} onPress={() => setPriceModal(true)}>
              Filter Price Wise
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 200,
          }}
        >
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
            }
          >
            <FlatList
              data={
                search.length > 0
                  ? collection.filter(tell =>
                      tell.title.toLowerCase().includes(search.toLowerCase()),
                    )
                  : collection
              }
              numColumns={2}
              idExtractor={id => {
                id.id;
              }}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.collectionView} key={index}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('DetailUi', {itemId: item.id});
                      }}
                      style={styles.spaceBetween}
                    >
                      <View style={styles.imageViewContainer}>
                        <Image
                          style={styles.imageView}
                          source={{uri: item.image}}
                        />
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.categoryStyle}>{item.category}</Text>
                    <Text style={styles.titleStyle}>
                      {item.title == 25 ? item.title : item.title.slice(0, 20)}
                    </Text>
                    <Text style={styles.priceStyle}>₹ {item.price}</Text>
                  </View>
                );
              }}
              ListFooterComponent={() => {
                return (
                  <View>
                    <Text>Loading...</Text>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={categoryModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setCategoryModal(!categoryModal);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.shadowColorAndroidDefault,
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: 220,
              }}
            >
              <View>
                <Button
                  title="Product for Man"
                  onPress={() => {
                    const clear = collection.filter(
                      process => process.category == "men's clothing",
                    );
                    console.log('clear', ...clear);
                    setMultitude(clear);
                    setCategoryModal(false);
                  }}
                />
              </View>
              <View>
                <Button
                  title="Product for Women"
                  onPress={() => {
                    const good = collection.filter(
                      well => well.category == "women's clothing",
                    );
                    console.log('good', ...good);
                    setMultitude(good);
                    setCategoryModal(false);
                  }}
                />
              </View>
              <View>
                <Button
                  title="Jewelry"
                  onPress={() => {
                    const verify = collection.filter(
                      purify => purify.category == 'jewelery',
                    );
                    console.log('verify', ...verify);
                    setMultitude(verify);
                    setCategoryModal(false);
                  }}
                />
              </View>
              <View>
                <Button
                  title="Electronic Items"
                  onPress={() => {
                    const brain = collection.filter(
                      filtrate => filtrate.category == 'electronics',
                    );
                    console.log('brain', ...brain);
                    setMultitude(brain);
                    setCategoryModal(false);
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={priceModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setPriceModal(!priceModal);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.shadowColorAndroidDefault,
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: 150,
              }}
            >
              <View>
                <Button
                  title="Lower price Product 1 - 109"
                  onPress={() => {
                    const money = multitude.filter(
                      purify => purify.price >= '109',
                      collection.price,
                    );
                    setMultitude(money);
                    setPriceModal(false);
                  }}
                />
              </View>
              <View>
                <Button
                  title="Higher price Product 109 - 1000"
                  onPress={() => {
                    const more = multitude.filter(
                      pure => pure.price < '109',
                      collection.price,
                    );
                    setMultitude(more);
                    setPriceModal(false);
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default FilterFunction;
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
  container: {
    marginHorizontal: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
  AllTextStyle: {
    backgroundColor: Colors.black,
    color: Colors.white,
    fontFamily: fonts.bold,
  },
  itemView: {
    padding: 15,
    borderWidth: 1,
    marginVertical: 30,
    marginRight: 15,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: 'black',
  },
  categoryView: {
    fontFamily: fonts.regular,
    fontWeight: '600',
  },

  newCollection: {
    fontFamily: fonts.regular,
    fontWeight: '700',
    color: Colors.black,
    fontSize: 25,
    marginBottom: 20,
  },
  imageView: {
    width: width / 3,
    height: 150,
    margin: 24,
    resizeMode: 'contain',
  },
  collectionView: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageViewContainer: {
    backgroundColor: Colors.backgroundGray,
    height: 205,
    textAlign: 'center',
    borderRadius: 10,
  },
  iconStyContainer: {
    zIndex: 2,
    position: 'absolute',
    padding: 3,
    marginLeft: 135,
  },
  titleStyle: {
    fontFamily: fonts.regular,
    color: Colors.lightBlack,
  },
  priceStyle: {
    fontFamily: fonts.medium,
    color: Colors.black,
    fontSize: 14,
  },
  categoryStyle: {
    fontFamily: fonts.bold,
    fontWeight: '600',
    color: Colors.black,
    textTransform: 'capitalize',
  },
  searchContainer: {
    width: '85%',
    height: width / 9,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    paddingHorizontal: 40,
    marginHorizontal: 10,
  },
  searchIconStyle: {
    position: 'absolute',
    marginTop: 10,
    marginRight: width / 1 - 65,
  },
  menuIconStyle: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 3,
  },
  headerContainer: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: 'white',
    elevation: 12,
    padding: 10,
  },
  headerFlex: {
    flexDirection: 'row-reverse',
  },
  FlatListView: {
    marginBottom: 100,
  },
});
