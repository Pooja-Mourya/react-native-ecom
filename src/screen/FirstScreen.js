import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {fonts, Colors} from '../assets/Assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const FirstScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('MyTab');
  }, 5000);
  return (
    <ScrollView>
      <Image
        style={styles.imageURI}
        source={require('../assets/img/fashionGirl.jpg')}
      />
      <View style={styles.mainViewStyle}>
        <View>
          <Text style={styles.headerText}>New Jewelry</Text>
          <Text style={styles.headerText}> Collection 2022</Text>
        </View>

        <View style={{paddingVertical: 12}}>
          <Text style={styles.textDes}>
            Pay attention to our new jewelry collection.{' '}
          </Text>
          <Text style={styles.textDes}>
            it is located in a separate section
          </Text>
        </View>
      </View>

      <View style={styles.iconStyleView}>
        <Text> </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MyTab')}>
          <Text style={styles.iconBack}>
            <FontAwesome
              name="long-arrow-right"
              size={30}
              color={Colors.black}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  imageURI: {
    width: width,
    height: width / 0.8 - 0.8,
  },
  mainViewStyle: {
    margin: 10,
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    padding: 10,
  },
  headerText: {
    fontFamily: fonts.bold,
    color: Colors.black,
    fontSize: 20,
    fontWeight: '600',
  },
  textDes: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: Colors.lightBlack,
    fontWeight: '500',
  },
  iconStyleView: {
    margin: 10,
    // paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconBack: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 10,
  },
});
