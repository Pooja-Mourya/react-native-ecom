import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CommonInput from '../../component/CommonInput';
import {TextInput, Checkbox, RadioButton} from 'react-native-paper';
import CommonDropDown from '../../component/CommonDropDown';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MultiSelectDrop from '../../component/MultiSelectDrop';
import moment from 'moment';

const Data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Other', value: '3'},
];

const myHobbies = [
  {label: 'playing', value: '1'},
  {label: 'planting', value: '2'},
  {label: 'reading', value: '3'},
  {label: 'cycling', value: '4'},
  {label: 'running', value: '5'},
  {label: 'design', value: '6'},
];

export default function FormHook() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      firstName: 'firstName',
      lastName: 'lastName',
      gender: 'gender',
      date: 'date',
      student: checked ? 'yes' : 'no',
      userPhoto: 'userPhoto',
      address: 'address',
      age: 'age',
      checkbox: 'checkbox',
      hobbies: [],
    },
  });

  const onSubmit = data => {
    data.firstName, data.lastName, data?.gender?.Data?.label, data?.date;
    data?.student?.checked, data?.hobbies?.myHobbies?.label;
    if (data) {
      setRetrieveModal(true);
    }
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

  const handleDateSelect = selectDate => {
    var currentDate = new Date();
    if (selectDate.nativeEvent.timestamp)
      currentDate = new Date(selectDate.nativeEvent.timestamp);

    const inputDate =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear();

    // const myAge =
    //   new Date().getDate() -
    //   currentDate.getDate() +
    //   '/' +
    //   new Date().getMonth() -
    //   (currentDate.getMonth() + 1) +
    //   '/' +
    //   new Date().getFullYear() -
    //   currentDate.getFullYear();

    // console.log('day', new Date().getDate() - currentDate.getDate());
    // console.log('month', new Date().getMonth() - (currentDate.getMonth() + 1));
    // console.log('year', new Date().getFullYear() - currentDate.getFullYear());

    var year = new Date().getFullYear() - currentDate.getFullYear();

    var month = new Date().getMonth() - (currentDate.getMonth() + 1);

    var day = new Date().getDate() - currentDate.getDate();

    setValue('date', inputDate);
    // setDatePrint(inputDate);
    setAgePrint(year + month + day);
  };

  const [dateModal, setDateModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [checkedBox, setCheckedBox] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [retrieveModal, setRetrieveModal] = useState(false);
  //   const [datePrint, setDatePrint] = useState('');
  const [agePrint, setAgePrint] = useState(0);

  //   const today = moment(new Date()).format('D/M/YYYY');
  console.log('dfhd', agePrint);
  return (
    <>
      {/* <Text>{watch('date')}</Text>
      <Text>{agePrint}</Text> */}
      <ScrollView style={styles.container}>
        {/* gender selector dropdown */}
        <Controller
          control={control}
          name="gender"
          // rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <CommonDropDown
              data={Data}
              labelField={'label'}
              valueField={`value`}
              placeholder={'select gender'}
              onPressItem={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.gender && (
          <Text
            style={{
              color: 'red',
              alignSelf: 'stretch',
              marginHorizontal: 15,
            }}
          >
            please select gender.
          </Text>
        )}
        <Controller
          control={control}
          name="hobbies"
          render={({field: {onChange, onBlur, value}}) => (
            <MultiSelectDrop
              data={myHobbies}
              labelField={'label'}
              valueField={`value`}
              placeholder={'select hobbies'}
              onPressItem={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {/* {errors.hobbies && (
          <Text
            style={{
              color: 'red',
              alignSelf: 'stretch',
              marginHorizontal: 15,
            }}
          >
            please select gender.
          </Text>
        )} */}
        {/* firstName textInput  */}
        <CommonInput
          control={control}
          name="firstName"
          rules={{required: true}}
          placeholder="firstName"
          label="firstName"
          mode="flat"
          style={styles.input}
        />
        {/* lastName textInput */}
        <CommonInput
          name={'lastName'}
          control={control}
          rules={{required: true}}
          placeholder="lastName"
          label="lastName"
          mode="flat"
          style={styles.input}
        />

        {/* for date */}
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '60%'}}>
            <CommonInput
              name={'date'}
              control={control}
              rules={{required: true}}
              placeholder="D.O.B."
              label="date of birth"
              mode="flat"
              rightIcon={
                <TextInput.Icon
                  onPress={() => setDateModal(!dateModal ? true : false)}
                  icon="calendar-range"
                />
              }
            />
          </View>
          <View
            style={{
              width: '30%',
              backgroundColor: 'teal',
              margin: 10,
              marginTop: 7,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginTop: 11,
                color: 'white',
              }}
            >
              {agePrint} year
            </Text>
          </View>
        </View>
        {/* yes or no radio button  */}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, onTouched}}) => (
            <View style={styles.radioButtonStyle}>
              <Text style={{alignItems: 'center', fontSize: 16, padding: 5}}>
                Are you Student :- Ans {checked ? 'Yes' : 'No'}
              </Text>
              <RadioButton
                value="student"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  onChange;
                  setChecked(!checked);
                  setValue('student');
                }}
                onBlur={onBlur}
                // onTouched={onTouched}
              />
            </View>
          )}
          name="student"
        />

        {/* candidate photo selector */}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: avatar ? 'space-evenly' : 'space-between',
                }}
              >
                <View>
                  <Button
                    title="Select Image"
                    onPress={() => {
                      onChange();
                      selectImage();
                    }}
                    onBlur={onBlur}
                  />
                </View>
                {avatar ? (
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderWidth: 1,
                      borderRadius: 100,
                    }}
                    source={{uri: avatar?.[0]?.uri}}
                    onChangeText={onChange}
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
              </View>
            </View>
          )}
          name="userPhoto"
        />

        {/* address input */}

        <CommonInput
          placeholder="address"
          label="address"
          mode="flat"
          name={'address'}
          control={control}
          rules={{required: true}}
        />

        {/* checkBox term condition */}
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={checkedBox ? 'checked' : 'unchecked'}
                onPress={() => {
                  onChange();
                  setCheckedBox(!checkedBox);
                }}
              />
              <Text style={{alignItems: 'center', fontSize: 16, padding: 7}}>
                I {checkedBox ? 'Yes' : 'No'} accepted term & conditions
              </Text>
            </View>
          )}
          name="checkbox"
        />
        {/* {errors.checkbox && (
          <Text
            style={{color: 'red', alignSelf: 'stretch', marginHorizontal: 15}}
          >
            tick the checkbox
          </Text>
        )} */}
        <View style={styles.buttonContainer}>
          <View></View>
          <Button
            title="Form Retrieve Submit"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={retrieveModal}
        onRequestClose={() => {
          setRetrieveModal(!retrieveModal);
        }}
      >
        <View style={{backgroundColor: '', flex: 1, justifyContent: 'center'}}>
          <View
            style={{backgroundColor: 'pink', marginHorizontal: 20, padding: 20}}
          >
            <AntDesign
              name="close"
              size={20}
              color="red"
              onPress={() => setRetrieveModal(false)}
            />

            <Text>{watch('firstName')}</Text>
            <Text>{watch('lastName')}</Text>
            <Text>{watch('gender?.label')}</Text>
            <Text>{watch('date')}</Text>
            <Text>{watch('student')}</Text>
            <Text>{watch('userPhoto')}</Text>
            <Text>{watch('checkbox')}</Text>
          </View>
        </View>
        {/* retrieve form data  */}
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={dateModal}
        onRequestClose={() => {
          setDateModal(!dateModal);
        }}
      >
        <DateTimePicker
          value={typeof date == 'date' ? date : new Date()}
          onChange={d => {
            setDateModal(!dateModal);
            handleDateSelect(d);
          }}
          testID="dateTimePicker"
          mode={'date'}
          display="default"
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  container: {
    margin: 10,
  },
  buttonContainer: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  radioButtonStyle: {
    borderWidth: 1,
    borderColor: 'teal',
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
