import {
  StyleSheet,
  Text,
  View,
  Switch,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../assets/Colors';

const SwitchButton = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [denyAlarm, setDenyAlarm] = useState(false);
  const [isEnable, setIsEnable] = useState(false);

  setTimeout(() => {}, 1000);

  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={Colors.primary}
        onValueChange={() => {
          setIsEnable(!isEnable);
          if (modalVisible === false) {
            setDenyAlarm(true);
            setModalVisible(false);
          } else {
            setModalVisible(true);
            setDenyAlarm(false);
          }
        }}
        value={isEnable}
      />

      {/* {isEnabled === true ? (
        <View>
          <Text>Alert</Text>
        </View>
      ) : (
        <Text>no alert</Text>
      )} */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEnable == true ? modalVisible : denyAlarm}
        onRequestClose={() => {
          isEnable === false
            ? setModalVisible(!modalVisible)
            : setDenyAlarm(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            {modalVisible ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{}}>set Alarm</Text>
                <Pressable
                  style={{}}
                  onPress={() => navigation.navigate('Contact')}
                >
                  <Text style={{marginHorizontal: 10, color: Colors.primary}}>
                    Setting
                  </Text>
                </Pressable>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{}}>decline Alarm</Text>
                <Pressable style={{}} onPress={() => setDenyAlarm(false)}>
                  <Text style={{marginHorizontal: 10, color: Colors.primary}}>
                    Setting
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    margin: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
