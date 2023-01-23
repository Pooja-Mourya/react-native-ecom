import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CommonInput from '../../component/CommonInput';
import {TextInput, Checkbox, RadioButton} from 'react-native-paper';
import CommonDropDown from '../../component/CommonDropDown';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Other', value: '3'},
];

// const dataSelf = data.reduce(function (result, item) {
//   var key = Object.keys(item)[0]; //first property: a, b, c
//   result[key] = item[key];
//   //   console.log('result', result.label);
//   return result;
// }, {});

export default function FormHook() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    register,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      date: '',
      student: checked ? 'yes' : 'no',
      userPhoto: '',
      address: '',
      age: '',
      checkbox: '',
    },
  });

  //   const {
  //     field,
  //     fieldState: {invalid, isTouched, isDirty},
  //     formState: {touchedFields, dirtyFields},
  //   } = useController({
  //     control,
  //     rules: {required: true},
  //   });

  //   const {} = useFormState({
  //     control,
  //   });

  //   const { field: checkbox } = useController({ name: 'test1' })

  const onSubmit = data => {
    data.firstName, data.lastName, data?.gender?.Data?.label, data?.date;
    data?.student?.checked;
    console.log('formData', data);
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

  const [dateModal, setDateModal] = useState(false);
  const [date, setDate] = useState(new Date('01/01/2023'));
  const [checked, setChecked] = useState(false);
  const [checkedBox, setCheckedBox] = useState(false);
  const [avatar, setAvatar] = useState('');

  //   const avatarObj = Object.assign({}, avatar);
  //   console.log('obj', avatarObj[0]);
  return (
    <>
      <ScrollView style={styles.container}>
        {/* gender selector dropdown */}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <CommonDropDown
              data={Data}
              labelField={'label'}
              valueField={`value`}
              placeholder={'select gender'}
              value={value}
              onPressItem={onChange}
              onBlur={onBlur}
            />
          )}
          name="gender"
        />

        {/* firstName textInput  */}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <CommonInput
              placeholder="firstName"
              label="firstName"
              mode="flat"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        {/* lastName textInput */}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CommonInput
              placeholder="lastName"
              label="lastName"
              mode="flat"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />

        {/* select date  */}
        <View style={{flexDirection: 'row'}}>
          {/* select date of birth  */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={{width: '60%'}}>
                <CommonInput
                  placeholder="Date Selector"
                  label="Select Data"
                  mode="flat"
                  style={[styles.input]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  rightIcon={
                    <TextInput.Icon
                      onPress={() => setDateModal(!dateModal ? true : false)}
                      icon="calendar-range"
                    />
                  }
                />
              </View>
            )}
            name="date"
          />

          {/* age calculator  */}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={{width: '40%'}}>
                <CommonInput
                  placeholder="age"
                  label="age"
                  style={styles.input}
                  mode="flat"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="age"
          />
        </View>

        {/* yes or no radio button  */}
        <Controller
          control={control}
          render={({field: {onChange}}) => (
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
                }}
                // ref={register('student')}
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
              {/* <CommonInput
                placeholder="image path"
                label="image path"
                style={styles.input}
                mode="flat"
                onBlur={onBlur}
                onChangeText={onChange()}
                value={value}
                rightIcon={
                  avatar ? (
                    <TextInput.Icon onPress={() => setAvatar()} icon="delete" />
                  ) : null
                }
              /> */}
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
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <CommonInput
              placeholder="address"
              label="address"
              mode="flat"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="address"
        />

        {/* checkBox term condition */}
        <Controller
          control={control}
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

              {/* <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              /> */}
            </View>
          )}
          name="checkbox"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Form Retrieve Submit"
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        {/* retrieve form data  */}
        <View>
          <Text>{watch('firstName')}</Text>
          <Text>{watch('lastName')}</Text>
          <Text>{watch('label')}</Text>
          <Text>{watch('date')}</Text>
          <Text>{watch('student')}</Text>
          <Text>{watch('avatar')}</Text>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={dateModal}
        onRequestClose={() => {
          setDateModal(!dateModal);
        }}
      >
        <DateTimePicker
          value={date}
          onChange={d => {
            setDateModal(!dateModal);
            setDate(d);
          }}
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
