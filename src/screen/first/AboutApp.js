import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const height = Dimensions.get('screen').height;
const AboutApp = ({navigation}) => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', margin: 20, height: height}}
    >
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/logo.png')} />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 28,
              color: 'black',
              fontWeight: '700',
            }}
          >
            Welcome To
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 28,
              color: 'black',
              fontWeight: '700',
            }}
          >
            Fashion
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{backgroundColor: 'teal', height: 50, borderRadius: 15}}
            onPress={() => navigation.navigate('Walkthrough')}
          >
            <Text
              style={{
                alignSelf: 'center',
                paddingVertical: 5,
                color: 'white',
                fontSize: 25,
              }}
            >
              Get Started{' '}
              <AntDesign name={'arrowright'} size={23} color={'white'} />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              paddingVertical: 20,
              fontSize: 16,
              color: 'teal',
              textAlign: 'center',
            }}
          >
            Already have an account{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutApp;

const styles = StyleSheet.create({});
