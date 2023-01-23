import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Input,
  StyleSheet,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Modal} from 'react-native';
import moment from 'moment';

export default function ReactHookForm() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [inputDay, setInputDay] = useState('');
  const [inputMonth, setInputMonth] = useState('');
  const [inputYear, setInputYear] = useState('');

  const onChangeDate = selectDate => {
    const currentDate = selectDate
      ? new Date(selectDate.nativeEvent.timestamp)
      : date;
    console.log('currentDate', currentDate);

    setShow(false);
    setDate(currentDate);

    // let tempDate = new Date();
    const inputDate =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear();

    console.log('inputDate', inputDate);
    setText(inputDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  //   const dateFormate = moment(date).format('LLL');
  //   console.log('dateFormate', dateFormate);
  return (
    <>
      <Button title="date" onPress={() => showMode('date')} />

      <TextInput
        placeholder="date"
        onChangeText={t => setInputDay(t)}
        value={inputDay}
      />
      <TextInput
        placeholder="date"
        onChangeText={t => setInputMonth(t)}
        value={inputMonth}
      />
      <TextInput
        placeholder="date"
        onChangeText={t => setInputYear(t)}
        value={inputYear}
      />
      <Text>{text}</Text>
      <Text>{text - 20}</Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          mode={mode}
          value={new Date()}
          onChange={d => onChangeDate(d)}
          display="default"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
