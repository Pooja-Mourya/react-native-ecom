import {
  Alert,
  RefreshControl,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Card} from 'react-native-shadow-cards';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/Colors';
import {FlatList} from 'react-native-gesture-handler';
import SelectDay from './SelectDay';
import CommonButton from '../CommonButton';
import Label from './Label';
import {useScrollToTop} from '@react-navigation/native';
import {FAB} from 'react-native-paper';
import SwitchButton from './SwitchButton';
import {Animated} from 'react-native';

const Alarm = ({
  alarmValue,
  AlarmDataList,
  addSome,
  setAddSome,
  onDataChange,
}) => {
  const [more, setMore] = useState(false);
  const [y, setY] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [addLabel, setAddLabel] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [scrollEvent, setScrollEvent] = useState(0);

  const SCROLL_EVENT_WIDTH = 300;

  const deleteAlarmFunction = item => {
    if (alarmValue.splice(item, 1)) {
      ToastAndroid.show('alarm deleted', ToastAndroid.SHORT);
      setMore(false);
      setDeleteMessage(true);
    } else {
      ToastAndroid.show('error in deleting alarm ', ToastAndroid.SHORT);
    }
  };

  const flatListRef = useRef(null);

  const handlePress = item => {
    onDataChange(item);
  };

  return (
    <>
      <FlatList
        data={alarmValue}
        ref={flatListRef}
        onScroll={e => setScrollEvent(e.nativeEvent.contentOffset.y)}
        keyExtractor={it => it.id}
        renderItem={({item, index}) => {
          return (
            <Card
              style={{margin: 20, padding: 10, backgroundColor: Colors.primary}}
            >
              <TouchableOpacity
                onPress={() => {
                  setMore(!more);
                  setY(index);
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                {y === index && more ? (
                  <TouchableOpacity
                    style={{}}
                    onPress={() => setAddLabel(!addLabel)}
                  >
                    <Text style={{}}>
                      <MaterialCommunityIcons
                        name="label-outline"
                        size={18}
                        color={Colors.white}
                      />
                      {''}
                      Add label
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text></Text>
                )}
                <AntDesign
                  name={more ? 'downcircle' : 'upcircle'}
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  setAddSome(true);
                  handlePress(item);
                }}
              >
                <Text
                  style={{fontSize: 40, color: Colors.white, fontWeight: '400'}}
                >
                  {item.hourRef}
                </Text>
                <Text
                  style={{fontSize: 40, color: Colors.white, fontWeight: '400'}}
                >
                  :
                </Text>
                <Text
                  style={{fontSize: 40, color: Colors.white, fontWeight: '400'}}
                >
                  {item.minuteRef}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    textTransform: 'lowercase',
                    marginTop: 23,
                    color: Colors.white,
                    fontWeight: '400',
                  }}
                >
                  {item.mobility}
                </Text>
              </TouchableOpacity>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
              >
                <Text style={{color: Colors.white}}>Tomorrow</Text>
                <SwitchButton />
              </View>

              {y === index && more && (
                <View>
                  <SelectDay />
                  <TouchableOpacity
                    onPress={() => {
                      deleteAlarmFunction(item.id);
                    }}
                    style={{flexDirection: 'row', margin: 10}}
                  >
                    <AntDesign name="delete" size={25} color={'red'} />
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Card>
          );
        }}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => AlarmDataList()}
          />
        }
      />
      {deleteMessage && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // margin: 10,
            backgroundColor: 'teal',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <Text>Alarm Deleted</Text>
          <CommonButton
            buttontext={'Undo'}
            buttonStyle={{backgroundColor: null}}
          />
        </View>
      )}

      {addLabel && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'red',
            zIndex: 3,
            margin: 50,
          }}
        >
          <View>
            <Label />
          </View>
        </View>
      )}

      {scrollEvent > SCROLL_EVENT_WIDTH && (
        <FAB
          icon="arrow-up-thin"
          style={styles.fab}
          onPress={() =>
            flatListRef.current.scrollToOffset({offset: 0, animated: true})
          }
        />
      )}
    </>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 15,
    left: 0,
    bottom: 0,
    borderRadius: 50,
  },
});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Alarm = () => {
//   return (
//     <View>
//       <Text>Alarm</Text>
//     </View>
//   );
// };

// export default Alarm;

// const styles = StyleSheet.create({});
