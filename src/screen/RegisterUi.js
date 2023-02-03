import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {useForm, Controller} from 'react-hook-form';
import DocumentPicker from 'react-native-document-picker';
import DropdownCom from '../components/Dropdown';
import CommonInput from '../components/CommonInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Data = [
  {label: 'user', value: '1'},
  {label: 'admin', value: '2'},
];
const RegisterUi = ({navigation}) => {
  const [clicked, setClicked] = useState(true);
  const [avatar, setAvatar] = useState('');
  const passwordEyeIcon = () => {
    setClicked(!clicked);
  };

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

  const {control, watch, handleSubmit, onSubmit} = useForm({
    defaultValues: {
      user: '',
      email: '',
      image: '',
      password: '',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Button title="upload" onPress={() => selectImage()} />
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          elevation: 12,
          borderRadius: 12,
          justifyContent: 'center',
          marginVertical: 100,
        }}
      >
        <CommonInput
          control={control}
          name="image"
          rules={{required: true}}
          placeholder="select image"
          label="image"
          mode="flat"
          style={styles.input}
          rightIcon={
            <MaterialCommunityIcons
              onChange={() => selectImage()}
              icon="cloud-upload-outline"
              size={30}
            />
          }
        />
        {avatar ? (
          <Image
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 100,
            }}
            source={{uri: avatar?.[0]?.uri}}
          />
        ) : null}
        {avatar ? (
          <Text style={{}}>
            <AntDesign
              onPress={() => setAvatar()}
              name={'delete'}
              size={20}
              color="red"
            />
          </Text>
        ) : null}

        <Controller
          control={control}
          name="gender"
          // rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <DropdownCom
              name={'user'}
              control={control}
              rules={{required: true}}
              data={Data}
              labelField={'label'}
              valueField={`value`}
              placeholder={'select user'}
              value={value}
              onPressItem={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <CommonInput
          control={control}
          name="email"
          rules={{required: true}}
          placeholder="email"
          label="email"
          mode="flat"
          style={styles.input}
        />
        <CommonInput
          control={control}
          name="password"
          rules={{required: true}}
          placeholder="password"
          label="password"
          mode="flat"
        />
        <View style={styles.eyeContainer}>
          <Text>
            <FontAwesome
              onPress={passwordEyeIcon}
              color={Colors.extraDarkPrimary}
              size={30}
              name={!clicked ? 'eye' : 'eye-slash'}
            />
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            onPress={handleSubmit(() => console.log('first'))}
            style={styles.btnStyle}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterUi;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  inputStyle: {
    backgroundColor: Colors.backgroundGray,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  btnStyle: {
    backgroundColor: Colors.cardColor,
    padding: 10,
    color: Colors.white,
    borderRadius: 10,
    fontWeight: '400',
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  eyeContainer: {
    position: 'absolute',
    marginTop: 143,
    marginLeft: 300,
    zIndex: 2,
    // marginHorizontal: 20,
  },
  containerIcon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
