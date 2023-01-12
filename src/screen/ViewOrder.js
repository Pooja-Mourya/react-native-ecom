import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Banner from '../components/Home/Banner';
import {Colors, fonts} from '../assets/Assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialIcon from '../components/Layout/SocialIcon';

const data = [
  {letter: 'A', title: 'received order', isCurrent: false},
  {letter: 'B', title: 'packing order by seller', isCurrent: false},
  {letter: 'C', title: 'deliver to seller', isCurrent: false},
  {letter: 'D', title: 'dispatch', isCurrent: true},
  {letter: 'E', title: 'arrived to buyer', isCurrent: true},
];

const ViewOrder = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  if (!data || data.length === 0) return null;

  const firstItem = data.shift();

  const toggleIcon = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Banner />
      <View
        style={{
          position: 'absolute',
          //   backgroundColor: Colors.shadowColorAndroidDefault,
          marginTop: 250,
          marginHorizontal: 20,
        }}
      >
        <Text style={styles.liveTextStyle}>Live Tracking your Product</Text>
      </View>

      <ScrollView style={{flex: 1, margin: 10, marginTop: -250}}>
        <View style={styles.verticalLine}></View>
        <View style={styles.verticalWrap}>
          <View style={styles.itemWrap}>
            <View style={styles.firstPoint}></View>
            <View style={{marginLeft: 5, flex: 1}}>
              <Text style={styles.actionStyle}>{firstItem.title}</Text>
            </View>
          </View>

          {data.map(item => (
            <View key={item.id} style={styles.itemWrap}>
              <View style={styles.pointWrap}>
                <Text
                  style={[
                    styles.markerText,
                    item.isCurrent ? styles.currentMarker : null,
                  ]}
                >
                  {item.letter}
                </Text>
              </View>
              <View style={{marginLeft: 5, flex: 1}}>
                <Text
                  style={
                    item.isCurrent ? styles.currentMarker : styles.actionStyle
                  }
                >
                  {item.title}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <SocialIcon />
    </>
  );
};

export default ViewOrder;

const styles = StyleSheet.create({
  verticalLine: {
    backgroundColor: 'black',
    width: 5,
    height: '100%',
    position: 'absolute',
    marginLeft: 10,
    marginTop: 60,
  },
  verticalWrap: {
    justifyContent: 'space-between',
    height: '100%',
    marginVertical: 40,
    marginBottom: 150,
  },
  itemWrap: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointWrap: {
    backgroundColor: Colors.placeholderTextColor,
    height: 30,
    width: 30,
    alignItems: 'center',
    color: Colors.white,
    borderRadius: 15,
    paddingTop: 5,
  },
  firstPoint: {
    backgroundColor: Colors.black,
    borderRadius: 20,
    height: 10,
    width: 20,
    marginLeft: 10,
  },
  markerText: {color: Colors.white},
  currentMarker: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: Colors.darkPrimary,
    fontWeight: '400',
  },

  liveTextStyle: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: Colors.black,
    fontWeight: '600',
    // alignSelf: 'center',
  },
  actionStyle: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: Colors.cardColor,
    fontWeight: '400',
  },
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
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
});
