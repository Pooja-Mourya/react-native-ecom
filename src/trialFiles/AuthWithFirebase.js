import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Button, Text, View, TextInput} from 'react-native';

const AuthWithFirebase = () => {
  const [name, setName] = useState([]);
  const [age, setAge] = useState(0);
  //   const subscriber = firestore()
  //     .collection('auth')
  //     .doc('ZMUVUsFNKaudL6HVcPKN')
  //     .onSnapshot(documentSnapshot => {
  //       console.log('User data: ', documentSnapshot.data());
  //     });
  const subscriber = firestore()
    .collection('auth')
    .add({
      name: {name},
      age: {age},
    })
    .then(() => {
      console.log('User added!');
    });

  //   useEffect(() => {
  //     subscriber();
  //   }, []);

  // Stop listening for updates when no longer required

  return (
    <View>
      <Text>Success</Text>
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Button title="subscribe" onPress={text => subscriber()} />
    </View>
  );
};

export default AuthWithFirebase;
