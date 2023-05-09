import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-shadow-cards';
import Colors from '../../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const days = [
  {
    id: '1',
    day: 'sunday',
  },
  {
    id: '2',
    day: 'monday',
  },
  {
    id: '3',
    day: 'tuesday',
  },
  {
    id: '4',
    day: 'wednesday',
  },
  {
    id: '5',
    day: 'thursday',
  },
  {
    id: '6',
    day: 'friday',
  },
  {
    id: '7',
    day: 'saturday',
  },
];

const SelectDay = () => {
  const [haveDays, setHaveDays] = useState([]);

  const selectDaysFunction = item => {
    let index = haveDays.findIndex(d => d.id == item.id);
    if (index == -1) {
      let tempDay = [...haveDays, item];
      setHaveDays(tempDay);
    } else {
      let tempArray = [...haveDays];
      tempArray.splice(index, 1);
      setHaveDays(tempArray);
    }
  };

  const deleteByAsync = async () => {
    try {
      await AsyncStorage.removeItem('@Key');
    } catch (error) {
      console.log('error', error);
    }
  };

  const dayPrint = () => {
    // haveDays == 7 ; return 'all Days' ;
    let myText = '';
    for (let i of haveDays) {
      if (i == 1) {
        myText += i.day;
      } else {
        myText += i.day.slice(0, 3) + '  ';
      }

      console.log('every', myText == i);
    }

    return myText;
  };

  console.log('haveDays', haveDays);

  return (
    <View>
      <Text>{dayPrint()}</Text>
      <FlatList
        horizontal={true}
        data={days}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          //   console.log('index1', index1);
          //   console.log('item', item);
          return (
            <Card
              style={{
                width: 40,
                margin: 5,
                padding: 5,
                height: 40,
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: haveDays.find(
                  currentValue => currentValue.id == item.id,
                )
                  ? 'deepskyblue'
                  : Colors.primary,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  selectDaysFunction(item);
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    color: Colors.white,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.day.slice(0, 1)}
                </Text>
              </TouchableOpacity>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default SelectDay;

const styles = StyleSheet.create({});
