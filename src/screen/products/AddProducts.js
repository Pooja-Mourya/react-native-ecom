import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {Button} from 'react-native';
import ApiMethods from '../../axiosMethod/ApiMethods';
import Constants from '../../axiosMethod/Constants';
import {useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import {Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native';

const AddProducts = () => {
  let userToken = useSelector(state => state.user.user.token);

  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [product_description, setProduct_description] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [avatar, setAvatar] = useState('');

  const selectImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: DocumentPicker.types.images,
      });
      setAvatar(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const removeImage = () => {
    setAvatar('');
  };

  const onSubmit = async () => {
    var formData = new FormData();
    formData.append('barcode', '1234567890');
    formData.append('name', 'guava');
    formData.append('product_description', 'green guava');
    formData.append('quantity', '20');
    formData.append('category', 'fruit');
    formData.append('unit', 'kg');
    formData.append('price', '200');
    formData.append('image', avatar[0].uri);

    // console.log(formData, 'formData');

    let url = Constants.endPoint.product;
    // let body = formData;
    let body = {
      barcode: '1234567890',
      name: 'black-berry',
      product_description: 'bark color black',
      quantity: '100',
      category: 'fruit',
      unit: 'kg',
      price: '200',
      image: avatar[0].uri,
    };
    const res = await ApiMethods.ApiService(url, body, userToken);
    console.log('api response', res);
  };

  return (
    <ScrollView style={{backgroundColor: 'orange', margin: 10, padding: 10}}>
      <View>
        <TextInput
          placeholder="barcode"
          value={barcode}
          onChangeText={b => {
            setBarcode(b);
          }}
        />
        <TextInput
          placeholder="name"
          value={name}
          onChangeText={n => setName(n)}
        />
        <TextInput
          placeholder="product_description"
          value={product_description}
          onChangeText={p => setProduct_description(p)}
        />
        <TextInput
          placeholder="quantity"
          value={quantity}
          onChangeText={q => setQuantity(q)}
        />
        <TextInput
          placeholder="category"
          value={category}
          onChangeText={c => setCategory(c)}
        />
        <TextInput
          placeholder="unit"
          value={unit}
          onChangeText={u => setUnit(u)}
        />
        <TextInput
          placeholder="price"
          value={price}
          onChangeText={p => setPrice(p)}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            style={{width: 100, height: 100, borderWidth: 1}}
            source={{uri: avatar?.[0]?.uri}}
          />
        </View>

        {avatar ? (
          <Text
            style={{
              zIndex: 2,
              marginLeft: -22,
              marginTop: 2,
              backgroundColor: 'black',
            }}
          >
            <AntDesign
              onPress={removeImage}
              name={'delete'}
              size={20}
              color="red"
            />
          </Text>
        ) : null}
      </View>

      <View style={{flexDirection: 'row'}}>
        <Button title="Select" onPress={selectImage} />

        {/* <Button title="Upload" onPress={{}} /> */}
        <Button title="Submit" onPress={onSubmit} />
      </View>
      <View></View>
    </ScrollView>
  );
};

export default AddProducts;

const styles = StyleSheet.create({});
