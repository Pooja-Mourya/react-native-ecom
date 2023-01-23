/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {RegisterOptions, useController} from 'react-hook-form';
import {
  Dimensions,
  FlatList,
  Keyboard,
  Omit,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Checkbox,
  Modal,
  Portal,
  Text,
  TextInput,
  Provider,
} from 'react-native-paper';
import Row from './Row';
import Col from './Col';
import Show from './Show';
import AntDesign from 'react-native-vector-icons/AntDesign';
declare type InputTypes =
  | 'textInput'
  | 'numberInput'
  | 'select'
  | 'select-multi';

interface SelectProps {
  label: string;
  value: any;
}
interface CustomInputProps {
  type: InputTypes;
  name: string;
  placeholder?: string;
  multiline?: boolean;
  control: any;
  modalTitle?: any;
  modalNoSearch?: boolean;
  secureTextEntry?: boolean;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  defaultValue?: any;
}
const selectOptions = [
  {
    label: 'Credit Card',
    value: 'Michael Scott 1',
  },
  {
    label: 'Bank Account',
    value: 'Michael Scott 2',
  },
  {
    label: 'Debit Card',
    value: 'Michael Scott 3',
  },
  {
    label: 'Digital Wallet',
    value: 'Michael Scott 4',
  },
  {
    label: 'Prepaid Card',
    value: 'Michael Scott 5',
  },
  {
    label: 'Loan Account',
    value: 'Michael Scott 6',
  },
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomInput = ({
  name,
  placeholder,
  type,
  multiline = false,
  modalNoSearch = false,
  control,
  rules,
  defaultValue,
  modalTitle,
  secureTextEntry = false,
}: CustomInputProps) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Array<SelectProps>>([]);
  const [filteredItems, setFIlteredItems] = useState<Array<SelectProps>>([]);
  const [refresh, setRefresh] = useState(false);
  const {
    field: {onChange, onBlur, value, ref},
    fieldState: {isTouched, isDirty, error},
    formState: {touchedFields, dirtyFields},
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const showModal = () => {
    Keyboard.dismiss();
    setVisible(true);
  };

  useEffect(() => {
    if (visible) {
      Keyboard.dismiss();
    }
  }, [visible]);

  const hideModal = () => setVisible(false);

  const handleSelect = (data: SelectProps) => {
    if (type === 'select-multi') {
      const re = selected;
      const index = selected.findIndex(a => a.value === data?.value);
      if (index !== -1) {
        // remove
        re?.splice(index, 1);
      } else {
        // add
        re.push(data);
      }
      setRefresh(!refresh);
      setSelected(re);
      onChange(re);
    } else {
      const index = selected.findIndex(a => a.value === data?.value);
      if (index !== -1) {
        setSelected([]);
        onChange(null);
        setRefresh(!refresh);
      } else {
        setSelected([data]);
        onChange(data);
        setRefresh(!refresh);
      }
    }
  };

  const filterItems = (search: string) => {
    const data = selectOptions;
    if (search) {
      const filter = data?.filter(a => a.label?.includes(search));
      setFIlteredItems(filter);
    } else {
      setFIlteredItems([]);
    }
    setRefresh(!refresh);
  };

  const selectValue =
    selected.length > 1
      ? `${String(selected.slice(0, 1).map(a => ' ' + a.label))} (+${
          selected.length - 1
        } more)`
      : String(selected.map(a => ' ' + a.label));

  const Item = ({data}: {data: SelectProps}) => (
    <TouchableOpacity
      onPress={() => handleSelect(data)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dfdfdf',
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <View>
        <Checkbox
          status={
            selected?.find(a => a.value === data.value)
              ? 'checked'
              : 'unchecked'
          }
        />
        <Text>{data.label}</Text>
      </View>
    </TouchableOpacity>
  );

  if (type === 'textInput') {
    return (
      <TextInput
        // style={AppStyles.inputFiled}
        mode="outlined"
        label={placeholder + (rules?.required ? ' *' : '')}
        placeholder={placeholder + (rules?.required ? ' *' : '')}
        outlineColor="#ddd"
        underlineColor="#333"
        placeholderTextColor={'#ccc'}
        autoFocus={false}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        numberOfLines={5}
        value={value ?? ''}
        // error={isValid(error)}
        onBlur={onBlur}
        onChangeText={onChange}
        ref={ref}
      />
    );
  } else if (type === 'numberInput') {
    return (
      <TextInput
        keyboardType="numeric"
        // style={AppStyles.inputFiled}
        mode="outlined"
        label={placeholder + (rules?.required ? ' *' : '')}
        placeholder={placeholder + (rules?.required ? ' *' : '')}
        outlineColor="#ddd"
        underlineColor="#333"
        placeholderTextColor={'#ccc'}
        autoFocus={false}
        multiline={multiline}
        numberOfLines={5}
        value={value ?? ''}
        // error={isValid(error)}
        onBlur={onBlur}
        onChangeText={onChange}
        ref={ref}
      />
    );
  } else if (type === 'select') {
    return (
      <>
        <Provider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              // contentContainerStyle={AppStyles.modalSelect}
            >
              <Row>
                <Col flex={5}>
                  <Text>{modalTitle ?? 'Select'}</Text>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={hideModal}
                    style={{
                      height: 50,
                      display: 'flex',
                      alignSelf: 'stretch',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AntDesign color="black" name="close" size={30} />
                  </TouchableOpacity>
                </Col>
              </Row>
              <Show IF={!modalNoSearch}>
                <TextInput
                  style={[
                    // AppStyles.inputFiled,
                    {margin: 4, height: 45, marginBottom: 8},
                  ]}
                  mode="outlined"
                  autoFocus={false}
                  // label={'search'}
                  placeholder={'Search...'}
                  outlineColor="#ddd"
                  underlineColor="#ddd"
                  onChangeText={e => filterItems(e)}
                  placeholderTextColor={'#ccc'}
                />
              </Show>
              <Row>
                <FlatList
                  extraData={refresh}
                  style={{padding: 0}}
                  data={
                    filteredItems?.length > 0 ? filteredItems : selectOptions
                  }
                  renderItem={({item}) => <Item data={item} />}
                  keyExtractor={(item: SelectProps, index) =>
                    item.label + index
                  }
                />
              </Row>
            </Modal>
          </Portal>

          <TextInput
            onPressIn={showModal}
            onFocus={showModal}
            focusable={false}
            showSoftInputOnFocus={false}
            // style={AppStyles.inputFiled}
            mode="outlined"
            placeholder={placeholder + (rules?.required ? ' *' : '')}
            label={placeholder + (rules?.required ? ' *' : '')}
            outlineColor="#ddd"
            underlineColor="#333"
            placeholderTextColor={'#ccc'}
            autoFocus={false}
            multiline={multiline}
            numberOfLines={5}
            value={selectValue}
            // error={isValid(error)}
            onBlur={onBlur}
            onChangeText={onChange}
            ref={ref}
          />
        </Provider>
      </>
    );
  } else {
    return null;
  }
};

export default CustomInput;
