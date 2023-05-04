import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import CommonInput from '../CommonInput';
import CommonButton from '../CommonButton';
import Colors from '../../assets/Colors';
import CommonText from '../CommonText';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tour = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      place: '',
      arrival: '',
      departure: '',
    },
  });

  const onSubmit = async (data, props) => {
    const {place, arrival, departure} = props;
    let forStore = {place, arrival, departure};
    let myData = [data, forStore];
    await AsyncStorage.setItem('@storage_Key', JSON.stringify(myData));
  };

  //   const getData = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem('@storage_Key');

  //       console.log('get value', jsonValue);

  //       return jsonValue != null ? JSON.parse(jsonValue) : null;
  //     } catch (e) {
  //       // error reading value
  //       console.log('error', e);
  //     }
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <View style={{margin: 10}}>
      <CommonText
        titleText={'Find a Tour'}
        subTitleText={'Where would you like to go'}
      />
      <View>
        <CommonInput
          control={control}
          name="place"
          rules={{required: true}}
          placeholder="place"
          label="place"
          mode="flat"
        />
        {errors.place && <Text>This is required.</Text>}
        <CommonInput
          control={control}
          name="arrival"
          rules={{required: true}}
          placeholder="Arrival"
          label="arrival"
          mode="flat"
        />
        {errors.arrival && <Text>This is required.</Text>}
        <CommonInput
          control={control}
          name="departure"
          rules={{required: true}}
          placeholder="departure"
          label="departure"
          mode="flat"
        />
        {errors.departure && <Text>This is required.</Text>}
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
    </View>
  );
};

export default Tour;

const styles = StyleSheet.create({});
