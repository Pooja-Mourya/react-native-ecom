import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../assets/Colors';
import {useForm, Controller} from 'react-hook-form';
import CommonInput from '../CommonInput';
import CommonButton from '../CommonButton';
import CommonText from '../CommonText';

const Subscription = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = data => console.log(data);
  return (
    <View>
      <Image
        style={{
          width: 120,
          height: 90,
          alignSelf: 'center',
          marginVertical: 20,
        }}
        source={require('../../assets/img/book.png')}
      />

      <CommonText titleText={'Subscribe to our Newsletter'} />

      <View style={{}}>
        <CommonInput
          control={control}
          name="email"
          rules={{required: true}}
          placeholder="Email"
          label="email"
          mode="flat"
        />
        <CommonButton
          buttonStyle={{
            borderWidth: 1,
            borderColor: Colors.white,
            width: '95%',
            alignSelf: 'center',
          }}
          buttontext={'Search'}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignSelf: 'center',
          width: '40%',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}
      >
        <TouchableOpacity>
          <AntDesign name="twitter" size={25} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="facebook-square" size={25} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="instagram" size={25} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="google" size={25} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({});
