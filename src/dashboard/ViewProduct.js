import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const ViewProduct = props => {
  const initialValue = props.route.params;
  const [viewData, setViewData] = useState(initialValue);
  const [img, setImg] = useState([]);

  const showMe = () => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        console.log('showMe', subscriber);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Text>View Product</Text>
      <Text>id:{viewData.id}</Text>
      <Text>title:{viewData.title.title}</Text>
      <Text>category:{viewData.category.category}</Text>
      <Text>description:{viewData.description.description}</Text>
      <Text>price:{viewData.price.price}</Text>
      <Image
        style={{width: 100, height: 100}}
        // source={{uri: viewData.images.images}}
        source={{
          uri:
            'https://instamobile.io/wp-content/uploads/2019/03/facebook-login-react-native-firebase-360x240.png',
        }}
      />
      <Button title="Hii" onPress={showMe()} />
    </View>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({});
