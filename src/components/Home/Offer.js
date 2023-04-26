import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonText from '../CommonText';
import {FlatList} from 'react-native';
import {Colors} from '../../assets/Assets';
import {Card} from 'react-native-shadow-cards';

const offerDetails = [
  {
    id: '1',
    title: 'Affordable Pricing',
    icon: require('../../assets/img/price.png'),
    subTitle:
      'Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.',
  },
  {
    id: '2',
    title: 'High class Hotels',
    icon: require('../../assets/img/hotel.png'),
    subTitle:
      'Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.',
  },
  {
    id: '3',
    title: 'Highest Security',
    icon: require('../../assets/img/padlock.png'),
    subTitle:
      'Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.',
  },
  {
    id: '4',
    title: 'Luxury Transport',
    icon: require('../../assets/img/van.png'),
    subTitle:
      'Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.',
  },
];

const Offer = () => {
  return (
    <View style={{margin: 10}}>
      <CommonText
        titleText={'Our Blazzing offers'}
        subTitleText={'Lorem Ipsum is simply dummy text of the industry.'}
      />
      <FlatList
        data={offerDetails}
        keyExtractor={item => item.id}
        // horizontal={true}
        renderItem={({item}) => {
          return (
            <View>
              <Card style={{padding: 10, margin: 10}}>
                <Image
                  source={item.icon}
                  style={{
                    width: 50,
                    height: 50,
                    marginHorizontal: 150,
                    marginVertical: 20,
                  }}
                />

                <CommonText
                  titleText={item.title}
                  subTitleText={item.subTitle}
                />
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Offer;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    backgroundColor: Colors.lightPrimary,
    padding: 10,
  },
});
