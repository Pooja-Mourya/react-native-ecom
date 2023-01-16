import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';

let token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjNkYzQzZmY1NmRiYzVhNmYyNzUyZTA3ZDIyZjA0ZjdhODliMzY2NzYwMzJlNDRiMzBiMTkxZGZiZWI4YzkxMDE4NWE0YWVkNzVjY2NlNDYiLCJpYXQiOjE2NzM1ODk5MjEuNDAxMTE3LCJuYmYiOjE2NzM1ODk5MjEuNDAxMTIsImV4cCI6MTcwNTEyNTkyMS4yMzY4MDksInN1YiI6IjEzIiwic2NvcGVzIjpbXX0.tJpRc1A9pAoL4ub2kF-RvbE_SSSNPcWRut5njaik38lxGpvNkBDFXalwO7hVIx1dJlrrEmNz9LnSTClqsDK03XV0gjomHRolY3x1_coxVy__7X2GFFC3Mg7haONt6exoPN8cu8zUDrps0dyN8wfCd_BHp90nBcmFo9IfnJkseSAMGyxFOch5BumreOcwpjfAF0MS72y-rUfpk5UuJpQUsvv5NtB4DwLxv13r1xdL7qFjkm9YRRB3g3rdBCELcxln6VPeRSoCY0GOM4T2_OADYhg_t1PrahSZaU76kuyQtLFicaa1afK0B8Ll6ael6V3fCF2gYHuwp5n8VB5gNSyFDuGwSZ2cz04tDa7Zndrih0Z9u7QQU-Z6nVRx03eOJNK87dLAXtANkj21y6ke0DrtJSvLjmXSwkmNn_zSDkoqIunaZ8nYiyFk3g8OuFQBO9wPPrTJT3Sq2LytNiuqohdH5mgfiIdKgDcXRN-eBBtQgooaPfkqQfKL5cH2grkkmrLsaFR65lhiM-oezYqlCRpocKbqStwlEk6mT8Lwg7i9R4qzhoghYDyld-igsMZ-ndvBZ4YvkEAoiGREPwRRr6YjiBuPQZVyt-udceDoZQd6I_HYfNYvj4WtPdEAMf9oep125xLjilKt-EWBDTp2UUZT4jwDQryIL6eHjkacyYzBHnk';

const JavascriptLoop = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      barcode: '',
      name: '',
      unit: '',
      category: '',
      price: '',
      quantity: '',
      product_description: '',
      image: '',
    },
  });

  const onSubmit = async data => {
    var formdata = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (key == 'unit' || key == 'category') {
        formdata.append(key, value?.label);
      } else if (key == 'image') {
        formdata.append(key, value);
      } else {
        formdata.append(key, value);
      }
    }
    console.log(formdata, 'formdata');

    try {
      let headersObj = {
        headers: {
          Accept: '/',
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + token,
        },
      };

      let url = 'http://192.168.1.34:8000/api/product';
      let res = await axios.post(url, formdata, headersObj);

      console.log(res, 'api response');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  //image picker
  const pickImage = async () => {
    try {
      const response = await DocumentPicker?.pickSingle({
        type: [DocumentPicker.types.images],
      });
      console.log('seting images', response);
      setImage(response?.name);
      setValue('image', response);
    } catch (error) {
      setImage(null);

      Alert.alert(
        DocumentPicker.isCancel(error)
          ? 'Canceled'
          : 'Unknown Error: ' + JSON.stringify(error),
      );
    }
  };

  return (
    <View>
      <Button title="select" onPress={{pickImage}} />
    </View>
  );
};

export default JavascriptLoop;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  // for Modal style
  modalView: {
    backgroundColor: 'black',
    height: '100%',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
  nn: {
    color: 'black',
  },
  rr: {
    color: 'gray',
  },
});
