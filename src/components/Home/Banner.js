import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import CommonButton from '../CommonButton';
import Colors from '../../assets/Colors';

var {width} = Dimensions.get('window');

const bannerDetail = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-3278215.jpg&fm=jpg',
    title: 'traveling always good idea',
    subTitle: 'IT LEAVES YOU SPEECLESS, THEN TURNS YOUR INTO A STORYTELLER',
  },
  {
    id: '2',
    image:
      'https://thumbs.dreamstime.com/b/aerial-view-banda-islands-moluccas-archipelago-indonesia-pulau-gunung-api-lava-flows-coral-reef-white-sand-beach-top-travel-aerial-138330839.jpg',
    title: 'to travel is to live',
    subTitle: 'IT LEAVES YOU SPEECLESS, THEN TURNS YOUR INTO A STORYTELLER.',
  },
];

export default function Banner() {
  return (
    <>
      <View style={styles.swiper}>
        <Swiper
          showButtons={false}
          autoplay={true}
          autoplayTimeout={4}
          style={{
            height: width / 2,
          }}
        >
          {bannerDetail.map((item, key) => {
            return (
              <View key={key}>
                <ImageBackground
                  key={item}
                  source={{uri: item.image}}
                  resizeMode="cover"
                  style={styles.banner}
                >
                  <Text style={[styles.text, {height: 70}]}>{item.title}</Text>
                  <Text
                    style={[styles.text, {fontSize: 14, color: Colors.black}]}
                  >
                    {item.subTitle}
                  </Text>
                  <CommonButton
                    buttonStyle={{
                      backgroundColor: null,
                      borderWidth: 1,
                      borderColor: Colors.white,
                      width: 200,
                      alignSelf: 'center',
                    }}
                    buttontext={'BOOK NOW'}
                  />
                </ImageBackground>
              </View>
            );
          })}
        </Swiper>
        <View style={{height: 20}}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  swiper: {
    width: width,
    marginTop: '5%',
    alignItems: 'center',
  },
  banner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  text: {
    color: Colors.darkSecondary,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
