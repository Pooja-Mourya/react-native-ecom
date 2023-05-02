import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-shadow-cards';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../assets/Colors';
import {Switch} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

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

const Alarm = () => {
  const [more, setMore] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [haveDays, setHaveDays] = useState([]);
  const [select, setSelect] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const selectDaysFunction = item => {
    let tempDay = [...haveDays, item];
    if (tempDay) {
      setHaveDays(tempDay);
    } else {
      setSelect(true);
    }
  };

  let myText = '';
  for (let i of haveDays) {
    myText += i.day + '  ';
  }

  return (
    <>
      <Card style={{margin: 20, padding: 10, backgroundColor: Colors.primary}}>
        <TouchableOpacity
          onPress={() => setMore(!more)}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}
        >
          <Text>label</Text>
          <TouchableOpacity onPress={() => setMore(!more)}>
            <AntDesign
              name={more ? 'downcircle' : 'upcircle'}
              size={25}
              color={'white'}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text>03</Text>
          <Text>:</Text>
          <Text>00</Text>
          <Text>am</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Tomorrow</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View>
          <Text>
            {myText.split('day') == haveDays
              ? 'every day'
              : myText.split('day')}
          </Text>
        </View>

        {more ? (
          <View>
            <FlatList
              horizontal={true}
              data={days}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
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
                        if (item) {
                          setSelect(index);
                        } else {
                          setHaveDays(select);
                        }
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
        ) : null}
      </Card>
    </>
  );
};

export default Alarm;

const styles = StyleSheet.create({});
