import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({placeholder, secureTextEntry, name, control, rules}) => {
  //   const {control, formState:{errors}} = useForm;
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {value, onBlur, onChange}, fieldState: {error}}) => (
          <View>
            <TextInput
              style={[
                styles.input,
                {borderColor: error ? 'red' : 'deepskyblue'},
              ]}
              placeholder={placeholder}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
              value={value}
              onBlur={onBlur}
            />
            {error && (
              <Text style={{color: 'red', alignSelf: 'stretch'}}>
                this field is required
              </Text>
            )}
          </View>
        )}
      />
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 10,
    borderColor: 'deepskyblue',
  },
});
