import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Colors, fonts} from '../assets/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import storage, {firebase} from '@react-native-firebase/storage';

const ResentAddProduct = ({navigation}) => {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  //   if (loading) {
  //     return <ActivityIndicator />;
  //   }

  const fetchProduct = async () => {
    await firestore()
      .collection('products')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        let getData = [];
        // setLoading(true);
        querySnapshot.forEach(documentSnapshot => {
          getData.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
          console.log(
            // 'User ID: ',
            // documentSnapshot.id,
            // documentSnapshot.data(),
            getData,
          );
        });
        setGetData(getData);
        setLoading(false);
      });

    // Stop listening for updates when no longer required
    // return () => subscriber();
  };

  const handleDelete = () => {
    firestore()
      .collection('products')
      .doc(id)
      .delete()
      .get()
      .then(() => {
        Alert.alert('delete');
        console.log('User deleted!');
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity>
            <Text>
              <AntDesign
                // onPress={navigation.goBack()}
                name="arrowleft"
                color={'white'}
                size={30}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.headerText}>Resent Add Products</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text onPress={navigation.navigate('MyDrawer')}>
              <AntDesign name="menufold" color={'white'} size={30} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{marginBottom: 60}}
        data={getData}
        keyExtractor={index => index.id}
        renderItem={({item}) => {
          return (
            <ScrollView>
              <SafeAreaView>
                <View style={styles.listView}>
                  <View style={{width: '90%', padding: 10}}>
                    <Text>{item.title.title}</Text>
                    <Text>{item.category.category}</Text>
                    <Text>{item.description.description}</Text>
                    <Text>{item.price.price}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <AntDesign
                      onPress={() => {
                        //   setViewModal(true, item);
                        navigation.navigate(
                          'ViewProduct',
                          //   item.title.title,
                          //   item.category.category,
                          //   item.description.description,
                          //   item.price.price,
                          item,
                        );
                      }}
                      name="eyeo"
                      size={25}
                      color={'white'}
                    />
                    <AntDesign
                      onPress={() => {
                        navigation.navigate(
                          'AddProduct',
                          //   item.category,
                          //   item.title,
                          //   item.description,
                          //   item.price,
                          item,
                        );
                        //   setEditModal(true, item);
                      }}
                      name="edit"
                      size={25}
                      color={'white'}
                    />
                    <AntDesign
                      onPress={() => {
                        // firestore().collection('products').doc(id).delete(item);
                        Alert.alert('delete');
                        // .get();

                        // .toPromise()
                        // .then(querySnapshot => {
                        //   querySnapshot.forEach(doc => {
                        //     doc.ref.delete(item.index);
                        //   });
                        // });
                      }}
                      name="delete"
                      size={25}
                      color={'white'}
                    />
                  </View>
                </View>
              </SafeAreaView>
            </ScrollView>
          );
        }}
      />

      {/* view Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={viewModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setViewModal(!viewModal);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <View>
              <AntDesign
                name={'close'}
                size={30}
                color={'red'}
                onPress={() => setViewModal(false)}
              />
            </View>
            <Text>gliiiiiiii</Text>
            {/* <Text>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text> */}
          </View>
        </View>
      </Modal>

      {/* edit/update modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setEditModal(!editModal);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <View>
              <AntDesign
                name={'close'}
                size={30}
                color={'red'}
                onPress={() => setEditModal(false)}
              />
            </View>
            <Text>Edit/Update products</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ResentAddProduct;

const styles = StyleSheet.create({
  listView: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: 'teal',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
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
  iconContainer: {
    width: '10%',
    backgroundColor: '#AA336A',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5,
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    elevation: 12,
    borderRadius: 12,
  },
  modalView: {
    backgroundColor: Colors.shadowColorAndroidDefault,
    flex: 1,
    justifyContent: 'center',
  },
});
