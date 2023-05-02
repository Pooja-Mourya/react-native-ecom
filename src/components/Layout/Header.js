import {Dimensions, StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {fonts, Colors} from '../../assets/Assets';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

const Header = () => {
  const {Navigation} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri:
            'https://w7.pngwing.com/pngs/265/349/png-transparent-blogger-computer-icons-logo-blogger-logo-icon-svg-miscellaneous-text-trademark-thumbnail.png',
        }}
        style={{width: 100, height: 50, resizeMode: 'cover'}}
      />
      {/* <TouchableOpacity onPress={() => Navigation.toggleDrawer()}>
        <Entypo name="menu" size={32} color={Colors.darkGray} />
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: 'white',
    elevation: 12,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
