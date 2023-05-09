import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonInput from '../CommonInput';
import {useForm} from 'react-hook-form';
import CommonButton from '../CommonButton';
import Colors from '../../assets/Colors';

const Label = () => {
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
  );
};

export default Label;

const styles = StyleSheet.create({});
