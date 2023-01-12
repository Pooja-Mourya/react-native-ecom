import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fonts, Colors} from '../../assets/Assets';

const width = Dimensions.get('window').width;

const Header = ({text}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerFlex}>
        <Text style={styles.myFavText}>{text}</Text>
        {/* <TouchableOpacity>
          <Icon style={styles.menuIconStyle} name="menu-outline" size={35} />
        </TouchableOpacity>
        <TextInput
          //   value={search}
          style={styles.searchContainer}
          placeholder="Search..."
          placeholderTextColor={'black'}
          onChangeText={e => setSearch(e)}
        /> */}
        {/* <AntDesign
          style={styles.searchIconStyle}
          name="arrowleft"
          size={30}
          color={'black'}
        /> */}
      </View>
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
  },
  headerFlex: {
    flexDirection: 'row-reverse',
  },
  searchContainer: {
    width: '85%',
    height: width / 9,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    paddingHorizontal: 40,
    marginHorizontal: 10,
  },
  searchIconStyle: {
    position: 'absolute',
    marginTop: 10,
    marginRight: width / 1 - 65,
  },
  menuIconStyle: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 3,
  },
  myFavText: {
    fontFamily: fonts.medium,
    fontSize: 25,
    color: Colors.black,
    fontWeight: '700',
  },
});
