import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useForm} from 'react-hook-form';
import CommonButton from '../CommonButton';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonInput from '../CommonInput';
import Colors from '../../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const timeNum = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
  {
    id: '7',
  },
  {
    id: '8',
  },
  {
    id: '9',
  },
  {
    id: '10',
  },
  {
    id: '11',
  },
  {
    id: '12',
  },
];
const Clock = ({setAddSome}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [keyboardInput, setKeyboardInput] = useState(false);
  const [mobility, setMobility] = useState('AM');
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      minute: '',
      second: '',
    },
  });

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      console.log('e', e);
      // saving error
    }
  };

  const onSubmit = data => {
    if (hour && minute && mobility) {
      storeData('@storage_Key', JSON.stringify(data));
    } else {
      ToastAndroid.show('time not found', ToastAndroid.SHORT);
    }
    // console.log(data);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hour = currentTime.getHours() % 12;
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourHandRotation = (hour * 30 + minute * 0.5) % 360;
  const minuteHandRotation = (minute * 6 + second * 0.1) % 360;
  const secondHandRotation = (second * 6) % 360;

  const hourRef = useRef('').current;
  const minuteRef = useRef('').current;

  return (
    <View
      style={{
        backgroundColor: Colors.lightPrimary,
        borderRadius: 20,
        position: 'absolute',
        top: 120,
        left: 10,
        right: 10,
        bottom: 120,
      }}
    >
      <View style={{margin: 20}}>
        <Text style={styles.addSomeText}>Select time</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {keyboardInput ? (
            <CommonInput
              control={control}
              name="minute"
              rules={{required: true}}
              placeholder="minute"
              label="minute"
              mode="flat"
            />
          ) : (
            <Text style={styles.selectTime}>{hour}</Text>
          )}

          <Text
            style={{
              fontSize: 32,
              fontWeight: '900',
              marginHorizontal: 10,
              marginTop: 15,
            }}
          >
            :
          </Text>
          {keyboardInput ? (
            <CommonInput
              control={control}
              name="second"
              rules={{required: true}}
              placeholder="second"
              label="second"
              mode="flat"
            />
          ) : (
            <Text style={styles.selectTime}>{minute}</Text>
          )}
          <View
            style={{
              borderWidth: 1,
              width: 50,
              flexDirection: 'column',
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                borderBottomWidth: 1,
                borderColor: 'white',
                backgroundColor: mobility === 'AM' ? 'green' : 'black',
                paddingVertical: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                color: 'white',
              }}
              onPress={() => setMobility('AM')}
            >
              AM
            </Text>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: mobility === 'PM' ? 'green' : 'black',
                color: 'white',
              }}
              onPress={() => setMobility('PM')}
            >
              PM
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 230,
            height: 230,
            borderRadius: 150,
            borderWidth: 1,
            borderColor: Colors.white,
            alignContent: 'center',
            alignSelf: 'center',
            marginVertical: 20,
            backgroundColor: 'blue',
            position: 'relative',
          }}
        >
          <View
            style={{
              transform: [{rotate: `270deg`}],
              position: 'absolute',
              top: 225,
            }}
          >
            <View
              style={{
                transform: [{rotate: `${hourHandRotation}deg`}],
                position: 'absolute',
                top: 110,
                left: 110,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'red',
                zIndex: 2,
                alignSelf: 'center',
              }}
            >
              <View
                style={{
                  transformOrigin: 'bottom right',
                  height: 5,
                  width: 70,
                  backgroundColor: 'cyan',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: 2,
                }}
              />
            </View>
            <View
              style={{
                transform: [{rotate: `${minuteHandRotation}deg`}],
                position: 'absolute',
                top: 110,
                left: 110,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'red',
                zIndex: 2,
                alignSelf: 'center',
              }}
            >
              <View
                style={{
                  transformOrigin: 'bottom right',
                  height: 5,
                  width: 80,
                  backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: 2,
                }}
              />
            </View>
            <View
              style={{
                transform: [{rotate: `${secondHandRotation}deg`}],
                position: 'absolute',
                top: 110,
                left: 110,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'red',
                zIndex: 2,
                alignSelf: 'center',
              }}
            >
              <View
                style={{
                  transformOrigin: 'bottom right',
                  height: 5,
                  width: 90,
                  backgroundColor: 'deeppink',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: 2,
                }}
              />
            </View>
          </View>

          {timeNum.map((e, i) => {
            return (
              <View
                key={i + e.id}
                style={{
                  ...styles.numberRotation,
                  transform: [{rotate: `${30 * (i + 1)}deg`}],
                }}
              >
                <View
                  style={{
                    // position: 'absolute',
                    top: 100,
                    left: 100,
                    width: 2,
                    height: 2,
                    borderRadius: 5,
                    backgroundColor: 'red',
                  }}
                ></View>
                <Text
                  style={[
                    {
                      transform: [{rotate: `-${30 * (i + 1)}deg`}],
                    },
                    styles.text,
                  ]}
                >
                  {e.id}
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
          }}
        >
          <CommonButton
            buttonStyle={{
              alignSelf: 'center',
              backgroundColor: null,
            }}
            buttontext={
              <Entypo
                // style={styles.addSomeText}
                name="keyboard"
                size={20}
                color={Colors.black}
              />
            }
            onPress={() => setKeyboardInput(!keyboardInput)}
          />

          <View style={{flexDirection: 'row'}}>
            <CommonButton
              buttonStyle={{
                alignSelf: 'center',
                backgroundColor: null,
              }}
              buttontext={'Cancel'}
              onPress={() => setAddSome(false)}
            />
            <CommonButton
              buttonStyle={{
                alignSelf: 'center',
                backgroundColor: null,
              }}
              buttontext={'Ok'}
              onPress={() => onSubmit()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  addSomeText: {
    fontSize: 16,
    letterSpacing: 2,
    paddingHorizontal: 10,
    lineHeight: 60,
  },
  selectTime: {
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 55,
    marginHorizontal: 10,
  },
  numberRotation: {
    //   alignSelf: 'center',
    //   padding: 5,

    width: '100%',
    height: '100%',
    position: 'absolute',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
  },
});
