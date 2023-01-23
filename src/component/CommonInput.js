import * as React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Controller} from 'react-hook-form';
import {View, Text} from 'react-native';
import moment from 'moment';

const CommonInput = ({
  label,
  placeholder,
  mode,
  icon,
  rightIcon,
  multiline,
  name,
  rules,
  control,
  numberOfLines,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {value, onBlur, onChange}, fieldState: {error}}) => (
          <View>
            <TextInput
              style={styles.inputStyle}
              mode={(mode = 'outlined' || 'flat')}
              label={label ?? 'undefine'}
              placeholder={placeholder ?? 'undefine'}
              right={rightIcon ?? <TextInput.Icon icon={icon} />}
              outlineColor={error ? 'red' : 'teal'}
              activeOutlineColor="deeppink"
              onChangeText={onChange}
              value={
                typeof value == 'date'
                  ? moment(value).format('DD-MMMM-YYYY')
                  : typeof value == 'number'
                  ? '' + value
                  : value
              }
              multiline={multiline}
              numberOfLines={numberOfLines}
              onBlur={onBlur}
            />
            {error && (
              <Text
                style={{
                  color: 'red',
                  alignSelf: 'stretch',
                  marginHorizontal: 15,
                }}
              >
                this field is required
              </Text>
            )}
          </View>
        )}
      />
    </>
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
