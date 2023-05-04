import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../assets/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import Clock from './Clock';
import ThreeDots from './ThreeDots';
import Entypo from 'react-native-vector-icons/Entypo';
import {Card} from 'react-native-shadow-cards';
import Alarm from './Alarm';
import ImageRotation from './ImageRotation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native';

const About = () => {
  const [threeDots, setThreeDots] = useState(false);
  const [addSome, setAddSome] = useState(false);
  const [alarmValue, setAlarmValue] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      minute: '',
      second: '',
    },
  });

  const AlarmDataList = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@Key');
      setAlarmValue(JSON.parse(storedData));
    } catch (error) {
      console.log('error parseData', error);
    }
  };

  useEffect(() => {
    AlarmDataList();
  }, []);

  // console.log('alarmValue', alarmValue);
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.primary,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}
        >
          <Text>About</Text>
          <TouchableOpacity onPress={() => setThreeDots(!threeDots)}>
            <Entypo name="dots-three-vertical" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>

        {/* <Button title="Async Data" onPress={() => AlarmDataList()} /> */}

        <Alarm alarmValue={alarmValue} />
      </View>
      <Card
        style={{
          height: 80,
          width: 80,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: Colors.primary,
          position: 'absolute',
          bottom: 30,
        }}
      >
        <TouchableOpacity onPress={() => setAddSome(!addSome)}>
          <AntDesign name="plus" size={30} color={Colors.black} />
        </TouchableOpacity>
      </Card>
      {threeDots ? <ThreeDots setThreeDots={setThreeDots} /> : null}
      {addSome ? (
        <Clock setAddSome={setAddSome} alarmValue={alarmValue} />
      ) : null}
      {/* <ImageRotation /> */}
    </>
  );
};

export default About;

const styles = StyleSheet.create({});
