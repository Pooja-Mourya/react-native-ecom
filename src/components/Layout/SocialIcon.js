import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors, fonts} from '../../assets/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SocialIcon = () => {
  const [clicked, setClicked] = useState(false);
  const toggleIcon = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <View style={styles.bottomView}>
        <Text style={styles.foundText}>Our Social Media </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{paddingHorizontal: 15}}>
            <TouchableOpacity onPress={() => toggleIcon()}>
              <Text style={styles.arrowIconStyle}>
                {' '}
                <AntDesign name={'arrowright'} size={30} />
              </Text>
            </TouchableOpacity>
          </View>
          {clicked && (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.groupIcon}>
                {' '}
                <AntDesign name={'youtube'} size={30} color={'red'} />
              </Text>
              <Text style={styles.groupIcon}>
                {' '}
                <AntDesign
                  name={'twitter'}
                  onfocus={'red'}
                  size={30}
                  color={'deepskyblue'}
                />
              </Text>
              <Text style={styles.groupIcon}>
                {' '}
                <AntDesign name={'dropbox'} size={30} color={Colors.black} />
              </Text>
              <Text style={styles.groupIcon}>
                {' '}
                <AntDesign name={'amazon'} size={30} color={Colors.blue} />
              </Text>
              <Text style={styles.groupIcon}>
                {' '}
                <AntDesign name={'google'} size={30} color={Colors.primary} />
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  bottomView: {
    height: 70,
    backgroundColor: Colors.ultraLightProPrimary,
  },
  foundText: {
    fontFamily: fonts.mediumItalic,
    fontSize: 18,
    color: Colors.primary,
    fontWeight: '400',
    padding: 5,
  },
  groupIcon: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  arrowIconStyle: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    elevation: 10,
  },
});
