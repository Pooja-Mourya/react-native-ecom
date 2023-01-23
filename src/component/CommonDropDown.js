import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Controller} from 'react-hook-form';

const CommonDropDown = ({
  data,
  search,
  valueField,
  labelField,
  placeholder,
  searchPlaceholder,
  DropdownLabel,
  onPressItem,
  value,
  name,
  control,
  rules,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'deeppink'}]}>
          {(DropdownLabel = placeholder)}
        </Text>
      );
    }
    return null;
  };

  return (
    // <Controller
    //   name={name}
    //   control={control}
    //   rules={rules}
    //   render={({field: {onBlur, onChange, value}, formState: {errors}}) => (
    <View style={[styles.container, {margin: -5.5}]}>
      {renderLabel()}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: 'deeppink'},
          //   {borderColor: errors ? 'red' : 'teal'},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={search}
        maxHeight={300}
        labelField={labelField ?? 'undefine'}
        valueField={valueField ?? 'undefine'}
        placeholder={placeholder ?? 'Select item'}
        searchPlaceholder={searchPlaceholder ?? 'Search...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          //   onBlur();
          setIsFocus(false);
        }}
        onChange={item => {
          // onChange(item);
          onPressItem(item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'deeppink' : 'teal'}
            name="Safety"
            size={20}
          />
        )}
      />
      {/* {errors ? (
        <Text
          style={{
            color: 'red',
            alignSelf: 'stretch',
            marginTop: 3,
          }}
        >
          This is required.
        </Text>
      ) : null} */}
    </View>
    //   )}
    // />
  );
};

export default CommonDropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'teal',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
